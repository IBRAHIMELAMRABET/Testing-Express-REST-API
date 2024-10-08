import mongoose from "mongoose";
import supertest from "supertest";
import createServer from "../utils/server";
import * as UserService from "../service/user.service";
import * as SessionService from "../service/session.service";
import { createUserSessionHandler } from "../controller/session.controller";

const app = createServer();

const userId = new mongoose.Types.ObjectId().toString();

const userPayload = {
  _id: userId,
  email: "jane.doe@example.com",
  name: "Jane Doe",
};

const userInput = {
  email: "test@example.com",
  name: "Jane Doe",
  password: "Password123",
  passwordConfirmation: "Password123",
};

const sessionPayload = {
  _id: new mongoose.Types.ObjectId().toString(),
  user: userId,
  valid: true,
  userAgent: "PostmanRuntime/7.28.4",
  createdAt: new Date("2021-09-30T13:31:07.674Z"),
  updatedAt: new Date("2021-09-30T13:31:07.674Z"),
  __v: 0,
};

describe("user", () => {
  describe("user registration", () => {
    describe("given the user name and password are valid", () => {
      it("should return the user payload", async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, "createUser")
          // @ts-ignore
          .mockReturnValueOnce(userPayload);

        const { body, statusCode } = await supertest(app)
          .post("/api/users")
          .send(userInput);
        expect(statusCode).toBe(200);
        expect(body).toStrictEqual(userPayload);
        expect(createUserServiceMock).toHaveBeenCalled();
        expect(createUserServiceMock).toHaveBeenCalledTimes(1);
        expect(createUserServiceMock).toHaveBeenCalledWith(userInput);
      });
    });
    describe("given the passwords do not match", () => {
      it("should return a status 400", async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, "createUser")
          // @ts-ignore
          .mockReturnValueOnce(userPayload);

        const { statusCode } = await supertest(app)
          .post("/api/users")
          .send({ ...userInput, passwordConfirmation: "notMatch" });
        expect(statusCode).toBe(400);
        expect(createUserServiceMock).not.toHaveBeenCalled();
        expect(createUserServiceMock).toHaveBeenCalledTimes(0);
      });
    });
    describe("given the user service throws", () => {
      it("should return a status 409", async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, "createUser")
          // @ts-ignore
          .mockRejectedValueOnce("something went wrong !!");

        const { statusCode } = await supertest(app)
          .post("/api/users")
          .send(userInput);
        expect(statusCode).toBe(409);
        expect(createUserServiceMock).toHaveBeenCalled();
        expect(createUserServiceMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("Create user session", () => {
    describe("given the user name and password are valid", () => {
      it("should return a signed  accessToken and refreshToken", async () => {
        jest
          .spyOn(UserService, "validatePassword")
          // @ts-ignore
          .mockReturnValueOnce(userPayload);
        jest
          .spyOn(SessionService, "createSession")
          // @ts-ignore
          .mockReturnValueOnce(sessionPayload);
        const req = {
          get: () => {
            return "a user agent";
          },
          body: {
            email: "test@example.com",
            password: "Password123",
          },
        };
        const send = jest.fn();
        const res = {
          send,
        };
        // @ts-ignore
        await createUserSessionHandler(req, res);
        expect(send).toHaveBeenCalledTimes(1);
        expect(send).toHaveBeenCalledWith(
          expect.objectContaining({
            accessToken: expect.any(String),
            refreshToken: expect.any(String),
          })
        );
      });
    });
  });
});

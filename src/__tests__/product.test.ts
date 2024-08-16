//
import supertest from "supertest";
import createServer from "../utils/server";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { createProduct } from "../service/product.service";
import { signJwt } from "../utils/jwt.utils";
const app = createServer();

const userId = new mongoose.Types.ObjectId().toString();

export const productPayload = {
  user: userId,
  title: "Canon EOS 1500D DSLR Camera with 18-55mm Lens",
  description:
    "Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.",
  price: 879.99,
  image: "https://i.imgur.com/QlRphfQ.jpg",
};

const expectedProductPayload = {
  ...productPayload,
  __v: 0,
  _id: expect.any(String),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
  productId: expect.any(String),
  user: expect.any(String),
};
export const userPayload = {
  _id: userId,
  name: "user test",
  email: "test@gmail.com",
};
beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("Product", () => {
  describe("get product route", () => {
    describe("given product not defined", () => {
      it("should return 404", async () => {
        const productId = "product-1234";
        await supertest(app).get(`/api/products/${productId}`).expect(404);
      });
    });
    describe("given product defined", () => {
      it("should return 200 status exist", async () => {
        const product = await createProduct(productPayload);
        const { body, statusCode } = await supertest(app).get(
          `/api/products/${product.productId}`
        );
        expect(statusCode).toBe(200);
        expect(body.productId).toBe(product.productId);
      });
    });
  });

  describe("create product route", () => {
    describe("given the user is not logged in", () => {
      it("should return 403", async () => {
        const { statusCode } = await supertest(app)
          .post("/api/products")
          .send(productPayload);
        expect(statusCode).toBe(403);
      });

      it("should return 200 and create the product", async () => {
        const jwt = signJwt(userPayload);
        const { body, statusCode } = await supertest(app)
          .post("/api/products")
          .set("Authorization", `Bearer ${jwt}`)
          .send(productPayload);
        expect(statusCode).toBe(200);
        expect(body).toStrictEqual(expectedProductPayload);
      });
    });
  });
});

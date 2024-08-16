export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G2iMVrCt6JGp72XpI6j
3L5FpUmYJrG6iNGXh9Fay66Orhx36zBjumSGq45pmSgNODN3gH/Tz4yctSyUjqgw
CRIV1VfyTZiWpIwyIfvpK0eCpljYcZUTD+qnxWPVVI8CtHZY64aNPCO8bYISgWsr
JYGMy4JkUJbHiA4LBeGOncs8Wbe/NhT9LGfNdPbl0kE/rFJwZzaje6YdJIyV9tyW
o0x7Uck99ELvAuUGHUeMKJwJe98ua86jDrYz7ZTkPRmVZTzPK/NI2KE2hZ63v8OK
8KD6lAaJjtXrOOqsncQ9c6Uhg9f/6bQewfjZ+8MmSESl4BOdKL04fdUobVPYQqL/
lwIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDQbaIxWsK3okan
vZekjqPcvkWlSZgmsbqI0ZeH0VrLro6uHHfrMGO6ZIarjmmZKA04M3eAf9PPjJy1
LJSOqDAJEhXVV/JNmJakjDIh++krR4KmWNhxlRMP6qfFY9VUjwK0dljrho08I7xt
ghKBayslgYzLgmRQlseIDgsF4Y6dyzxZt782FP0sZ8109uXSQT+sUnBnNqN7ph0k
jJX23JajTHtRyT30Qu8C5QYdR4wonAl73y5rzqMOtjPtlOQ9GZVlPM8r80jYoTaF
nre/w4rwoPqUBomO1es46qydxD1zpSGD1//ptB7B+Nn7wyZIRKXgE50ovTh91Sht
U9hCov+XAgMBAAECggEBAIid4/svv4P4ZRGb7yLYsEWHnkT6GTX7twXpQ8atjjMF
xtYPKPdK74OEUtVucn8GRqv46DKdFuvrAeirQPDFAz9e0FrX26XLB6rxjgbChRJu
PA/nGnBQw37iU3fJuVJErwQ0spImzrqFvgOVh6W25kAeS3g1jqVYP49JjSYcs4tv
NbCDl3KTVX1baKpssgA4mQWVGPwcSDVHdYWnDixLR4Lec1sVPROAoyUqz3HR4oDb
vtRgpgRZ6wR0HT9RgUjCtsLeAh6NpfDxB23QyODdlJg7ptqMwxzZiTWP8tplBJX5
EagIiTTKBw6/1RYw9xb+5laGcsbCMGn8kBJ6PkCqwgkCgYEA7vayXZNEoziX/gyY
jiRX9UO9Ax8xSaT1NuzC2FMnYgCbTuNa4UYH1sM/a+U96OCgxTMMHOJq0e4fN2kS
MunY0RP8aaiS1TRveYP/3VaUsKhqeu9X5wbDhKVEe2rgYHQkzCFzxzCIl5Vjs0OQ
5J1Cm11hrkvwCz75Z9NsXtrIgMUCgYEA30mjV74IL1+86yltu7QFqYIhkmO7Egq1
AawkkFVr/S6VmpOgXedgsGN2o2kbFEYaUTvOY1L7BI+jKdAT6jTgsQXv+tXyQKw0
Nxk07QGllHrtIyU/ZFK7H81AlMRnFyaAgjFcqd+YXEFq4cGzigKNZRFY/hHdVnXE
1oIEUEk4zKsCgYALo4hcdmfJa2A7x3FGuw5tq7bxB/vmklo/Kpjy4FnytATcesZa
YobPNwNHxgqV5Rrvf+T/IygAwZBTqpJwWGNvC4Inw0YjjEJBsOQta6IiWJGXG0E0
x2eOdl43hKUZDY8dQiPZd8uvVl9cw9WyzNYJqyquypQOeCq9m9aTaCSL4QKBgQC7
xqexQESN4otzkFGSCuDAHomxHGHT2GFEWMoe/1djgeuaJRA2KEDt1ZeN8PQu5o13
Rz5X1Q74VPs4TJ6S1YkoFgAtCANEVA1NUMtrjXj8FyyZ49cdvV1Ubz4iXdD8bQqh
cnWk/j6ZRwJlfIpKQ785AY+/irKC5WN1qb2K7yjvJQKBgQDmAU+41M+BmsZuJ5RA
+umgqNnap4ulYsTRxL8nQVPWWJA/MvYoGLKEKhUCk/bCoFXAfGIF3SKa3DHtMC2S
KY1Vsn8W+SzkJ+jucEhfc3N6yIi2UFa6a9xa9mk7dAp91cbWtwakqhXmF6pX0iZZ
B7q58ptzKunwd0O6PrdP/d2XXg==
-----END PRIVATE KEY-----`,
};

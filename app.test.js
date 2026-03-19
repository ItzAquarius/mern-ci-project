const request = require("supertest");
const app = require("./index");

describe("API Tests", () => {

  test("GET / should return Hello CI", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello CI");
  });

  test("GET /api should return updated backend message", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Updated Backend");
  });

});
import * as _ from "lodash";
import * as request from "supertest";
import app = require('../app');

describe("Test the root path", () => {
  test("It should respond to the GET method", async () => {
    
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world!");
  });
});

describe("Test the /hello path", () => {
  test("It should respond to the GET method", async () => {
    
    const response = await request(app).get("/hello");

    expect(response.status).toBe(200);
    expect(response.type).toEqual("application/json");
    expect(_.isEqual(JSON.parse(response.text),{"hello":"world"})).toBe(true);
  });
});

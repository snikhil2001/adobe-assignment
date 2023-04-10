const supertest = require("supertest");
const app = require("../src/index");

const fetchRequest = supertest(app);

describe("api server testing", () => {
  test("api is live or not", async () => {
    const response = await fetchRequest.get("/");
    expect(response.status).toBe(200);
  }, 10000);
});

describe("users endpoints", () => {
  // create a new user

  test("should create a new user with status code 200 or give userId to existing user", async () => {
    const res = await fetchRequest.post("/users").send({
      name: `Nikhil`,
      email: `nikhil@gmail.com`,
      bio: "I am your friend Nikhil",
    });
    expect(res.status).toBe(200);
    expect(res.body.userId !== null);
  }, 10000);

  // get user by id
  test("get user by id", async () => {
    const response = await fetchRequest.get(`/users/64337026c612921e0c06d86c`);
    expect(response.status).toBe(200);
  }, 10000);

  test("user inputs wrong id", async () => {
    const response = await fetchRequest.get(`/users/643279bd3e9adc416118ac53`);
    try {
      expect(response.status).toBe(404);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);

  //delete user by id

  // test("delete user by id", async () => {
  //   const response = await fetchRequest.delete(
  //     `/users/64336f8cc612921e0c06d869`
  //   );
  //   expect(response.status).toBe(200);
  // }, 10000);

  test("user inputs wrong id", async () => {
    const response = await fetchRequest.delete(
      `/users/643279bd3e9adc416118ac53`
    );
    try {
      expect(response.status).toBe(404);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);

  //update user details by id

  test("User bio and name should be changed", async () => {
    const res = await fetchRequest.put(`/users/64337026c612921e0c06d86c`).send({
      name: "Nikhil Sahni",
      bio: "This is your friend Nikhil",
    });
    expect(res.status).toBe(200);
  }, 10000);

  test("user inputs wrong id", async () => {
    const response = await fetchRequest
      .put(`/users/643279bd3e9adc416118ac53`)
      .send({
        name: "Nikhil Sahni",
        bio: "This is your friend Nikhil",
      });
    try {
      expect(response.status).toBe(404);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);
});

describe("analytics endpoints", () => {
  test("get all users", async () => {
    try {
      const response = await fetchRequest.get("/analytics/users");
      expect(response.status).toBe(200);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);

  test("get top active users", async () => {
    try {
      const response = await fetchRequest.get("/analytics/users/top-active");
      expect(response.status).toBe(200);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);

  test("get all posts", async () => {
    try {
      const response = await fetchRequest.get("/analytics/posts");
      expect(response.status).toBe(200);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);

  test("get top liked posts", async () => {
    try {
      const response = await fetchRequest.get("/analytics/users/top-active");
      expect(response.status).toBe(200);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);
});

describe("all posts endpoints", () => {
  test("should create a new post with status code 200", async () => {
    const res = await fetchRequest.post("/posts").send({
      content: "This is Nikhil's post",
      userId: "64337026c612921e0c06d86c",
    });
    expect(res.status).toBe(200);
  }, 10000);

  // get post by id
  test("get post by id", async () => {
    const response = await fetchRequest.get(`/posts/6431526e14f9339dce4283ba`);
    expect(response.status).toBe(200);
  }, 10000);

  test("user inputs wrong id", async () => {
    const response = await fetchRequest.get(`/posts/64329a51612a9be350aa5d5a`);
    try {
      expect(response.status).toBe(404);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);

  //delete post by id

  // test("delete post by id", async () => {
  //   const response = await fetchRequest.delete(
  //     `/posts/643151fb14f9339dce4283b2`
  //   );
  //   expect(response.status).toBe(200);
  // }, 10000);

  test("user inputs wrong id", async () => {
    const response = await fetchRequest.delete(
      `/posts/6433791b9f3ce677add0cd4b`
    );
    try {
      expect(response.status).toBe(404);
    } catch (error) {
      expect(response.status).toBe(404);
    }
  }, 10000);

  //update post details by id

  test("Post content should be changed", async () => {
    const res = await fetchRequest.put(`/posts/6431526e14f9339dce4283ba`).send({
      userId: "6431524614f9339dce4283b6",
      content: "Test post",
    });
    expect(res.status).toBe(200);
  }, 10000);
});

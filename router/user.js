const express = require("express");
// import createCustomer from "../controller/customers/createCustomer";
const { sql } = require("../database/index");
const { createCustomer } = require("../controller/customers/createCustomer");
const { deleteCustomer } = require("../controller/customers/deleteCustomer");
const { getCustomer } = require("../controller/customers/getCustomer");
const { updateCustomer } = require("../controller/customers/updateCustomer");
const commentRouter = express.Router();
// const  {createCustomers}  = require("../controller/customers/createCustomer");
commentRouter
  .post("/", createCustomer)
  .get("/", getCustomer)
  .put("/:id", updateCustomer)
  .delete("/:id", deleteCustomer)
  .post("/orders", async (request, response) => {
    const { customerid, orderdate, productid } = request.body;

    try {
      await sql`insert into ORDERS (customerid, orderdate, productid)
                values ( ${customerid}, ${orderdate}, ${productid})`;
      response.status(200).json(request.body);
    } catch (error) {
      response.status(400).json({ message: error });
    }
  })
  .post("/products", async (request, response) => {
    const { productname, price } = request.body;
    try {
      await sql`Insert Into products(productname, price)
                Values(${productname},${price})`;
      response.status(200).json(request.body);
    } catch (error) {
      response.status(200).json({ message: error });
    }
  })
  .put("/products/:id", async (request, response) => {
    const { id } = request.params;
    const { productname } = request.body;
    console.log(request.body);
    // response.status(200).
    // try {
    //   await sql`UPDATE products
    //     SET pname='${productname}
    //     WHERE productid=${id}`;
    //   response.status(200).json(request.body);
    // } catch (error) {
    //   response.status(400).json(error);
    // }
  });

module.exports = commentRouter;

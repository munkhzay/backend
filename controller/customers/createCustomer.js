const { request, response } = require("express");
const { sql } = require("../../database/index");

exports.createCustomer = async (request, response) => {
  const { firstname, lastname, email, address } = request.body;
  const customers = await sql`SELECT * FROM customers`;
  try {
    await sql`INSERT INTO customers (firstname, lastname, email, address)
                    VALUES (${firstname}, ${lastname}, ${email}, ${address})`;

    response.status(200).json({ customers: request.body });
  } catch (error) {
    response.status(400).json({ message: "error" });
  }
};

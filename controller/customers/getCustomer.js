const { request, response } = require("express");
const { sql } = require("../../database/index");

exports.getCustomer = async (request, response) => {
  const customers = await sql`SELECT * FROM customers`;

  response.status(200).json({
    data: customers,
  });
};

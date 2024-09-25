const { request, response } = require("express");
const { sql } = require("../../database/index");

exports.deleteCustomer = async (request, response) => {
  const { id } = request.params;
  // const { customers } = await sql`SELECT * FROM customers`;

  try {
    await sql`delete from customers
                 where customerid=${id};`;
    response.status(200).json(id);
  } catch (error) {
    {
      response.status(400).json({ message: "error" });
    }
  }
};

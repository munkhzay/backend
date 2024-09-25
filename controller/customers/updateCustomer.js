const { request, response } = require("express");
const { sql } = require("../../database/index");

exports.updateCustomer = async (request, response) => {
  const { firstname, lastname, email, address } = request.body;
  const { id } = request.params;

  try {
    await sql`update customers
                set firstname= ${firstname}, lastname=${lastname}, email=${email}, address=${address}
                where customerid=${id};`;
    response.status(200).json(request.body);
  } catch (error) {
    {
      response.status(400).json({ message: "oh error" });
    }
  }
};

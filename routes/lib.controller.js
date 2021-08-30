const express = require('express');
const router = express.Router();
const customers = require("../controllers/main.controller.js");

    router.get("/viewlayout", customers.viewlayout);

    // Payment Charge
    router.post("/filter", customers.filter);

    // Update a Customer with customerId
    router.get("/customers/", customers.findAll);
  
    // Delete a Customer with customerId
    //router.delete("/customers/:customerId", customers.delete);
    module.exports = router;

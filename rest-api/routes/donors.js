const express = require("express");
const router = express.Router();
const Donor = require("../models/donor");

router
  .post("/donors", async (req, res) => {
    try {
      const { userName, address, city, state, mobile, bloodGroup } = req.body;
      const newDonor = new Donor({
        userName,
        address,
        city,
        state,
        mobile,
        bloodGroup,
      });
      const savedDonor = await newDonor.save();

      res.status(200).json(savedDonor);
    } catch (error) {
      console.error("Error creating donor:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .get("/donorById/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const donor = await Donor.findOne({ _id });
      if (!donor) {
        return res.status(400).json({ error: "Donor not found" });
      }
      res.status(200).json(donor);
    } catch (error) {
      console.error("Error retrieving donor:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .get("/donors", async (req, res) => {
    try {
      const donors = await Donor.find();
      res.json(donors);
    } catch (error) {
      console.error("Error retrieving donors:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }).put('/donorById/:_id', async (req, res) => {
    try {
      const { _id } = req.params;
      const updateData = req.body;
      const updatedDonor = await Donor.findByIdAndUpdate(_id, updateData, { new: true });
      if (!updatedDonor) {
        return res.status(404).json({ error: 'Donor not found' });
      }
      res.json(updatedDonor);
    } catch (error) {
      console.error('Error updating donor:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;

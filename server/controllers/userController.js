const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { signToken } = require("../utils/auth");
const mongoose = require("mongoose");

module.exports = {
    
  async postUser(req, res) {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  async loginUser(req, res) {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = signToken(user);
      console.log(user);

      return res
        .status(200)
        .json({ message: "Login successful", token: token, user: user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async authCheck(req, res) {
    if (req.session.user) {
      return res.status(200).json({ isAuthenticated: true });
    } else {
      console.log(req.session);
      return res.status(401).json({ isAuthenticated: false });
    }
  },
  
  async getNotes(req,res){
    try{
        const userId = req.params.id
        const user = await User.findById(userId).populate('notes')

        if(!user){
          return res.status(404).json({message:'user not found'})
        }

        const userNotes = user.notes
        res.json(userNotes)

    } catch (error) {
        console.log(error);
      res.status(400).send(error);
    }
},
};

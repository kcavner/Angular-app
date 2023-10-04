const mongoose = require("mongoose");
const express = require("express");
const Note = require("../models/Notes")

module.exports = {

    async postNote(req, res){
        try {
        const note = new Note(req.body)
        await note.save()
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
      res.status(400).send(error);
    }
},

}
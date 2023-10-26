const mongoose = require("mongoose");
const express = require("express");
const Note = require("../models/Notes")
const User = require("../models/User")

module.exports = {

    
    async postNote(req, res){
        try {
            console.log(req.body)
            console.log("endpoint hit")
            const newNote = new Note(req.body)

        await newNote.save()
        res.status(201).send(newNote);
    } catch (error) {
        console.log(error);
      res.status(400).send(error);
    }
},
    async deleteNote(req,res){
        try{
            const objectId = req.params.id
            const result = await Note.findByIdAndRemove(objectId)

            if (!result) {
                return res.status(404).json({ error: 'Document not found' });
              }
            res.json({ message: 'Document deleted successfully' });
        }catch(error){
            console.log(error);
      res.status(400).send(error);
        }
    }

}
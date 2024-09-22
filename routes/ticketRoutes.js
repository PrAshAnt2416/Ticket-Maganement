const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Create a new ticket
router.post('/tickets', async (req, res) => {
    const { title, description, status } = req.body;
    if (!title || !description || !status) {
        res.status(400).json({ status: false, message: "Please fill all fields" });
    }
    
    try {
        const newTicket = new Ticket({ title, description, status });
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error ticket:', error });
    }
});

// Retrieve all tickets
router.get('/gettickets', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: ' fetching error ', error });
    }
});

// Retrieve a single ticket by ID
router.get('/tickets/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) return res.status(404).json({ message: 'Not founding ticket' });
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: 'fetching error', error });
    }
});

// Update a ticket by ID
router.put('/tickets/:id', async (req, res) => {
    const { title, description, status } = req.body;
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, {
            title, description, status, lastUpdatedDate: Date.now()
        }, { new: true });
        if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: 'Updating the error ticket', error });
    }
});

// Delete a ticket by ID
router.delete('/tickets/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) return res.status(404).json({ message: 'not found ticket' });
        res.status(200).json({ message: 'Ticket is deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting ticket', error });
    }
});

module.exports = router;

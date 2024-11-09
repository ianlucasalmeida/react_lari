const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all users
router.get('/', async (req, res) => {
  const users = await db.User.findAll();
  res.render('index', { users });
});

// Add a new user
router.post('/add', async (req, res) => {
  await db.User.create({
    name: req.body.name,
    email: req.body.email,
  });
  res.redirect('/');
});

// Delete a user
router.post('/delete/:id', async (req, res) => {
  await db.User.destroy({ where: { id: req.params.id } });
  res.redirect('/');
});

module.exports = router;

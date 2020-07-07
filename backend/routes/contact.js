const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET api/contact
// @desc    Get all users contact
// @access  Private
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/contact
// @desc    Add new contact
// @access  Public
router.post(
  '/',
  [
    [
      check('fullName', 'Full Name is Required').not().isEmpty(),
      check('age', 'Age is Required').not().isEmpty(),
      check('phone', 'Please include a valid phone number').isMobilePhone(),
      check('email', 'Please include a valid email').isEmail()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, age, phone, email } = req.body;
    try {
      const newContact = new Contact({
        fullName,
        age,
        phone,
        email
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/contact/:id
// @desc    Update contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { fullName, age, phone, email } = req.body;
  // Build checklist object
  const contactFields = {};
  if (fullName) contactFields.fullName = fullName;
  if (age) contactFields.age = age;
  if (phone) contactFields.phone = phone;
  if (email) contactFields.email = email;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });
    // Make sure user owns checklist
    // if (contact.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/contact/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });
    // Make sure user owns contact
    // if (contact.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

const express = require('express');
const app = express();

// Middleware: JSON parse করার জন্য
app.use(express.json());

// Facebook VERIFY TOKEN (এইটাই Facebook Console এ দিবে)
const VERIFY_TOKEN = "my_verify_token";

// GET /webhook → Facebook verification করার জন্য
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    console.log('✅ WEBHOOK_VERIFIED');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// POST /webhook → Messenger message handle করার জন্য
app.post('/webhook', (req, res) => {
  console.log('📩 Incoming Message:', JSON.stringify(req.body, null, 2));
  res.status(200).send('EVENT_RECEIVED');
});

// Vercel এর জন্য export করতে হবে
module.exports = app;

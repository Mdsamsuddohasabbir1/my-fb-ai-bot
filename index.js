const express = require('express');
const serverless = require('serverless-http'); // 🟢 নতুন লাইন
const app = express();

app.use(express.json());

const VERIFY_TOKEN = "my_verify_token";

// ✅ Facebook Verification
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

// ✅ Incoming Messages
app.post('/webhook', (req, res) => {
  console.log('📩 Incoming Message:', JSON.stringify(req.body, null, 2));
  res.status(200).send('EVENT_RECEIVED');
});

// ✅ Export for Vercel
module.exports.handler = serverless(app); // 🟢 Express কে Serverless বানানো

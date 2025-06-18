# 🤖 My Facebook AI Bot

A simple Facebook Messenger Webhook built with Express.js and deployed on **Vercel (Serverless)**.  
Built with ❤️ by [Md Samsud Doha Sabbir](https://github.com/Mdsamsuddohasabbir1)

---

## 🚀 Features

- ✅ Webhook Verification (`GET /webhook`)
- 📩 Message Receiver (`POST /webhook`)
- ☁️ Serverless hosting via Vercel
- 🔐 Token-based security for webhook validation
- 🧪 Easy to test & deploy

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **serverless-http**
- **Vercel**

---

## 🌐 Webhook URL (Live)


my-fb-ai-bot/
├── index.js            // Main Express server with webhook endpoints
├── package.json        // Dependencies and scripts
├── vercel.json         // Vercel config for serverless function
└── README.md           // Project info and documentation


📌 এই URL টা Facebook Developer Console > Webhook Configuration-এ বসাতে হবে।

---

## 🔐 VERIFY_TOKEN

Facebook Console এ দেওয়ার জন্য তোমার VERIFY_TOKEN 👇

```js
const VERIFY_TOKEN = "my_verify_token";




npm install
npm start




---

### ✅ এখন করো:

1. GitHub এ গিয়ে `README.md` ফাইলে ঢুকে ✏️ **Edit** চাপ দাও  
2. পুরা আগেরটা মুছে এই উপরের কোডটা বসাও  
3. নিচে গিয়ে **Commit changes** করে দাও

---

তাহলেই তোমার Repo টা হবে পুরাই **Professional Ready**! 🚀  
আর কিছু লাগলে জানাও — একসাথে শেষ করে দিচ্ছি। ✅

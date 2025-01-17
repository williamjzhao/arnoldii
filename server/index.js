const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");

<<<<<<< HEAD
const serviceAccount = require('../sakey.json');
=======
const serviceAccount = require("../serviceAccountKey.json");
>>>>>>> 6f34f7c493ca23f480db4f8a458aba686e7c80ee

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
const PORT = 8080;

app.use(cors());

app.post("/user/:id/plants", async (req, res) => {
  const userRef = db.collection("users").doc(req.params.id);
  const doc = await userRef.get();

  if (!doc.exists) {
    console.log("No such document!");
    return res.status(400).send({ error: "No such doc" });
  } else {
    const data = doc.data();
    const plants = data.plants;

    plants.push({
      id: req.body.id,
      name: req.body.name,
    });

    return res.status(200).send(plants);
  }
});

app.get("/user/:id/plants", async (req, res) => {
  const userRef = db.collection("users").doc(req.params.id);
  const doc = await userRef.get();

  if (!doc.exists) {
    console.log("No such document!");
    return res.status(400).send({ error: "No such doc" });
  } else {
    const data = doc.data();
    console.log("Plants:", data.plants);
    return res.status(200).send(data.plants);
  }
});

app.get("/user/:id", async (req, res) => {
  const userRef = db.collection("users").doc(req.params.id);
  const doc = await userRef.get();

  if (!doc.exists) {
    console.log("No such document!");
    return res.status(400).send({ error: "No such doc" });
  } else {
    console.log("Document data:", doc.data());
    return res.status(200).send(doc.data());
  }
});

app.get("/plant/:id", async (req, res) => {
  const plantRef = db.collection("plants").doc(req.params.id);
  const doc = await plantRef.get();

  if (!doc.exists) {
    console.log("No such document!");
    return res.status(400).send({ error: "No such doc" });
  } else {
    return res.status(200).send(doc.data());
  }
});

app.get("/plant", async (req, res) => {
  const plantRef = db.collection("plants");
  const snapshot = await plantRef.get();

  const plants = [];
  snapshot.forEach((doc) => {
    plants.push(doc.data());
  });

  return res.status(200).send(plants);
});
app.listen(PORT);

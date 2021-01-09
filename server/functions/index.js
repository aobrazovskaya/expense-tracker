const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();

const serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://expensetracker-8abdc-default-rtdb.firebaseio.com"
});
const db = admin.firestore();

app.use(cors({ origin: true }));

//get
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});

//post
app.post('/create', (req, res) => {
  (async () => {
      try {
        await db.collection('items').doc('/' + req.body.id + '/')
            .create({item: req.body.item});
        return res.status(200).send();
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    })();
});

// delete
app.delete('/delete/:item_id', (req, res) => {
  (async () => {
      try {
          const document = db.collection('items').doc(req.params.item_id);
          await document.delete();
          return res.status(200).send();
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
      })();
  });

exports.app = functions.https.onRequest(app);
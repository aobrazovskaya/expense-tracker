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
app.get('/expenses', async (req, res) => {
  try {
    const response = await db.collection('expenses').get().then(result => {
      const expenses = result.docs;
      return expenses.map(expense => {
        const data = expense.data();
        return {
          id: expense.id,
          ...data,
          date: data.date.toDate()
        }
      }).sort((a, b) => new Date(a.date) - new Date(b.date))
    });
    return res.status(200).send(response);
  } catch (e) {
    console.error(e)
    return res.status(500).send(e);
  }
});

//post
app.post('/expenses', (req, res) => {
  (async () => {
      try {
        await db.collection('expenses').doc()
            .set({
              title: req.body.title,
              price: req.body.price,
              category: req.body.category,
              date: admin.firestore.Timestamp.fromDate(new Date())
            });
        return res.status(200).send();
      } catch (error) {
        return res.status(500).send(error);
      }
    })();
});

//put
app.put('/newexpense', (req, res) => {
  (async () => {
    try {
      await db.collection('expenses').doc(req.body.id)
      .update({
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        id: req.body.id
      });
      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error);
      }
    })();
});

// delete
app.delete('/expenses/:item_id', (req, res) => {
  (async () => {
    try {
      const document = db.collection('expenses').doc(req.params.item_id);
      await document.delete();
      return res.status(200).send();
    } catch (error) {
      return res.status(500).send(error);
    }
    })();
  });

exports.app = functions.https.onRequest(app);
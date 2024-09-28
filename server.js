const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createObjectCsvWriter } = require('csv-writer');

const app = express();
const port = 5000; // Change as needed

app.use(cors());
app.use(bodyParser.json());

const csvWriter = createObjectCsvWriter({
  path: 'messages.csv', // Path to save the CSV file
  header: [
    { id: 'name', title: 'Name' },
    { id: 'email', title: 'Email' },
    { id: 'message', title: 'Message' }
  ],
  append: true // Append messages to the file
});

app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await csvWriter.writeRecords([{ name, email, message }]);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error saving message. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

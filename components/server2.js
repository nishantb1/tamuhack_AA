const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const projectId = 'tensile-reducer-412611'; // Replace with your Dialogflow project ID

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, 'session-id');

app.post('/chatbot', async (req, res) => {
  const { message } = req.body;

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json({ reply: result.fulfillmentText });
  } catch (error) {
    console.error('Error processing Dialogflow request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log("Server is running at http://localhost:${port}");
});
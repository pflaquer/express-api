const express = require('express');
const fs = require('fs');

const app = express();

app.post('/api/append', async (req, res) => {
  // Get the data from the request body
  const data = req.body;

  // Read the JSON file
  const file = await fs.readFile('data.json');

  // Append the data to the JSON file
  const json = JSON.parse(file);
  json.push(data);
  const newFile = JSON.stringify(json, null, 2);

  // Write the JSON file
  await fs.writeFile('data.json', newFile);

  // Successfully appended the data to the JSON file
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

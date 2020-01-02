const express = require('express');
const app = express();
const PORT = process.env.PORT || 1111;

app.get('/', (_, res) => {
  res.status(200).json({ result: 'Home Page' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

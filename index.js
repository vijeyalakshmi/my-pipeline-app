const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Pipeline! This is the automated CI / CD deployment!');
});

module.exports = app;

// Use the Cloud Foundry-assigned port, or fallback to 3000 locally
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

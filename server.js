const express = require('express');
const app = express();

app.get('/:hash', (req, res) => {
  const hash = req.params.hash; // Get the hash from the URL
  const targetUrl = `https://inshorturl.com/${hash}`; // Target redirect URL

  // Send an HTML response with a redirecting message
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="refresh" content="3;url=${targetUrl}">
        <title>Redirecting...</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20%;
            color: #333;
          }
          a {
            color: #007BFF;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Redirecting...</h1>
        <p>You will be redirected in 3 seconds. If not, click <a href="${targetUrl}">here</a>.</p>
      </body>
    </html>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

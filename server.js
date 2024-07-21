const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse plain text
app.use(bodyParser.text({ type: "text/plain" }));

// POST endpoint to receive TradingView webhook
app.post("/webhook", (req, res) => {
  console.log("body ", req.body);
  const plainText = req.body;
  const [symbol, action, , value] = plainText.split(" ");

  const transformedPayload = {
    symbol: symbol,
    action: action,
    value: value,
  };

  console.log("Received payload:", plainText);
  console.log("Transformed payload:", transformedPayload);

  // Do something with the transformed payload
  // For example, you can forward it to another service or process it
  // ...

  res.send("Webhook received and transformed");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const http = require('http');
const express = require('express');
const QRCode = require('qrcode');
const cors = require('cors');

const PORT = 8080;

const app = express();

app.use(express.json({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
  })
);

app.get('/', (_, res) => {
  res.send('Server Test !!!');
});

app.post('/make', (req, res) => {
  const { url } = req.body;

  QRCode.toDataURL(url, (err, qrcode) => {
    if (err) {
      console.err(err);
    }

    res.send(qrcode);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});

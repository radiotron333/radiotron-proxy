const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const response = await fetch('http://air.doscast.com:8036/currentsong?sid=1');
    const titolo = await response.text();
    res.send(titolo);
  } catch (error) {
    res.status(500).send('Errore nel recupero del titolo');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy Radiotron avviato sulla porta ${PORT}`);
});

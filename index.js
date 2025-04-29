const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', '*'); // <<< QUESTA RIGA ABILITA CORS
    const response = await fetch('http://air.doscast.com:8036/currentsong?sid=1', {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const titolo = await response.text();
    res.send(titolo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Errore nel recupero del titolo');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy Radiotron avviato sulla porta ${PORT}`);
});

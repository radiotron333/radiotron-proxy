const express = require('express');
const app = express();
const PORT = 8036; // Porta fissa per il proxy

// Rotta principale del proxy
app.get('/', (req, res) => {
  res.send('Radiotron Proxy attivo sulla porta 8036');
});

// Rotta per gestire altre richieste (personalizzala)
app.get('/stream', (req, res) => {
  res.send('Dati dello stream radio');
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Proxy in esecuzione su http://localhost:${PORT}`);
});

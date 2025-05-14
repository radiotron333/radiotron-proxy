import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Relaxound - sostituisci l'URL con quello reale
app.get("/relaxound", async (req, res) => {
  try {
    const resp = await fetch("http://air.doscast.com:8036/currentsong?sid=1");
    const text = await resp.text();
    res.send(`Relaxound: ${text}`);
  } catch (err) {
    res.status(500).send("Errore Relaxound: " + err.message);
  }
});

// Doscats
app.get("/doscats", async (req, res) => {
  try {
    const resp = await fetch("http://air.doscats.com:8044/currentsong?sid=1");
    const text = await resp.text();
    res.send(`Doscats: ${text}`);
  } catch (err) {
    res.status(500).send("Errore Doscats: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});

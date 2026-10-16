const express = require('express');
const fs = require('node:fs');
const path = require('node:path');

const app = express();
const buildDirectory = path.resolve(__dirname, '../client/dist');
app.disable('x-powered-by');

app.get('/api/health', (_, response) => {
  response.json({ status: 'ok', application: 'lina-chez-lidl' });
});
app.use('/api', (_, response) => response.status(404).json({ error: 'Route introuvable' }));
app.use(express.static(buildDirectory));
app.get('*', (request, response) => {
  if (path.extname(request.path)) return response.status(404).send('Fichier introuvable');
  const index = path.join(buildDirectory, 'index.html');
  if (fs.existsSync(index)) return response.sendFile(index);
  response.status(503).type('text').send('Le frontend doit être compilé avec npm run build, ou lancé avec npm run dev.');
});

module.exports = app;

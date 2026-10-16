const app = require('./app');
const port = Number(process.env.PORT || 3001);
const server = app.listen(port, () => {
  console.log(`Lina chez Lidl — Express : http://localhost:${port}`);
});
server.on('error', (error) => {
  console.error(`Impossible de démarrer Express : ${error.message}`);
  process.exitCode = 1;
});
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.close(() => process.exit(0)));
}

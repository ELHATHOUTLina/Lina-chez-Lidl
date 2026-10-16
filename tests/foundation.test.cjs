const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server/app');

const navigation = import('../client/src/data/navigation.mjs');

test('la recherche retrouve les sections pour les mots-clés demandés', async () => {
  const { findSections } = await navigation;
  const cases = [
    ['caisse', ['experiences', 'competences']],
    ['expériences', ['experiences']],
    ['COMPÉTENCES', ['competences']],
    ['disponibilité', ['disponibilite']],
    ['contact', ['contact']],
    ['mise en rayon', ['experiences', 'competences']],
  ];
  for (const [query, expected] of cases) {
    assert.deepEqual(findSections(query).map(({ id }) => id), expected, query);
  }
});

test('la recherche normalise les accents et combine les mots utiles', async () => {
  const { findSections } = await navigation;
  assert.equal(findSections('mes compétences en caisse')[0]?.id, 'competences');
  assert.equal(findSections('  À propos de moi  ')[0]?.id, 'a-propos');
  for (const query of ['', '   ', 'zzzzzz', 'de la']) assert.deepEqual(findSections(query), []);
});

test('Express répond à la santé et distingue les API et ressources absentes', async (context) => {
  const server = app.listen(0, '127.0.0.1');
  await new Promise((resolve) => server.once('listening', resolve));
  context.after(() => new Promise((resolve) => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;
  const response = await fetch(`${base}/api/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok', application: 'lina-chez-lidl' });
  assert.equal(response.headers.get('x-powered-by'), null);
  assert.equal((await fetch(`${base}/api/missing`)).status, 404);
  assert.equal((await fetch(`${base}/assets/missing.png`)).status, 404);
});


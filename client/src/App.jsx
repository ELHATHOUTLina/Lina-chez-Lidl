import Header from './components/Header';
import Candidature from './sections/Candidature';
import Categories from './sections/Categories';
import Experiences from './sections/Experiences';
import Disponibilite from './sections/Disponibilite';
import About from './sections/About';
import Skills from './sections/Skills';
import Ticket from './sections/Ticket';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return <div id="haut-de-page" className="app">
    <a className="skip-link" href="#main-content">Aller au contenu principal</a>
    <Header />
    <main id="main-content" tabIndex={-1} aria-label="Contenu de la candidature">
      <Candidature /><Categories /><Experiences /><Disponibilite /><About /><Skills /><Ticket /><Contact />
    </main>
    <Footer />
  </div>;
}

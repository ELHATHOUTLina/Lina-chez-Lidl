import { useState } from 'react';
import Header from './components/Header';
import MainNavigation from './components/MainNavigation';
import TicketModal from './components/TicketModal';
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
  const [ticketOpen, setTicketOpen] = useState(false);

  return <div id="haut-de-page" className="app">
    <a className="skip-link" href="#main-content">Aller au contenu principal</a>
    <main id="main-content" tabIndex={-1} aria-label="Contenu de la candidature">
      <Header onOpenTicket={() => setTicketOpen(true)} ticketOpen={ticketOpen} /><Categories /><Candidature /><MainNavigation /><Experiences /><Disponibilite /><Skills /><About /><Ticket onOpenTicket={() => setTicketOpen(true)} /><Contact />
    </main>
    <Footer />
    <TicketModal open={ticketOpen} onClose={() => setTicketOpen(false)} />
  </div>;
}

import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

const currentUrl = new URL(window.location.href);
let hasTrackingParameters = false;

for (const parameter of [...currentUrl.searchParams.keys()]) {
  if (parameter.toLowerCase().startsWith('utm_')) {
    currentUrl.searchParams.delete(parameter);
    hasTrackingParameters = true;
  }
}

if (hasTrackingParameters) {
  window.history.replaceState(null, '', `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`);
}

createRoot(document.getElementById('root')).render(<App />);

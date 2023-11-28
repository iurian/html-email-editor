import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

((win: Window, doc) => {
  const domContentLoaded = 'DOMContentLoaded';
  const renderRoot = () => {
    const container = doc.getElementById('root');
    const root = createRoot(container!);
    root.render(<App />);
  };

  const _domReadyHandler = () => {
    doc.removeEventListener(domContentLoaded, _domReadyHandler, false);
    renderRoot();
  };

  switch (doc.readyState) {
    case 'loading':
      doc.addEventListener(domContentLoaded, _domReadyHandler, false);
      break;
    case 'interactive':
    case 'complete':
    default:
      renderRoot();
  }
})(window, document);

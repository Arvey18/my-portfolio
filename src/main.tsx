import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleReCaptchaProvider } from '@google-recaptcha/react';
import './styles/main.scss';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider
      type="v3"
      siteKey={import.meta.env.VITE_REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </StrictMode>
);

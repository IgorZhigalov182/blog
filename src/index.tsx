import ReactDOM from 'react-dom';
import '@/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import './shared/config/i18n/i18n';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

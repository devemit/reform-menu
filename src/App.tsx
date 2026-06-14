import { LanguageProvider } from './contexts/language-context';
import MainHeader from './components/navbar/main-header';
import QR from './components/qr/qr';
import { AppRoutes } from './routes/app-routes';

const App = () => {
  return (
    <LanguageProvider>
      <MainHeader />
      <AppRoutes />
      <QR />
    </LanguageProvider>
  );
};

export default App;

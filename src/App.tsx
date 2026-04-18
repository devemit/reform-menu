import { LanguageProvider } from './contexts/LanguageContext';
import MainHeader from './components/navbar/MainHeader';
import ScrollToTop from './utils/scrollToTop';
import QR from './components/QR';
import { AppRoutes } from './routes/AppRoutes';

const App = () => {
  return (
    <LanguageProvider>
      <MainHeader />
      <AppRoutes />
      <ScrollToTop />
      <QR />
    </LanguageProvider>
  );
};

export default App;

import "../styles/global.css";
import MainLayout from "../components/layouts/MainLayout";
import ContextProvider from "../components/ContextProvider";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  const hideNavbar = Component.hideNavbar || false;
  const hideFooter = Component.hideFooter || false;

  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <MainLayout hideNavbar={hideNavbar} hideFooter={hideFooter}>
          <Component {...pageProps} />
        </MainLayout>
      </ContextProvider>
    </ThemeProvider>
  );
}

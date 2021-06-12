import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Routes from './routes';

import { theme } from './styles/theme';
import './styles/global.css';
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext';

function App() {
  return (
    <Router>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <SidebarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </SidebarDrawerProvider>
    </Router>
  );
}

export default App;

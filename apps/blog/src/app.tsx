import { useState } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Container,
} from '@mantine/core';
import Landing from './pages/landing';

interface Props {
  history: any;
  colorScheme: ColorScheme;
  isIsolated?: boolean;
}

const App = ({
  history,
  colorScheme: initialColorScheme,
  isIsolated = false,
}: Props) => {
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(initialColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const MainRouter = () => (
    <Router history={history}>
      <Switch>
        <Route path="/blog" component={Landing} />
      </Switch>
    </Router>
  );

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {isIsolated ? (
          <Container>
            <MainRouter />
          </Container>
        ) : (
          <MainRouter />
        )}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;

import { lazy, Suspense, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Container,
} from '@mantine/core';
import { HeaderSimple } from './components/header';
const Marketing = lazy(() => import('./components/marketing'));

interface Props {
  colorScheme: ColorScheme;
  isIsolated?: boolean;
}

const App = ({
  colorScheme: initialColorScheme,
  isIsolated = false,
}: Props) => {
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(initialColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const MainRouter = () => (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Marketing} />
      </Switch>
    </Suspense>
  );

  return (
    <BrowserRouter>
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
              <HeaderSimple
                links={[
                  {
                    link: '/',
                    label: 'Home',
                  },
                  {
                    link: '/about',
                    label: 'Features',
                  },
                  {
                    link: '/pricing',
                    label: 'Pricing',
                  },
                  {
                    link: '/learn',
                    label: 'Learn',
                  },
                  {
                    link: '/community',
                    label: 'Community',
                  },
                ]}
              />
              <MainRouter />
            </Container>
          ) : (
            <MainRouter />
          )}
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  );
};

export default App;

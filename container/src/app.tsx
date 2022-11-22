import { lazy, Suspense, useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Container,
  Loader,
} from '@mantine/core';
import Header from './components/header';
import Footer from './components/footer';
import NotFound from './pages/notfound';

const Marketing = lazy(() => import('./pages/marketing'));
const Blog = lazy(() => import('./pages/blog'));

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

  const aboutLinks = [
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
      link: '/blog',
      label: 'Blog',
    },
  ];
  const footer = {
    data: [
      {
        title: 'About',
        links: aboutLinks,
      },
      {
        title: 'Project',
        links: [
          {
            label: 'Contribute',
            link: '#',
          },
          {
            label: 'Media assets',
            link: '#',
          },
          {
            label: 'Changelog',
            link: '#',
          },
          {
            label: 'Releases',
            link: '#',
          },
        ],
      },
      {
        title: 'Community',
        links: [
          {
            label: 'Join Discord',
            link: '#',
          },
          {
            label: 'Follow on Twitter',
            link: '#',
          },
          {
            label: 'Email newsletter',
            link: '#',
          },
          {
            label: 'GitHub discussions',
            link: '#',
          },
        ],
      },
    ],
  };

  const MainRouter = () => (
    <Suspense
      fallback={
        <Container>
          <Loader />
        </Container>
      }
    >
      <Switch>
        <Route
          path={['/about', '/pricing']}
          component={() => <Marketing colorScheme={colorScheme} />}
        />
        <Route
          path="/blog"
          component={() => <Blog colorScheme={colorScheme} />}
        />
        <Route path="*" component={NotFound} />
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
          theme={{ colorScheme, loader: 'bars' }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Header links={aboutLinks} />
          {isIsolated ? (
            <Container mt={20}>
              <MainRouter />
            </Container>
          ) : (
            <MainRouter />
          )}
          <Footer {...footer} />
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  );
};

export default App;

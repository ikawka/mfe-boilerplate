import { createRoot, Root } from 'react-dom/client';
import { ColorScheme } from '@mantine/core';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './app';

interface MountOptions {
  defaultHistory?: any;
  onNavigate?: any;
  initialPath?: string;
  colorScheme?: ColorScheme;
  isIsolated?: boolean;
}

const mount = (
  root: Root,
  {
    onNavigate,
    defaultHistory,
    initialPath = '/',
    colorScheme = 'light',
    isIsolated = false,
  }: MountOptions,
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  root.render(
    <App history={history} colorScheme={colorScheme} isIsolated={isIsolated} />,
  );

  return {
    onParentNavigate({ pathname: nextPathname }: any) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = createRoot(document.getElementById('root') as HTMLElement);

  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
      isIsolated: true,
    });
  }
}

export { mount };

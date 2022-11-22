import ReactDOM from 'react-dom';
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
  el: HTMLElement,
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

  ReactDOM.render(
    <App history={history} colorScheme={colorScheme} isIsolated={isIsolated} />,
    el,
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
  const el = document.getElementById('marketing-root');

  if (el) {
    mount(el, {
      defaultHistory: createBrowserHistory(),
      isIsolated: true,
    });
  }
}

export { mount };

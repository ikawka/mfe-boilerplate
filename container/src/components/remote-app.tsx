import { ColorScheme } from '@mantine/core';
import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface RemoteAppProps {
  colorScheme: ColorScheme;
  mount: any;
}

const RemoteApp = ({ colorScheme, mount }: RemoteAppProps) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
        colorScheme,
        onNavigate: ({ pathname: nextPathname }: any) => {
          const { pathname } = history.location;
          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      });
      history.listen(onParentNavigate);
    }
  }, [ref.current]);

  return <div ref={ref} />;
};

export default RemoteApp;

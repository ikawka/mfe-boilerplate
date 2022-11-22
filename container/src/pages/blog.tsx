import { mount } from 'blog/App';
import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ colorScheme }: any) => {
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

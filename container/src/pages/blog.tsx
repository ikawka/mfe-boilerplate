import { mount } from 'blog/App';
import RemoteApp from '../components/remote-app';

const Blog = ({ colorScheme }: any) => {
  return <RemoteApp colorScheme={colorScheme} mount={mount} />;
};

export default Blog;

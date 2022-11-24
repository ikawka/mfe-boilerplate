import { mount } from 'marketing/App';
import RemoteApp from '../components/remote-app';

const Marketing = ({ colorScheme }: any) => {
  return <RemoteApp colorScheme={colorScheme} mount={mount} />;
};

export default Marketing;

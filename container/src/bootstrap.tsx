import ReactDOM from 'react-dom';
import App from './app';

const el = document.getElementById('root');
ReactDOM.render(<App colorScheme="light" isIsolated={true} />, el);

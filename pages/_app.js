import { wrapper } from '../store';
import 'semantic-ui-css/semantic.min.css';
import '../styles/global.scss';

const EntryApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

export default wrapper.withRedux(EntryApp);

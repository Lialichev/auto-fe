import { wrapper } from '../store';
import 'semantic-ui-css/semantic.min.css';

const EntryApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

export default wrapper.withRedux(EntryApp);

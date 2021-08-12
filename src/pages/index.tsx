import { Redirect } from 'react-router-dom';
import Layout from 'src/components/Layout';
import Routes from './Routes';

const validRoutes = () => {
  return [
    '/home',
    '/member',
    '/event',
    '/guest',
    '/pdf-result',
    '/not-found',
  ].includes(window.location.pathname);
};

const Pages: React.FC = () => {
  if (!validRoutes()) {
    return <Redirect to='/home' />;
  }
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default Pages;

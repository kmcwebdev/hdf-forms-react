import { Redirect } from 'react-router-dom';
import Layout from 'src/components/Layout';
import Routes from './Routes';

const validRoutes = () => {
  return ['/home', '/member', '/event', '/guest', '/not-found'].includes(
    window.location.pathname
  );
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

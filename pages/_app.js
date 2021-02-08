import '../assets/main.css';
import '../assets/chrome-bug.css';

import { useEffect } from 'react';
import Layout from '../components/Layout';
import { UserContextProvider } from '../components/UserContext';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <div className="bg-gray-100 min-height-vh">
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </div>
  );
}

import '../styles/globals.css'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log("-App", pageProps);
  return <Component {...pageProps}></Component>
}

export default MyApp

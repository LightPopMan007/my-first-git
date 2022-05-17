import Layout from "../components/Layout";
import 'tailwindcss/tailwind.css'
import "../styles/globals.css";
import "@material-tailwind/react/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

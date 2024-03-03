import "@/styles/globals.css";
import "../styles/Layout.module.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* {"hi"} */}
    </Layout>
  );
}

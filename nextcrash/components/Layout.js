import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;

// When you use Layout in another component or page, any content between the opening and closing tags of Layout will be automatically passed as the children prop. Let me illustrate this with an example:
// // In some other component or page
// import Layout from "@/components/Layout";

// const SomePage = () => {
//   return (
//     <Layout>
//       <p>This is some content for the page.</p>
//     </Layout>
//   );
// };
// In this example, <p>This is some content for the page.</p> is the content between the opening and closing tags of Layout. React automatically passes this content as the children prop to the Layout component. Therefore, when you render Layout in SomePage, it effectively becomes:

// <Nav></Nav>
// <Header></Header>
// <p>This is some content for the page.</p>

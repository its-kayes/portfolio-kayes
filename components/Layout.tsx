import Footer from "./Footer";
import Navbar from "./Navbar";


// children: any;

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}


// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const Layout = ({ children:any }) => {
//     return (
//         <div className="bg-primary">
//             <Navbar />
//             {children}
//             <Footer />
//         </div>
//     )
// }

// export default Layout;
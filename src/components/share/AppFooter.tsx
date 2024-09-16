import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { GiVineFlower } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "rgb(27, 26, 26)",
        marginLeft: "150px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <GiVineFlower
          style={{ fontSize: "24px", marginRight: "8px", color: "white" }}
        />
        <span style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
          Plantify
        </span>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ margin: "0 15px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 15px" }}>
          About
        </Link>
        <Link to="/contact-us" style={{ margin: "0 15px" }}>
          Contact
        </Link>
        <Link to="/terms" style={{ margin: "0 15px" }}>
          Terms of Service
        </Link>
        <Link to="/privacy" style={{ margin: "0 15px" }}>
          Privacy Policy
        </Link>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#3b5998" }}
        >
          <FaFacebook style={{ fontSize: "24px" }} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#E1306C" }}
        >
          <FaInstagram style={{ fontSize: "24px" }} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#1DA1F2" }}
        >
          <FaTwitter style={{ fontSize: "24px" }} />
        </a>
      </div>
      <div style={{ color: "white" }}>
        © {new Date().getFullYear()} Plantify. All Rights Reserved.
      </div>
    </Footer>
  );
};

export default AppFooter;

// import React from "react";
// import { Layout } from "antd";
// import { Link } from "react-router-dom";
// import { GiVineFlower } from "react-icons/gi";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// const { Footer } = Layout;

// const AppFooter: React.FC = () => {
//   return (
//     <Footer
//       style={{
//         textAlign: "center",
//         backgroundColor: "rgb(27, 26, 26)",
//         color: "white",
//         position: "fixed",
//         bottom: 0,
//         width: "100%",
//         padding: "20px 50px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <GiVineFlower
//           style={{ fontSize: "40px", color: "white", marginRight: "10px" }}
//         />
//         <h3 style={{ color: "white" }}>Plantify</h3>
//       </div>
//       <div>
//         <p style={{ margin: "10px 0", color: "white" }}>
//           &copy; 2024 Plantify. All rights reserved.
//         </p>
//         <div>
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ margin: "0 10px" }}
//           >
//             <FaFacebook style={{ color: "white", fontSize: "20px" }} />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ margin: "0 10px" }}
//           >
//             <FaInstagram style={{ color: "white", fontSize: "20px" }} />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ margin: "0 10px" }}
//           >
//             <FaTwitter style={{ color: "white", fontSize: "20px" }} />
//           </a>
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <Link to="/" style={{ color: "white", marginRight: "10px" }}>
//             Home
//           </Link>
//           <Link to="/about" style={{ color: "white", marginRight: "10px" }}>
//             About Us
//           </Link>
//           <Link to="/contact-us" style={{ color: "white" }}>
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </Footer>
//   );
// };

// export default AppFooter;

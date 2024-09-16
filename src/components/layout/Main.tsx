// import React, { useState } from "react";
// import { Layout } from "antd";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Headers from "./Header";
// import AppFooter from "../share/AppFooter";

// const { Content } = Layout;

// const Main: React.FC = () => {
//   const [collapsed, setCollapsed] = useState<boolean>(true);

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Headers />
//       <Layout style={{ paddingTop: "5vh" }}>
//         <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
//         <Content
//           style={{
//             padding: "0 24px",
//             minHeight: 280,
//             marginLeft: collapsed ? "20px" : "30px",
//             transition: "margin-left 0.3s ease",
//           }}
//         >
//           <Outlet />
//         </Content>
//       </Layout>
//       <AppFooter />
//     </Layout>
//   );
// };

// export default Main;

import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Headers from "./Header";
import AppFooter from "../share/AppFooter";

const { Content } = Layout;

const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [contentWidth, setContentWidth] = useState<string>("calc(100% - 80px)");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    // Calculate content width based on sidebar state
    const calculateWidth = () => {
      if (window.innerWidth <= 600) {
        setContentWidth("100%");
      } else if (window.innerWidth <= 768) {
        setContentWidth(collapsed ? "calc(100% - 50px)" : "calc(100% - 200px)");
      } else {
        setContentWidth(collapsed ? "calc(100% - 80px)" : "calc(100% - 250px)");
      }
    };

    // Call it initially and on window resize
    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [collapsed]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Headers />
      <Layout style={{ paddingTop: "5vh" }}>
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <Content
          style={{
            padding: "0 24px",
            minHeight: 280,
            width: contentWidth,
            transition: "width 0.3s ease",
          }}
        >
          <div className="banner">
            {/* Your carousel or banner component here */}
            <Outlet />
          </div>
        </Content>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default Main;

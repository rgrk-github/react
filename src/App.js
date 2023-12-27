import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app-layout-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);

import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body/Body";
import Content from "./components/Content/Content";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";




const AppLayout =() => {
  return(
      <div className="app">
          <Header />
          <Hero />
          <Body/>
          <Content/>
          <Faq/>
          <Footer/>
      </div>
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
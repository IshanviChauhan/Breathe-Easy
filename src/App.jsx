import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body/Body";
import Content from "./components/Content/Content";
import Error from "./components/Error/Error";
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

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Header/>
        },
        {
            path:"/about",
            element:<Content/>
        },{
            path:"/faq",
            element:<Faq/>
        }
    ],
    errorElement:<Error/>
}
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)
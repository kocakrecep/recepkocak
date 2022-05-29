import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainSplit from "../split/mainSplit";


function App() {
  return (
    <div className="fullheight">
      <Header/>
      <MainSplit/>
      <Footer/>
    </div>
  );
}

export default App;

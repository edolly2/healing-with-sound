import React, { useState } from "react";
import "./App.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Button from "./_components/_Buttons";

function App() {
  const [enterBtnClicked, setEnterBtnClicked] = useState(false);

  function clicked() {
    if (enterBtnClicked === true) {
      // hide shit
      console.log(true);
    } else {
      // dont hide shit
    }
    return true;
  }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Button text="Button" onClick={() => setEnterBtnClicked(clicked())} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

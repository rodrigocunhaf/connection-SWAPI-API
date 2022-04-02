import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {

  const [items, setItems] = useState({
    data:[],
    type:''
  });

  const setVisibleItems = ( response ) =>{
    setItems( prevState => {
      return {...prevState, data: response.data, type:response.type}
    });
  };


  return (
    <React.Fragment>
        <Header setVisibleItems={setVisibleItems}/>
        <Main items={items}/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;

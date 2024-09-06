import React from 'react';
import './App.css';
import {MyCustomButtonComponent} from "./components/my-custom-button-component/MyCustomButtonComponent";

const App = () => {
    return (
        <>
            <MyCustomButtonComponent label={'first btn'} nameOfClass={"btn"}>asssd</MyCustomButtonComponent>
            <MyCustomButtonComponent label={'second btn'} nameOfClass={"btn"}>asssd</MyCustomButtonComponent>
            <MyCustomButtonComponent label={'third btn'} nameOfClass={"btn"}>asssd</MyCustomButtonComponent>
        </>
  );
}

export default App;

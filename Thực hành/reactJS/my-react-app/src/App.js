import React from 'react';
import './style.css';
import Heading1 from "./component/Heading1";
import Heading2 from "./component/Heading2";
import Header from "./component/Header";
import Container from "./component/Container";
import News from "./component/News";
import Email from "./component/Email";
import Footer from "./component/Footer";

function App() {
  return (
    <div style={{ margin: "0px 0px", width: "1200px" }}>
      <div style={{ margin: "0px 0px", width: "1200px", alignContent: "center"}}>
          <Heading1 />
      </div>

      <div>
        <Heading2/>
      </div>

      <div>
        <Header/>
      </div>

      <div>
        <Container/>
      </div>

      <div>
        <News/>
      </div>

      <div>
        <Email/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;

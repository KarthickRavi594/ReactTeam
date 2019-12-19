import React from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
//import Main from './component/Main'
import Containers from './component/Containers';



function App() {
  return (
    <div className="App">
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" integrity="sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm" crossOrigin="anonymous"></script>


      <Header />
      {/* <Main/>  */}
      <Containers/>   

      {/* <Count/> */}
      {/* <Section /> */}
      {/* <Connect/> */}
      <Footer />
  
    </div>
  );
}

export default App;

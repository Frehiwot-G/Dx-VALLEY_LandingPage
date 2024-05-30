// // import logo from './logo.svg';
// import './App.css';
// import About from './components/About'
// // import Home from './components/Home';
// import Homee from './components/Homee';

// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'flexslider/flexslider.css';
// import './App.css';
// import Banner from './components/Banner';
// import CustomModal from './components/CustomModal';
// import $ from 'jquery';
// import 'flexslider';

// function App() {
//   useEffect(() => {
//     $(window).on('load', function() {
//       $('.flexslider').flexslider({
//         animation: 'slide',
//         start: function(slider) {
//           $('body').removeClass('loading');
//         }
//       });
//     });
//   }, []);

// function App() {
//   return (
//    <>
//      <Homee/>
//     <About/>
//    </>

//   );
// }

// export default App;

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "flexslider/flexslider.css";
import "./App.css";
import Banner from "./components/Banner";
import CustomModal from "./components/CustomModel";
import $ from "jquery";
import "flexslider";
import Contact from "./components/contact/Contact";

function App() {
  useEffect(() => {
    $(window).on("load", function () {
      $(".flexslider").flexslider({
        animation: "slide",
        start: function (slider) {
          $("body").removeClass("loading");
        },
      });
    });
  }, []);

  return (
    <div className="home">
      <Banner />
      <CustomModal />
    </div>
  );
}

export default App;

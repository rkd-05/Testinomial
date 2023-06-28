import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    // this is top level div that is containing the entire page
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
     {/* this div starts form "Our testinomial"   */}
      <div className="text-center">    
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        {/*  this div starts from "image" */}
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        {/* Testinomial contains the white page */}
        <Testimonials reviews={reviews}/>

      </div>
    </div>
  );
};

export default App;

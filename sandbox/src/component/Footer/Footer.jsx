import React from "react";
const Footer = () =>{
    return ( <footer className="bg-gray-900 text-white">
    <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
      <h1
        className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
       md:w-2/5"
      >
        <span className="text-teal-400">Login</span> Now For Free Course
      </h1>
      <div>
        <input
          type="text"
          placeholder="e.g.DSK1457KCS"
          className="text-gray-400 bg-white
         sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
        />
        <button className="btn btn-active">Referal Code</button>
      </div>
    </div>
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    text-center pt-2 text-gray-400 text-sm pb-8"
    >
      <span>© 2023 NewsLab, Inc.</span>
      <span>Terms · Privacy Policy</span>
      <span></span>
    </div>
  </footer>
);
}

export default Footer;
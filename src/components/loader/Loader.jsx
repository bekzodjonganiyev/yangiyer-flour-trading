import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="w-screen h-screen text-center bg-[rgba(0,0,0,0.5)]">
      {/* <div className="p-10 text-3xl bg-orange-400">
        Loading...
      </div> */}
      {/* <div classname="wheat bg-black z-40"></div> */}
      {/* <div class="ring">
        Loading
        <span></span>
      </div> */}
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
};

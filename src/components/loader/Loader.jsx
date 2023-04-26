import React from "react";
import "./Loader.css";
import Loading from "../../assets/loading.gif"
export const Loader = () => {
  return (
    <div className="loaders">
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div>
      </div>
    </div>
    </div>
  );
};

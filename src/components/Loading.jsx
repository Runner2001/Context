import React from "react";

const Loading = () => {
  console.log("Loading run");
  return (
    <div className="loading_container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

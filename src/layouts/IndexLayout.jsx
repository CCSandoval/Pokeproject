import React from "react";

const IndexLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between bg-bg">
      <div className="h-full">{children}</div>
    </div>
  );
};

export default IndexLayout;

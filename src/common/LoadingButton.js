import React from "react";

const LoadingButton = ({ loading, onClick, children }) => {
  return (
    <button
      className={"login-button " + (loading ? "disabled" : "")}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
LoadingButton.defaultProps = {
  loading: false,
  onClick: () => console.log("click"),
};

export default LoadingButton;

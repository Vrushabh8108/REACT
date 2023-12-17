import React from "react";
import ReactDOM from "react-dom";

const ele = <h1>Hello World</h1>;

const FunComponent = () => {
  return (
    
    <div>
        {ele}
      <h1>Hello, I am a functional component!</h1>
      <p>This is some JSX content rendered by the component.</p>
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunComponent />);

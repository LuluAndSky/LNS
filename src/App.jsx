import React from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { url } = useFetch();
  return (
    <div>
      {url}
      <h1>App Component</h1>
    </div>
  );
};

export default App;

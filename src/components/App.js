
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

      <p>
        <Tooltip text="This is another tooltip">Hover over me to see another tooltip</Tooltip>
      </p>

      <p>
        <Tooltip text="This is a tooltip"><button>Hover over me</button></Tooltip>
      </p>

    </div>
  );
}

export default App;

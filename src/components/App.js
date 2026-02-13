
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Tooltip Demo</h2>

      <p>
        <Tooltip text="this is another tooltip">Hover over me to see another tooltip</Tooltip> 
      </p>

      <p>
        Here's a <Tooltip text="This is a tooltip"><button>Hover over me</button></Tooltip> with a tooltip.
      </p>

    </div>
  );
}

export default App;

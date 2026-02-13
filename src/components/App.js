
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Tooltip Demo</h2>

      <p>
        Hover over the <Tooltip text="I am a tooltip for the word 'word'">word</Tooltip> to see the tooltip.
      </p>

      <p>
        Here's a <Tooltip text="Tooltip on a button"><button>button</button></Tooltip> with a tooltip.
      </p>

      <p>
        Emoji: <Tooltip text="Smiley tooltip">🙂</Tooltip>
      </p>

    </div>
  );
}

export default App;

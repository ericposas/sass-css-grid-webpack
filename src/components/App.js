import React from 'react';
import Grid from './Grid';


const App = ({ textContent }) => {

  return (
    <>
      <div class="title">
        {textContent}
      </div>
      <Grid />
    </>
  );

};

export default App;

import React from 'react';
import HornedBeast from './hornedBeasts.js';
import data from '../data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((beast) => {
          return <HornedBeast title={beast.title} description={beast.description} source={beast.image_url} />;
        })}
      </main>
    );
  }
}

export default Main;

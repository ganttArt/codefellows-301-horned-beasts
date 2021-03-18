import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import rawData from './data.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main data={rawData} />
        <Footer />
      </div>
    );
  }
}

export default App;

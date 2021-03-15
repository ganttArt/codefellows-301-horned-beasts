import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;

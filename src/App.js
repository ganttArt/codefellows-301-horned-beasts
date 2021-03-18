import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import SelectedBeast from './components/selectedBeast';
import rawData from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: rawData[7]
    }
  }

  updateSelectedBeast = (beast) => {
    this.setState({ selectedBeast: beast })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SelectedBeast beast={this.state.selectedBeast}/>
        <Main
          data={rawData}
          updateSelectedBeast={this.updateSelectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

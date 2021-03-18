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
      rawData: rawData,
      selectedBeast: {},
      show: false
    }
  }

  handleModalVisibility = (index) => {
    this.setState({
      selectedBeast: this.state.rawData[index],
      show: true
    })
  }

  handleHide = () => {
    this.setState({ show: false});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SelectedBeast
          show={this.state.show}
          hide={this.handleHide}
          beast={this.state.selectedBeast}
        />
        <Main
          data={rawData}
          updateSelectedBeast={this.updateSelectedBeast}
          handleModalVisibility={this.handleModalVisibility}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

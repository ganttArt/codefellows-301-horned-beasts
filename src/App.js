import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import SelectedBeast from './components/selectedBeast';
import rawData from './data.json';
import { Form } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rawData: rawData,
      selectedBeast: {},
      show: false,
      hornNumber: 1
    }
  }

  handleModalVisibility = (index) => {
    this.setState({
      selectedBeast: this.state.rawData[index],
      show: true
    })
  }

  handleHide = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Form>
          <Form.Group>
            <Form.Label>Filter by Horn #</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => this.setState({ hornNumber: Number(e.target.value) })}
              style={{ width: '10em' }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <SelectedBeast
          show={this.state.show}
          hide={this.handleHide}
          beast={this.state.selectedBeast}
        />
        <Main
          data={rawData.filter(beast => beast.horns === this.state.hornNumber)}
          updateSelectedBeast={this.updateSelectedBeast}
          handleModalVisibility={this.handleModalVisibility}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import HornedBeast from './hornedBeasts.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Container>
          <Row>
            {this.props.data.map((beast, index) => (
              <HornedBeast
                key={index}
                title={beast.title}
                description={beast.description}
                source={beast.image_url}
                index={index}
                handleModalVisibility= {this.props.handleModalVisibility}
              />
            ))}
          </Row>
        </Container>
      </main >
    );
  }
}

export default Main;

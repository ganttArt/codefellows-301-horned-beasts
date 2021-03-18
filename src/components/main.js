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
            {this.props.data.map((beast) => (
              <div key={beast.title}>
                <HornedBeast
                  title={beast.title}
                  description={beast.description}
                  source={beast.image_url}
                />
              </div>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;

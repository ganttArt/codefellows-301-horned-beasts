import React from 'react';
import HornedBeast from './hornedBeasts.js';
import data from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Container>
          <Row>
            {data.map((beast) => (
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

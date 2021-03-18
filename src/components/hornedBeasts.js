import React from 'react';
import { Card, Col } from 'react-bootstrap';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  addFavorite = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  }

  render() {
    return (
      <Col>
        <Card style={{ width: '18rem'}} onClick={() => this.props.handleModalVisibility(this.props.index)}>
          <Card.Img variant="top" onClick={this.addFavorite} src={this.props.source} alt={this.props.description}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <small>❤️ {this.state.favorites}</small>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;

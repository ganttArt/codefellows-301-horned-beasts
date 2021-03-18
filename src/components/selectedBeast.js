import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{this.props.beast.description}</p>
          <img
            src={this.props.beast.image_url}
            alt={this.props.beast.title}
            style={{ width: '100%' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hide}>Close</Button>
        </Modal.Footer>
      </Modal>

    )
  }
}

export default SelectedBeast;
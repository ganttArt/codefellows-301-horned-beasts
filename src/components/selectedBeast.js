import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{this.props.beast.description}</p>
          <img
            src={this.props.beast.image_url}
            alt={this.props.beast.title}
            style={{maxWidth: '100%'}}
          />
        </Modal.Body>
      </Modal.Dialog>
    )
  }
}

export default SelectedBeast;
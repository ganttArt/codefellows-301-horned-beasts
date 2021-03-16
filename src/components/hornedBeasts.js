import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <div class="horned-beast">
        <h2>{this.props.title}</h2>
        <img src={this.props.source} alt={this.props.description}/>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;

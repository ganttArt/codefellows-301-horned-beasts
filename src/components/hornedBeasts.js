import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  addFavorite = () => {
    this.setState({favorites: this.state.favorites + 1});
  }

  render() {
    return (
      <div className="horned-beast">
        <h2>{this.props.title}</h2>
        <img onClick={this.addFavorite} src={this.props.source} alt={this.props.description}/>
        <p>{this.props.description}</p>
        <div>❤️ {this.state.favorites}</div>
      </div>
    );
  }
}

export default HornedBeast;

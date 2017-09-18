import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    console.log(event.target.value);
    //this.setState({ term: event.target.value });
  }

  render() {
    return (
    <div className="search-bar">
      <input
        onChange={this.onInputChange} />
    </div>
    );
  }


  //onInputChange(term) {
  //  this.setState({term});
  //  this.props.onSearchTermChange(term);
  //}

}

export default SearchBar;

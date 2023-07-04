import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <>
        <input onChange={this.props.onFilter} type="text" />
      </>
    );
  }
}

export default Filter;

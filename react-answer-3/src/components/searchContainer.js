import React, { Component } from "react";
import addSearchTextChange from "../actions/addSearchTextChange.js";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {searchText, dispatch} = this.props;

    return (
      <form className="form-container" onSubmit={e => e.preventDefault()}>
        <div>
          <input
            className="input-field"
            placeholder={"Search Task"}
            value={searchText}
            onChange={e => addSearchTextChange(dispatch, e.target.value)}
          />
        </div>
      </form>
    );
  }
}

export default SearchContainer;

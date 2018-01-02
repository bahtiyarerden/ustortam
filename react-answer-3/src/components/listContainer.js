import React, { Component } from "react";
import I from "immutable";
import deleteTodo from "../actions/deleteTodo.js";

class ListContainer extends Component {

  shouldComponentUpdate(nextProps) {
    return !I.is(nextProps.todoItems, this.props.todoItems) || !I.is(nextProps.searchText, this.props.searchText);
  }

  render() {
    const {todoItems, searchText}= this.props;
    const itemsTbShown = todoItems.filter(each => each.get("text").includes(searchText));

    return (
      <div className="list-container">
        {
          itemsTbShown.map(each => {
            return (
              <div key={each.get("id")} className="each-todo">
                {each.get("text")}
                {
                  <button
                    onClick={() => deleteTodo(this.props.dispatch, each.get("id"))}
                    className="delete-icon"
                  >{"X"}
                  </button>
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ListContainer;

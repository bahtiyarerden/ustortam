import React, { Component } from "react";
import {createStore} from "redux";
import FormContainer from "./formContainer.js";
import ListContainer from "./listContainer.js";
import reducer from "./reducer.js";
import I from "immutable";
import "normalize.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {main: I.Map()};
    this.store = createStore(reducer);
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.setState({
        main: this.store.getState()
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="app">
        <FormContainer
          currentInput={this.state.main.get("currentInput", "")}
          dispatch={this.store.dispatch}
        />
        <ListContainer
          todoItems={this.state.main.get("todoItems", I.List())}
          dispatch={this.store.dispatch}
        />
        {
          /*
            Add here a search container for example. Don't forget to pass "dispatch" method
            and "searchText" props...  Inside of this search container you must make very similar things that we did
            in "FormContainer" component. Take text from input:
            1) dispatch an addCurrentSearchInput.js action
            2) go to reducer add "ADD_CURRENT_SEARCH_TEXT" functionality,
            3) take searchText from store pass it to searchContainer component as a prop.
            4) when search button is entered dispatch an action as searchTodo.js
            5) go to reducer add "SEARCH_TODO_ITEM" functionality to update store... look to reducer.

            <SearchContainer
              dispatch={this.store.dispatch}
              searchText={this.state.main.get("searchText", "")}
            />
          */
        }
      </div>
    );
  }
}

export default App;

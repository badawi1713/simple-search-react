import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  serchBarHandler = (e) => {
    e.preventDefault();
    this.setState({ term: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state.term);
    // TODO: make sure call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          onSubmit={(e) => this.submitHandler(e)}
          action=""
          className="ui form"
        >
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                this.serchBarHandler(e);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

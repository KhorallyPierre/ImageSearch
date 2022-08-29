import React from 'react';
import './AppStyling.css'; 

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      
      <div className="ui segment">
        
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder='search image'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
        <button className="searchIt" onClick={this.onFormSubmit}> Search </button>
      </div>
    );
  }
}

export default SearchBar;

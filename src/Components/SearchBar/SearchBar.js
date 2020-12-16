import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedSong: "",
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(searchedSong) {
    this.props.onSearch(this.state.searchedSong);
  }

  handleTermChange(event) {
    this.setState({
      searchedSong: event.target.value,
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter a song, album, or artist"
          onChange={this.handleTermChange}
        />
        <button onClick={this.search} className="SearchButton">
          {!this.searchedSong ? "Connect to Spotify" : "Search"}
        </button>
      </div>
    );
  }
}

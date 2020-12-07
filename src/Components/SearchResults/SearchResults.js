import React from "react";
import "./SearchResults.css";
import { TrackList } from "../TrackList/TrackList";

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Search Results:</h2>
        <p></p>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    );
  }
}

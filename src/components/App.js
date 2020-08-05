import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
   onSearchSubmit(term) {
      // console.log(term);
      axios.get("https://api.unsplash.com/search/photos", {
         params: {
            query: term,
         },
         headers: {
            Authorization:
               "Client-ID grm9rmHKn6EO5Dg6GZS1zokkaHgSwoIcNYfVd3bNwVg",
         },
      });
   }

   render() {
      return (
         <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
         </div>
      );
   }
}

export default App;

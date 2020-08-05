import React from "react";
// import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
   state = { images: [] };

   onSearchSubmit = async (term) => {
      // console.log(term);
      const response = await unsplash.get("/search/photos", {
         params: {
            query: term,
         },
         // headers: {
         //    Authorization:
         //       "Client-ID grm9rmHKn6EO5Dg6GZS1zokkaHgSwoIcNYfVd3bNwVg",
         // },
      });
      // .then((response) => {
      //    console.log(response.data.results);
      // });
      // console.log(response.data.results);
      // console.log(this);
      this.setState({ images: response.data.results });
   };

   render() {
      return (
         <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images
         </div>
      );
   }
}

export default App;

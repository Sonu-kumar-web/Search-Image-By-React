import React from "react";

class SearchBar extends React.Component {
   state = { term: "" };

   // onInputChange(event) {
   //    console.log(event.target.value);
   // }

   // onInputClick() {
   //    console.log("Input was clicked");
   // }

   onFormSubmit(event) {
      event.preventDefault();
   }

   render() {
      return (
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Image Search</label>
                  <input
                     type="text"
                     // onClick={this.onInputClick}
                     // onChange={(e) => console.log(e.target.value)}
                     value={this.state.term}
                     onChange={(e) => this.setState({ term: e.target.value })}
                     placeholder="Enter the image name"
                     required
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;

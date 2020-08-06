import React from "react";

class SearchBar extends React.Component {
   state = { term: "" };

   onFormSubmit = (event) => {
      event.preventDefault();
      // console.log(this.state.term);

      // OnSubmit property is received by props passed from App Component
      this.props.onSubmit(this.state.term);
   };

   render() {
      return (
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Image Search</label>
                  <input
                     type="text"
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

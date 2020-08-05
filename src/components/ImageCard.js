import React from "react";

class ImageCard extends React.Component {
   render() {
      // Use destructing to escape the regular use of "this.props.image"
      const { description, urls } = this.props.image;
      return (
         <div>
            <img
               //    alt={this.props.image.description}
               //    src={this.props.image.urls.regular}
               alt={description}
               src={urls.regular}
            />
         </div>
      );
   }
}

export default ImageCard;

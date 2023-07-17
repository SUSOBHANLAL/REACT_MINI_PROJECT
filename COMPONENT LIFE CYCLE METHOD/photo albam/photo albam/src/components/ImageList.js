// 'import React from "react";
// import Image from "./Image";

// export default class ImageList extends React.Component {
//   // Lifecycle method to prevent re render of the list if some spaces are present

//   shouldComponentUpdate(nextProps,_){
//     const Imagelengh = nextProps.images.length;
//     if(Imagelengh>0){
//       const lastImageurl = nextProps.images[Imagelengh-1];

//       if(lastImageurl.length<=5 || lastImageurl.index(" ")>=0){
//         return false;

//       }
//     }
//     return true;
//   }

//   render() {
//     return (
//       <div className="image-list">
//         {this.props.images.map((image, index) => {
//           return <Image key={index} image={image} />;
//         })}
//       </div>
//     );
//   }
// }



import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  shouldComponentUpdate(nextProps, _) {
    const imagesLength = nextProps.images.length;

    if (nextProps.images.length > 0) {
      const lastImageUrl = nextProps.images[imagesLength - 1];
      if (lastImageUrl.length <= 5 || lastImageUrl.indexOf(" ") >= 0) {
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
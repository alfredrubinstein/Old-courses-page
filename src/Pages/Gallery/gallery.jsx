import React from 'react';
import GalleryHeader from "../../Images/9.jpg";
import "./gallery.css";
import imagesData from './imagesData';

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <img src={GalleryHeader} alt="Gallery Header" />
      </div>

      {/* Gallery Section */}
      <div className="gallery_main container">
        <div className="row">
          {imagesData.map(image => (
            <div className="col-sm-4" key={image.id}>
              <div className="box">
                <img src={image.url} className="img-fluid" alt={`Image ${image.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;

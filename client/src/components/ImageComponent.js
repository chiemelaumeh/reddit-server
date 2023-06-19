import React from "react";
import AuthModalContext from "../context/AuthModalContext";
import { useContext, useState } from "react";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import { fill, thumbnail } from "@cloudinary/url-gen/actions/resize";

import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

function ImageComponent() {
  const { uploadedImage } = useContext(AuthModalContext);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dr6yye7b1",
    },
  });

  const myImage = cld.image(uploadedImage);
  myImage.resize(
    thumbnail().width(43).height(40).gravity(focusOn(FocusOn.face()))
  );

  return (
    <div className="avatar">
      <AdvancedImage cldImg={myImage} />
    </div>
  );
}

export default ImageComponent;

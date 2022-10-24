import React from "react";

type ImgProps = {
  image: string;
  altName: string;
};

const SmallImage: React.FC<ImgProps> = ({ image, altName }: ImgProps) => (
  <img src={image} alt={altName} width={50} height={50} />
);

export default SmallImage;

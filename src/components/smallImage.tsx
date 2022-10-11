import React from "react";

type imgProps = {
  image: string;
  altName: string;
};

const SmallImage: React.FC<imgProps> = ({ image, altName }: imgProps) => (
  <img src={image} alt={altName} width={50} height={50} />
);

export default SmallImage;

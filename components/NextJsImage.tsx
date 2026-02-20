import React from "react";
import Image from "next/image";
// react-photo-album
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return React.createElement(
    "div",
    { style: { ...wrapperStyle, position: "relative" } },
    React.createElement(Image, {
      // priority={true}
      fill: true,
      src: photo,
      // quality: 100,
      placeholder: "blurDataURL" in photo ? "blur" : undefined,
      alt,
      title,
      sizes,
      className,
      onClick,
    }),
  );
}

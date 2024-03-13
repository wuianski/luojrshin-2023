"use client";

// react-photo-album
import PhotoAlbum from "react-photo-album";
import NextJsImage from "@/components/NextJsImage";
// yet-another-react-lightbox
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LightBoxNextJsImage from "@/components/LightBoxNextJsImage";

export default function PhotoGallery({ photos }) {
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const myphotos = photos.map((photo) => ({
    src: `${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${photo.directus_files_id.filename_disk}`,
    width: photo.directus_files_id.width,
    height: photo.directus_files_id.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round(
        (photo.directus_files_id.height / photo.directus_files_id.width) *
          breakpoint
      );
      return {
        src: `${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${photo.directus_files_id.filename_disk}`,
        width: breakpoints,
        height,
      };
    }),
  }));

  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={myphotos}
        layout="rows"
        // columns={1}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        sizes={{
          size: "calc(100vw - 40px)",
          sizes: [
            { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
            { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
            { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
          ],
        }}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        slides={myphotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        // plugins={[]}
        render={{ slide: LightBoxNextJsImage }}
      />
    </>
  );
}

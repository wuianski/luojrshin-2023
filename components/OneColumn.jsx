"use client";

// react-photo-album
import PhotoAlbum from "react-photo-album";
import NextJsImage from "@/components/NextJsImage";
// yet-another-react-lightbox
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import LightBoxNextJsImage from "@/components/LightBoxNextJsImage";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function PhotoGallery({ photos, params }) {
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  // const myphotos = photos.map((photo) => ({
  //   src: `${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${photo.directus_files_id.filename_disk}`,
  //   width: photo.directus_files_id.width,
  //   height: photo.directus_files_id.height,

  //   srcSet: breakpoints.map((breakpoint) => {
  //     const height = Math.round(
  //       (photo.directus_files_id.height / photo.directus_files_id.width) *
  //         breakpoint
  //     );
  //     return {
  //       src: `${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${photo.directus_files_id.filename_disk}`,
  //       width: breakpoints,
  //       height,
  //     };
  //   }),
  // }));
  const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
  const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  const myphotos = photos.map((photo) => ({
    // src: `${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${photo.directus_files_id.filename_disk}`,
    // width: photo.directus_files_id.width,
    // height: photo.directus_files_id.height,
    // description: photo.directus_files_id.description,
    src: `${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${photo.item.image.filename_disk}`,
    width: photo.item.image.width,
    height: photo.item.image.height,
    description:
      params.locale === "tw" ? photo.item.caption_tw : photo.item.caption_en,

    /* with zoom plugin in Lightbox */
    srcSet: [...imageSizes, ...deviceSizes]
      .filter((size) => size <= photo.item.image.width)
      .map((size) => ({
        src: `${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${photo.item.image.filename_disk}`,
        width: size,
        height: Math.round(
          (photo.item.image.height / photo.item.image.width) * size
        ),
      })),
  }));

  const [index, setIndex] = useState(-1);
  const [renderPrev, setRenderPrev] = useState(true);
  const [renderNext, setRenderNext] = useState(true);
  const [finite, setFinite] = useState(true);

  return (
    <>
      <PhotoAlbum
        photos={myphotos}
        layout="columns"
        columns={1}
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
        plugins={[Zoom, Captions]}
        render={{
          slide: LightBoxNextJsImage,
          buttonPrev: renderPrev ? undefined : () => null,
          buttonNext: renderNext ? undefined : () => null,
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0)" },
        }}
        carousel={{ finite }}
      />
    </>
  );
}

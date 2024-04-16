// import PropTypes from "prop-types";
import { GalleryItem } from "./ImageGalleryItem.stytled";

export const ImageGalleryItem = (info) => {
    console.log(info);
    return (
        <GalleryItem>
            <img src={info} alt={info} />
        </GalleryItem>
    );
};

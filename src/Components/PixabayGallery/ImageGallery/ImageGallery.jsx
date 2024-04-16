import { Component } from "react";
// import PropTypes from "prop-types";
import { ImageGalleryContainer } from "./ImageGallery.stytled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    render() {
        return (
            <ImageGalleryContainer>
                <ImageGalleryItem></ImageGalleryItem>
            </ImageGalleryContainer>
        );
    }
}

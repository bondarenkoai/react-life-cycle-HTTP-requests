import { Component } from "react";
import { PixabayGalleryContainer } from "./PixabayGallery.styled";
import { Searchbar } from "./Searchbar/Searchbar";
// import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { Loader } from "./Loader/Loader";
// import { Modal } from "./Modal/Modal";

export class PixabayGallery extends Component {
    handleSubmit = () => {
        console.log("Hahahaha...");
    };

    render() {
        return (
            <PixabayGalleryContainer>
                <Searchbar onSubmit={this.handleSubmit} />
                {/* <ImageGallery /> */}
                {/* <Loader /> */}
                {/* <Modal /> */}
            </PixabayGalleryContainer>
        );
    }
}

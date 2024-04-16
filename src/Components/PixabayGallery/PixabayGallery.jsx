import { Component } from 'react';
import { PixabayGalleryContainer } from './PixabayGallery.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from "./Loader/Loader";
// import { Modal } from "./Modal/Modal";

export class PixabayGallery extends Component {
    state = {
        search: '',
        images: [],
    };

    handleSubmit = search => {
        console.log({ search });
    };

    render() {
        return (
            <PixabayGalleryContainer>
                <Searchbar setSearch={this.handleSubmit} />
                <ImageGallery info="immmamamage" />
                {/* <Loader /> */}
                {/* <Modal /> */}
            </PixabayGalleryContainer>
        );
    }
}

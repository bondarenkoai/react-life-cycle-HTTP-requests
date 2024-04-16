import { Component } from 'react';
import { PixabayGalleryContainer } from './PixabayGallery.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from "./Loader/Loader";
// import { Modal } from "./Modal/Modal";
import * as API from '../../services/api';

export class PixabayGallery extends Component {
    state = {
        search: '',
        images: [],
        src: '',
    };

    searchImages = async searchValues => {
        console.log({ searchValues });

        const images = await API.getImages(searchValues);

        console.log(images.hits[3].largeImageURL);

        this.setState({
            src: images.hits[3].largeImageURL,
        });
    };

    render() {
        return (
            <PixabayGalleryContainer>
                <Searchbar setSearch={this.searchImages} />
                <ImageGallery src={this.state.src} />
                {/* <Loader /> */}
                {/* <Modal /> */}
            </PixabayGalleryContainer>
        );
    }
}

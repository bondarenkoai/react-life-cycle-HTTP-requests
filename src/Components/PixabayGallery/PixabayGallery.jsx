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
        src: 'https://pixabay.com/get/ge8a487fef771138dcb5d63ace2eec860b7c0a2be530c298d47af040e206f0e07faa964b793108ca43ea5f36bb7173971_1280.jpg',
    };

    searchImages = async searchValues => {
        console.log({ searchValues });

        const newImages = await API.getImages(searchValues);

        console.log(newImages.hits[3].largeImageURL);
        console.log(newImages.hits);
        console.log();

        this.setState(prevState => ({
            images: [...prevState.images, ...newImages.hits],
        }));

        
    };

    render() {
        console.log(this.state.images);
        return (
            <PixabayGalleryContainer>
                <Searchbar setSearch={this.searchImages} />
                <ImageGallery options={this.state.images} />
                {/* <Loader /> */}
                {/* <Modal /> */}
            </PixabayGalleryContainer>
        );
    }
}

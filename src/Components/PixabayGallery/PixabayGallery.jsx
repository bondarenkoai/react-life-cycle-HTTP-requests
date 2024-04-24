import { Component } from 'react';
import { PixabayGalleryContainer } from './PixabayGallery.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Loader } from "./Loader/Loader";
// import { Modal } from "./Modal/Modal";
import * as API from '../../services/api';

export class PixabayGallery extends Component {
    state = {
        search: '',
        images: [],
        src: 'https://pixabay.com/get/ge8a487fef771138dcb5d63ace2eec860b7c0a2be530c298d47af040e206f0e07faa964b793108ca43ea5f36bb7173971_1280.jpg',
        page: 1,
    };

    searchImages = async searchValues => {
        console.log({ searchValues });

        if (searchValues !== this.state.search) {
            this.setState({ page: 1 });
        }

        const newImages = await API.getImages(searchValues, this.state.page);

        console.log(newImages.hits);
        console.log(this.state.search);
        console.log(this.state.page);

        this.setState(
            prevState => ({
                images: [...prevState.images, ...newImages.hits],
                page: prevState.page + 1,
            }),
            () => {
                console.log(this.state.page);
            }
        );
    };

    loadMoreImages = async () => {
        await this.searchImages(this.state.search);
    };

    render() {
        console.log(this.state.images);
        return (
            <PixabayGalleryContainer>
                <Searchbar setSearch={this.searchImages} />
                <ImageGallery options={this.state.images} loadMore={this.searchImages} />
                {/* <Loader /> */}
                {/* <Modal /> */}
                <Button type="button" value="Load more" onClick={this.loadMoreImages} />
            </PixabayGalleryContainer>
        );
    }
}

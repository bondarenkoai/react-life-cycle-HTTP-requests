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
        page: 1,
    };

    searchImages = async (searchValues, resetImages = true) => {
        console.log({ searchValues });

        if (resetImages) {
            this.setState({ images: [], page: 1 });
        }

        const newImages = await API.getImages(searchValues, this.state.page);

        console.log('total:', newImages.total);
        console.log(this.state.search);
        console.log(this.state.page);

        this.setState(
            prevState => ({
                search: searchValues,
                images: [...prevState.images, ...newImages.hits],
            }),
            () => {
                console.log(this.state.page);
            }
        );
    };

    loadMoreImages = () => {
        this.setState(
            prevState => ({
                page: prevState.page + 1,
            }),
            () => {
                this.searchImages(this.state.search, false);
            }
        );
    };

    render() {
        console.log(this.state.images);
        return (
            <PixabayGalleryContainer>
                <Searchbar setSearch={this.searchImages} />
                <ImageGallery options={this.state.images} loadMore={this.loadMoreImages} />
                {/* <Loader /> */}
                {/* <Modal /> */}
            </PixabayGalleryContainer>
        );
    }
}

import { Component } from 'react';
import { PixabayGalleryContainer } from './PixabayGallery.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

// import { Loader } from "./Loader/Loader";
// import { Modal } from "./Modal/Modal";
import * as API from '../../services/api';

export class PixabayGallery extends Component {
    state = {
        search: '',
        images: [],
        page: 1,
        loading: false,
        error: '',
    };

    searchImages = async (searchValues, resetImages = true) => {
        if (resetImages) {
            this.setState({ images: [], page: 1 });
        }

        this.setState({ loading: true });

        const newImages = await API.getImages(searchValues, this.state.page);

        console.log(newImages);

        if (newImages.total !== 0) {
            this.setState(prevState => ({
                search: searchValues,
                images: [...prevState.images, ...newImages.hits],
            }));
        } else {
            this.setState({ error: true });
        }

        this.setState({ loading: false });
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
        const { images, loading, error } = this.state;

        return (
            <PixabayGalleryContainer>
                <Searchbar setSearch={this.searchImages} />
                {images && <ImageGallery options={images} />}
                {loading && <Loader />}
                {!loading && images.length > 0 && (
                    <Button type="button" text="Load more" onClick={this.loadMoreImages} />
                )}
                {error && (
                    <div>
                        {error} <div>Sorry not img...</div>
                    </div>
                )}
                {/* <Modal /> */}
            </PixabayGalleryContainer>
        );
    }
}

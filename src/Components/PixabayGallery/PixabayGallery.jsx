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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
            this.searchImages(this.state.search);
        }
    }

    handleSubmit = searchValues => {
        this.setState({
            search: searchValues,
            images: [],
            currentPage: 1,
        });
    };

    searchImages = async searchValues => {
        try {
            await this.setState({ loading: true, error: '' });

            const newImages = await API.getImages(searchValues, this.state.page);

            console.log(newImages);

            if (newImages.total !== 0) {
                await this.setState(prevState => ({
                    search: searchValues,
                    images: [...prevState.images, ...newImages.hits],
                }));
            } else {
                await this.setState({ error: 'Sorry, no images found.' });
            }
        } catch (error) {
            await this.setState({ error: 'Something went wrong!' });
        } finally {
            await this.setState({ loading: false });
        }
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
                <Searchbar setSearch={this.handleSubmit} />
                {images && <ImageGallery options={images} />}
                {loading && <Loader />}
                {!loading && images.length > 0 && (
                    <Button type="button" text="Load more" onClick={this.loadMoreImages} />
                )}
                {error && <div>{error}</div>}
                {/* <Modal /> */}
            </PixabayGalleryContainer>
        );
    }
}

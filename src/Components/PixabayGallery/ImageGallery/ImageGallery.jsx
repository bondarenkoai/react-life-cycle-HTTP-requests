import PropTypes from 'prop-types';
import { List } from './ImageGallery.stytled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ src }) => {
    return (
        <List>
            <ImageGalleryItem src={src} />
        </List>
    );
};

ImageGallery.propTypes = {
    src: PropTypes.string.isRequired,
};

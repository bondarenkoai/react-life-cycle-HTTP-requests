import PropTypes from 'prop-types';
import { List } from './ImageGallery.stytled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ options }) => {
    return (
        <List>
            {options.map(({ id, webformatURL }) => (
                <ImageGalleryItem key={id} src={webformatURL} />
            ))}
        </List>
    );
};

ImageGallery.propTypes = {
    options: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
};

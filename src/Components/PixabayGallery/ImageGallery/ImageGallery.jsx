import PropTypes from 'prop-types';
import { List } from './ImageGallery.stytled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ options }) => {
    const uniqueOptions = [];
    const duplicatedOptions = [];

    options.forEach((item, index) => {
        if (options.findIndex(obj => obj.id === item.id) === index) {
            uniqueOptions.push(item);
        } else {
            duplicatedOptions.push(item);
        }
    });

    return (
        <>
            <List>
                {uniqueOptions.map(({ id, webformatURL }) => (
                    <ImageGalleryItem key={id} src={webformatURL} />
                ))}
            </List>
        </>
    );
};

ImageGallery.propTypes = {
    options: PropTypes.array.isRequired,
};

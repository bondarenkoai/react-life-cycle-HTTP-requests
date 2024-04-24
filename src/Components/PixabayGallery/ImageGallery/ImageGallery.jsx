import PropTypes from 'prop-types';
import { List } from './ImageGallery.stytled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export const ImageGallery = ({ options, loadMore }) => {
    const uniqueOptions = [];
    const duplicatedOptions = [];

    options.forEach((item, index) => {
        if (options.findIndex(obj => obj.id === item.id) === index) {
            uniqueOptions.push(item);
        } else {
            duplicatedOptions.push(item);
        }
    });

    console.log('Duplicated options:', duplicatedOptions);

    return (
        <List>
            {uniqueOptions.map(({ id, webformatURL }) => (
                <ImageGalleryItem key={id} src={webformatURL} />
            ))}
            <Button type="button" text="Load more" onClick={loadMore} />
        </List>
    );
};

ImageGallery.propTypes = {
    options: PropTypes.array.isRequired,
    loadMore: PropTypes.func.isRequired,
};

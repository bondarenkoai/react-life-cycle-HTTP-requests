import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.stytled';

export const ImageGalleryItem = ({ src }) => {
    console.log(src);
    return (
        <Item>
            <Img src={src} alt={src} width="400" />
        </Item>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
};

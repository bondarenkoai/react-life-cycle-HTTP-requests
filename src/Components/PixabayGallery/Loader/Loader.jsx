import { LoadWrapper } from './Loader.stytled';
import circle from './circle.svg';

export const Loader = () => {
    return (
        <LoadWrapper>
            <img src={circle} alt="Circle SVG" />
        </LoadWrapper>
    );
};

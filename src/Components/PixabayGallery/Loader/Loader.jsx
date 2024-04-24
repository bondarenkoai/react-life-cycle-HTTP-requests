import { SvgContainer } from './Loader.stytled';
import circle from './circle.svg';

export const Loader = () => {
    return (
        <SvgContainer>
            <img src={circle} alt="Circle SVG" />
        </SvgContainer>
    );
};

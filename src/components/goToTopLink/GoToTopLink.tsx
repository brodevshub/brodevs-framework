import './goToTopLink.css';
import { handleClick } from './script/goToTopLink.js';

interface GoToTopLinkProps {
    src: string;
    alt: string;
    width: string;
}

const GoToTopLink: React.FC<GoToTopLinkProps> = ({ src, alt, width = '250px' }) => {
    return (
        <img
            onClick={handleClick}
            className="go-to-top-link"
            src={src}
            alt={alt}
            style={{ width }}
        />
    );
}

export default GoToTopLink;

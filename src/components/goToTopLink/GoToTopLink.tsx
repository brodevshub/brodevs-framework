import BrodevsImage from '../brodevsImage/BrodevsImage';
import './goToTopLink.css';

interface GoToTopLinkProps {
    src: string;
    alt: string;
}

const GoToTopLink: React.FC<GoToTopLinkProps> = ({ src, alt }) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <BrodevsImage
            alt={alt}
            className="go-to-top-link"
            disabled
            onClick={handleClick}
            src={src}
        />
    );
}

export default GoToTopLink;

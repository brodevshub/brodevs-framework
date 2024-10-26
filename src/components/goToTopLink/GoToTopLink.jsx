import { handleClick } from "./goToTopLink";
import './goToTopLink.css';

export default function GoToTopLink({ src, alt, width }) {
    return (
        <img onClick={handleClick} id="go_to_top_link" src={src} alt={alt} style={{ width: width }} />
    );
}

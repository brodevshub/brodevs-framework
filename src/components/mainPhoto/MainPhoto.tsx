import './mainPhoto.css';

const MainPhoto: React.FC = () => {
    return (
        <main className="main-photo">
            <img className="main-photo__img" src="/banner_spinner_dark_trans.gif" alt="" />
            <h1 className="main-photo__title">Framework for developers</h1>
        </main>
    );
}

export default MainPhoto;
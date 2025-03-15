import GoToTopLink from '@components/goToTopLink/GoToTopLink'
import MainPhoto from '@components/mainPhoto/MainPhoto'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <MainPhoto />

            <section className='home__section'>
                <h2 className='home__title'>Go to top link</h2>
                <GoToTopLink src='/banner_dark.png' alt='Logo Go to Top Link' width={'250px'} />
            </section>
        </div>
    )
}

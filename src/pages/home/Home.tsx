import BrodevsImage from '@components/brodevsImage/BrodevsImage.tsx'
import GoToTopLink from '@components/goToTopLink/GoToTopLink.tsx'
import MainPhoto from '@components/mainPhoto/MainPhoto.tsx'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <MainPhoto />
            {/* <BrodevsForm /> */}

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;BrodevsImage/&gt;
                        </code>
                    </pre>
                </h2>

                <div className='brodevs-image-container'>
                    <BrodevsImage
                        className='brodevs-image-1'
                        src='/yinYang-led.png'
                    />
                    <BrodevsImage
                        className='brodevs-image-2'
                        src='/yinYang-led.png'
                        isEditable
                    />
                    <BrodevsImage
                        className='brodevs-image-3'
                        src='/yinYang-led.png'
                        isEditable
                    />
                </div>
            </section>

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;GoToTopLink/&gt;
                        </code>
                    </pre>
                </h2>

                <GoToTopLink src='/banner_dark.png' alt='Logo Go to Top Link' width={'250px'} />
            </section>
        </div>
    )
}
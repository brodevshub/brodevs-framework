import BrodevsCounter from '@components/brodevsCounter/BrodevsCounter.tsx'
import BrodevsImage from '@components/brodevsImage/BrodevsImage.tsx'
import BrodevsInput from "@components/brodevsInput/BrodevsInput.tsx"
import GoToTopLink from '@components/goToTopLink/GoToTopLink.tsx'
import MainPhoto from '@components/mainPhoto/MainPhoto.tsx'
import BrodevsForm from '../../components/brodevsForm/BrodevsForm'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <MainPhoto />

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;BrodevsInput/&gt;
                        </code>
                    </pre>
                </h2>

                <BrodevsInput
                    className='home__brodevs-input'
                    handleChange={() => { }}
                    icon='profile'
                    id='home-name-input'
                    label='Field'
                    type='number'
                    name='home-name-input'
                    value=''
                    autoFocus={true}
                />

                <BrodevsInput
                    className='home__brodevs-input'
                    handleChange={() => { }}
                    id='home-password-input'
                    label='Password'
                    type='password'
                    name='home-password-input'
                    value='1234'
                />
            </section>

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;BrodevsForm/&gt;
                        </code>
                    </pre>
                </h2>

                <BrodevsForm />
            </section>

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;BrodevsCounter/&gt;
                        </code>
                    </pre>
                </h2>

                <span className='home-counter'>+ <BrodevsCounter number={1000} duration={1000} /> views</span>
            </section>

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;BrodevsImage/&gt;
                        </code>
                    </pre>
                </h2>

                <div className='brodevs-images-container'>
                    <BrodevsImage
                        className='brodevs-image-1'
                        src='/yinYang-led.png'
                        disabled
                    />
                    <BrodevsImage
                        className='brodevs-image-2'
                        src='/yinYang-led.png'
                    />
                    <BrodevsImage
                        className='brodevs-image-3'
                        src='/yinYang-led.png'
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
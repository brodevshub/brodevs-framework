import BrodevsCounter from '@components/brodevsCounter/BrodevsCounter.tsx'
import BrodevsImage from '@components/brodevsImage/BrodevsImage.tsx'
import BrodevsInput from "@components/brodevsInput/BrodevsInput.tsx"
import GoToTopLink from '@components/goToTopLink/GoToTopLink.tsx'
import MainPhoto from '@components/mainPhoto/MainPhoto.tsx'
import BrodevsCheckbox from '../../components/brodevsCheckbox/BrodevsCheckbox'
import BrodevsForm from '../../components/brodevsForm/BrodevsForm'
import BrodevsRadioGroup from '../../components/brodevsRadioGroup/BrodevsRadioGroup'
import BrodevsSelect from '../../components/brodevsSelect/BrodevsSelect'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <MainPhoto />

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
                        id='brodevs-image-2'
                        className='brodevs-image-2'
                        src='/yinYang-led.png'
                        handleChange={() => { }}
                    />
                    <BrodevsImage
                        id='brodevs-image-3'
                        className='brodevs-image-3'
                        src='/yinYang-led.png'
                    />
                </div>
            </section>

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
                />

                <BrodevsInput
                    className='home__brodevs-input'
                    handleChange={() => { }}
                    id='home-password-input'
                    label='Password'
                    type='password'
                    name='home-password-input'
                    value='123456'
                />
            </section>

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;BrodevsSelect/&gt;
                        </code>
                    </pre>
                </h2>

                <BrodevsSelect
                    className='home-select'
                    disabled={false}
                    handleChange={() => { }}
                    id='home-select'
                    label="Frutas"
                    name="fruits"
                    options={[
                        { label: 'Naranja', value: '1' },
                        { label: 'Platano', value: '2' },
                        { label: 'Lima', value: '3' },
                        { label: 'Pera', value: '4' },
                    ]}
                    placeholder='Selecciona una fruta'
                    specialOptions={[
                        { label: '-- Crear Fruta --', onClick: () => { }, position: 'first' },
                    ]}
                />
            </section>

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;BrodevsRadioGroup/&gt;
                        </code>
                    </pre>
                </h2>

                <BrodevsRadioGroup
                    className='home-radio-group'
                    handleChange={() => { }}
                    id='home-radio-group'
                    label="Género:"
                    name="gender"
                    options={[
                        { value: 'H', label: 'Hombre' },
                        { value: 'M', label: 'Mujer' },
                        { value: 'O', label: 'Otro' },
                    ]}
                />
            </section>

            <section className='home__section'>
                <h2 className='home__title'>
                    <pre>
                        <code>
                            &lt;BrodevsCheckbox/&gt;
                        </code>
                    </pre>
                </h2>

                <BrodevsCheckbox
                    checked={false}
                    className='home-checkbox'
                    handleChange={() => { }}
                    id='home-checkbox'
                    label={
                        <>
                            Acepta los{" "}
                            <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
                                términos
                            </a>{" "}
                            y{" "}
                            <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">
                                condiciones de uso
                            </a>.
                        </>
                    }
                    name="privacyPolicy"
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
                            &lt;GoToTopLink/&gt;
                        </code>
                    </pre>
                </h2>

                <GoToTopLink src='/banner_dark.png' alt='Logo Go to Top Link' width={'250px'} />
            </section>
        </div>
    )
}
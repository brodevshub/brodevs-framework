import Form from '@components/form/Form.jsx'
import GoToTopLink from '@components/goToTopLink/GoToTopLink.jsx'
import './index.css'
import Home from './pages/Home.jsx'

function App() {
    return (
        <>
            <Home />
            <Form title='Form title' />
            <section>
                <h2>Go to top link</h2>
                <GoToTopLink src='/banner_dark.png' alt='Logo Go to Top Link' width={'300px'} />
            </section>
        </>
    )
}

export default App

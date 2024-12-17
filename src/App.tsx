import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Routes from './pages/routes'

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </RecoilRoot>
    )
}

export default App

import { Header } from './components/Header/Header'
import { Main } from './pages/Main/Main'
import { NewsBaner } from './components/NewsBaner/NewsBaner'

function App() {

  return (
    <>
      <Header />
      <div className="contener">
        <Main />
      </div>
      < NewsBaner />
    </>
  )
}

export default App

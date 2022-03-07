import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './components/pages/Home'
import NewToken from './components/pages/NewToken'
import EditToken from './components/pages/EditToken'

import Container from './components/layout/Container'



function App() {
  return (
    <Router>
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newtoken" element={<NewToken />} />
          <Route path="/edittoken/:id" element={<EditToken />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App

import { Route, RouterProvider, Routes } from 'react-router-dom'
import './App.scss'
import ErrorPage from './components/pages/ErrorPage'
import Home from './components/pages/Home'
import renderRouter from './routers/renderRouter'

import router from './routers/router'

function App() {
  // console.log(renderRouter(router))
  return (
    <Routes>
      {/* <Route path='/' element={<Home />}>
        <Route path='er' element={<ErrorPage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Route> */}

      {renderRouter(router)}
    </Routes>
  )
}

export default App

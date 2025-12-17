import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Item from './Pages/ItemDetails/ItemDetails.jsx'
import Items from './Pages/Items/Items.jsx'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Layout from './Layout/Layout.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="items">
              <Route index element={<Items />} />
              <Route path=":id" element={<Item />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

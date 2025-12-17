import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Item from './Pages/ItemDetails/ItemDetails.jsx'
import Items from './Pages/Items/Items.jsx'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Layout from './Layout/Layout.jsx';
import ItemDetails from './Pages/ItemDetails/ItemDetails.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="items">
              <Route index element={<Items />} />
              <Route path=":id" element={<ItemDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

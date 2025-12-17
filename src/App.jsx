import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Item from './Components/Item/Item.jsx'
import Items from './Components/Items/Items.jsx'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Layout from './Components/Layout/Layout.jsx';

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

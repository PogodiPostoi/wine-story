import React from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import PagePath from './components/PagePath'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import Wine from './pages/Wine';


export const AppContext = React.createContext({})

function App() {

  const [catalogItems, setCatalogItems] = React.useState([])

  React.useEffect(() => {

    // TODO: Добавить skeleton-загрузку для карточек

    async function fetchData() {
      try {
        const catalogResponse = await axios.get("https://62d845be9c8b5185c7867ddc.mockapi.io/catalog")
        setCatalogItems(catalogResponse.data)
      } catch (error) {
        alert("Ошибка при запросе данных :'(")
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
      <AppContext.Provider
        value={
          {
            catalogItems
          }
        }>

        <div className="wrapper">
          
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={
                <>
                  <PagePath 
                    one={"Home"}
                    two={"Catalog"}
                  />
                  <Catalog 
                    pageName={"catalog"}
                  />
                </>
              }
            />
            
            <Route 
              exact path="/wine"
              element={
                <>
                  <PagePath
                    one={"Home"}
                    two={"Catalog"}
                    three={"Wine"}
                  />
                  <Wine 
                    pageName={"wine"}
                  />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </AppContext.Provider>
  );
}

export default App;

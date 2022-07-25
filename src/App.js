import React from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header'
import PagePath from './components/PagePath'
import Catalog from './pages/Catalog'

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
          <PagePath />
          <Catalog />
        </div>
      </AppContext.Provider>
  );
}

export default App;

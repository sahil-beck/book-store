import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook'; 
import ShowTypeContext from './context/ShowTypeContext';

const App = () => {
  const [showType, setShowType] = useState('table');
  return (
    <ShowTypeContext.Provider value={{showType, setShowType}}>
      <div className='flex flex-col text-white'>
        <div className='px-2 pt-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books/create' element={<CreateBook />} />
            <Route path='/books/edit/:id' element={<EditBook />} />
            <Route path='/books/delete/:id' element={<DeleteBook />} />
            <Route path='/books/details/:id' element={<ShowBook />} />
          </Routes>
          </div>
        </div>
    </ShowTypeContext.Provider>
  )
}

export default App;
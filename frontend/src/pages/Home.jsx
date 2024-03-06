import React, { useState, useEffect, useContext } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import ShowTypeContext from '../context/ShowTypeContext';

const Home = () => {
  const [books, setBooks] = useState([]);  
  const [loading, setLoading] = useState(false);  
  const { showType, setShowType } = useContext(ShowTypeContext);
  useEffect(() => {
    setLoading(true);
    axios
        .get('http://localhost:5555/books')
        .then((response) => {
            setLoading(false);
            setBooks(response.data.data);
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
        })
  }, [])
  return (
    <>  
        <div className='flex justify-center items-center gap-x-5'>
            <button className={`h-10 w-[70px] ${showType === `table` ? `bg-sky-900` : `bg-sky-500`} hover:bg-sky-700 rounded-xl`} onClick={() => setShowType('table')}>Table</button>
            <button className={`h-10 w-[70px] ${showType === `card` ? `bg-sky-900` : `bg-sky-500`} hover:bg-sky-700 rounded-xl`} onClick={() => setShowType('card')}>Card</button>
        </div>
        <div className='flex justify-between items-center my-4'>
            <h1 className='text-3xl font-medium ml-2'>Book List</h1>
            <div className='hover:brightness-150 hover:bg-stone-950/20 px-1 rounded-md'>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
        </div>
        {loading ? (
            <Spinner />
        ) : (
            showType === 'table' ? (
                <BooksTable books={books} />
            ) : (
                <BooksCard books={books} />
            )
        )}
    </>
  )
}

export default Home;
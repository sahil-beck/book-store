import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleBookDelete = () => {
    setLoading(true);
    axios 
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully.', {variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error happened. Pease check the console.', {variant: 'error'});
        console.log(error);
      })
  }
  return (
    <>
      <div className='flex flex-col my-2 ml-1 basis-1/5'>
        <BackButton />
        <h1 className='text-3xl my-2'>Delete Book</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center rounded-3xl border-2 border-yellow-400 gap-20 px-6 py-6 text-xl'>
            <h3>Are you sure you want to delete this book?</h3>
            <button className='px-3 py-1 rounded-lg bg-red-600' onClick={handleBookDelete}>Yes</button>
          </div>
        </div>
      )}
    </>
  )
}

export default DeleteBook;
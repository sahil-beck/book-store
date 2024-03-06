import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios 
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.data.title);
        setAuthor(response.data.data.author);
        setPublishYear(response.data.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert('An error happened. Please check console.');
      })
  }, [])
  const handleBookEdit = () => {
    setLoading(false); //
    const book = {
      title, author, publishYear
    }
    axios
      .put(`http://localhost:5555/books/${id}`, book)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully.', {variant: 'success'});
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
        <h1 className='text-3xl my-2'>Edit Book</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center w-[500px] border-2 border-yellow-400 rounded-3xl px-3 py-3 gap-2'>
            <div>
              <div className='flex items-end'>
                <label className='text-2xl text-red-500'>Title</label>
              </div>
              <div className='flex h-10 items-center'>
                <input type='text' value={title} onChange={(event) => {setTitle(event.target.value)}} className='w-full px-4 py-2 text-lg outline-none caret-white bg-gray-800 rounded-md' />
              </div>
            </div>
            <div>
              <div className='flex items-end'>
                <label className='text-2xl text-red-500'>Author</label>
              </div>
              <div className='flex h-10 items-center'>
                <input type='text' value={author} onChange={(event) => {setAuthor(event.target.value)}} className='w-full px-4 py-2 text-lg outline-none caret-white bg-gray-800 rounded-md' />
              </div>
            </div>
            <div>
              <div className='flex items-end'>
                <label className='text-2xl text-red-500'>Publish Year</label>
              </div>
              <div className='flex h-10 items-center'>
                <input type='text' value={publishYear} onChange={(event) => {setPublishYear(event.target.value)}} className='w-full px-4 py-2 text-lg outline-none caret-white bg-gray-800 rounded-md' />
              </div>
            </div>
            <div className='flex justify-center items-center pt-2'>
              <button className='px-4 py-2 bg-green-600 hover:bg-green-700 rounded-xl' onClick={handleBookEdit}>
                <div className='flex text-xl justify-center content-center'>
                  Save
                </div>
              </button>
            </div>          
          </div>
        </div>
      )}
    </>
  )
}

export default EditBook;
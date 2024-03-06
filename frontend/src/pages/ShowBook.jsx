import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import axios from 'axios'; 

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true); 
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])
    return (
        <>
            <div className='flex flex-col my-2 ml-1 basis-1/5'>
                <BackButton />
                <h1 className='text-3xl my-2'>Show Book</h1>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex justify-center items-center'>
                    <div className="flex flex-col px-4 py-2 border-2 rounded-3xl border-yellow-400">
                        <div className="my-2">
                            <span className="text-lg mr-3 text-gray-400">Id:</span>
                            <span>{book._id}</span>
                        </div>
                        <div className="my-2">
                            <span className="text-lg mr-3 text-gray-400">Title:</span>
                            <span>{book.title}</span>
                        </div>
                        <div className="my-2">
                            <span className="text-lg mr-3 text-gray-400">Author:</span>
                            <span>{book.author}</span>
                        </div>
                        <div className="my-2">
                            <span className="text-lg mr-3 text-gray-400">Publish Year:</span>
                            <span>{book.publishYear}</span>
                        </div>
                        <div className="my-2">
                            <span className="text-lg mr-3 text-gray-400">Create Time:</span>
                            <span>{new Date(book.createdAt).toString()}</span>
                        </div>
                        <div className="my-2">
                            <span className="text-lg mr-3 text-gray-400">Update Time:</span>
                            <span>{new Date(book.updatedAt).toString()}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ShowBook;
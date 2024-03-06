import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { VscBook } from 'react-icons/vsc';
import { IoPersonCircleOutline } from 'react-icons/io5';

const BookCard = ({book}) => {
  return (
    <div className='flex flex-col justify-between border-2 border-yellow-400 rounded-[20px] gap-y-2 hover:shadow-xl'>
        <div className='flex flex-row justify-between px-3 pt-3'>
            <text className='text-gray-400'>{book._id}</text>
            <div className='border-none rounded-md bg-slate-800 px-2 h-fit w-fit'>{book.publishYear}</div>
        </div>
        <div className='flex flex-row gap-x-2 px-3'>
            <div className='text-2xl text-pink-500'>
                <VscBook />
            </div>
            <div>
                {book.title}
            </div>
        </div>
        <div className='flex flex-row gap-x-2 px-3'>
            <div className='text-2xl text-pink-500'>
                <IoPersonCircleOutline />
            </div>
            <div>
                {book.author}
            </div>
        </div>
        <div className='flex flex-row justify-between pt-3 pb-2 px-1'>
            <div className='hover:brightness-150 hover:bg-stone-950/30 px-2 py-1 rounded-md'>
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
            </div>
            <div className='hover:brightness-150 hover:bg-stone-950/30 px-2 py-1 rounded-md'>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
            </div>
            <div className='hover:brightness-150 hover:bg-stone-950/30 px-2 py-1 rounded-md'>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BookCard;
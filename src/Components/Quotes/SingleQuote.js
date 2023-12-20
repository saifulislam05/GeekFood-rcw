import React from 'react'

const SingleQuote = ({quote,author}) => {
  return (
    <blockquote className="relative mb-6 md:mb-8 rounded-md shadow-md p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 break-inside-avoid">
      <div className="stylistic-quote-mark" aria-hidden="true">
        <img
          className="w-9"
          src="https://img.icons8.com/?size=96&id=e8iL7hP3fpoS&format=png"
          alt="left quote"
        />
      </div>
      <p className="mb-4 indent-9">{quote}</p>
      <cite className="flex items-center">
        <img
          alt="Avatar of nickd"
          className="w-12 mr-4 rounded-full bg-neutral-500"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <div className="flex flex-col items-start">
          <span className="mb-1 text-sm italic font-bold">{author}</span>
        </div>
      </cite>
    </blockquote>
  );
}

export default SingleQuote
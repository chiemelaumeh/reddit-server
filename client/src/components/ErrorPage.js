import React from 'react'
import RedirectContext from '../context/RedirectContext'
import { useContext } from 'react'
import { FaRegSadTear } from "react-icons/fa"
import { Link } from "react-router-dom";

const ErrorPage = () => {

  const { setRedirect, showHeader, setShowHeader } = useContext(RedirectContext);
  return (
    <div className="error-page">

      <h1 className='error-text'>Error, Post not found</h1>
      <FaRegSadTear className='error-icon' />
      <Link
          to="/"
          onClick={() => {
            setRedirect("/");
            setShowHeader(false)

          }}
        >
        
      <button className='error-back'>Go back</button>
        </Link>
    </div>
  )
}

export default ErrorPage
import React from 'react'
import s from './index.module.css'
import err from './404.png'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className={['wrapper', s.conteiner].join(' ')}>
      <div>
        <div>
          <img src={err} alt="img" />
        </div>
        <div>
          <div>
            <h2>Page Not Found</h2>
            <p>We’re sorry, the page you requested could not be found.</p>
            <p>Please go back to the homepage.</p>
          </div>
          <Link to={'/'}>
            <div>Go Home</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

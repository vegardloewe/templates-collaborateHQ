import React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div className="darkSection">
    <div
      className="container skinnier space-20t taCenter"
      style={{ marginBottom: '200px' }}
    >
      <h2 style={{ color: '#fff', marginTop: '200px' }}>
        404 - Page Not Found
      </h2>
      <p style={{ textAlign: 'center', color: '#fff', lineHeight: '1.5' }}>
        We can't find the page you are looking for!
        <br />
        Head back to <Link to="/">Home</Link>
      </p>
    </div>
  </div>
)

export default NotFoundPage

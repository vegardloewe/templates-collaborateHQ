import React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <section className="darkSection">
    <div
      className="container skinnier space-20t taCenter"
      style={{ marginTop: '200px', marginBottom: '200px' }}
    >
      <h2 style={{ color: '#fff' }}>404 - Page Not Found</h2>
      <p>
        We can't find the page you are looking for!
        <br />
        Head back to <Link to="/">Home</Link>
      </p>
    </div>
  </section>
)

export default NotFoundPage

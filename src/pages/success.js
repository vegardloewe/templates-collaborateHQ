import React from 'react'
import '../styling/style.css'
import { Link } from 'gatsby'

const Success = () => (
  <div className="darkSection">
    <div
      className="container skinnier space-20t taCenter"
      style={{ marginBottom: '200px' }}
    >
      <h2 style={{ color: '#fff', marginTop: '200px' }}>Thank you!</h2>
      <p style={{ textAlign: 'center', color: '#fff', lineHeight: '1.5' }}>
        The form is successfully submitted.
        <br />
        Head back to <Link to="/">Home</Link>
      </p>
    </div>
  </div>
)

export default Success

import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'
import AlertTriangle from 'react-feather/dist/icons/alert-triangle'

import Layout from '../components/Layout'

export default ({ children }) => (
  <StaticQuery
    // query={graphql`
    //   query NotFoundPageQuery {
    //     globalSettings: settingsYaml {
    //       siteTitle
    //     }
    //   }
    // `}
    render={data => (
      <Layout>
        <section className="darkSection section row">
          <div
            className="container skinnier space-20t taCenter"
            style={{ marginTop: '200px', marginBottom: '200px' }}
          >
            <h2 style={{ color: '#fff' }}>404 - Page Not Found</h2>
            <p>
              We can't find the page you are looking for!
              <br />
              Head back to{' '}
              <Link to="/">{_get(data, 'globalSettings.siteTitle')}</Link>
            </p>
          </div>
        </section>
      </Layout>
    )}
  />
)

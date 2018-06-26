import React, { Component } from 'react'

import Layout from './components/Layout/Layout'
import BurgurBuilder from './containers/BurgurBuilder/BurgurBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgurBuilder />
        </Layout>
      </div>
    )
  }
}

export default App

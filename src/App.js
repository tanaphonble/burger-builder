import React, { Component } from 'react'

import Layout from './hoc/Layout/Layout'
import BurgurBuilder from './containers/BurgurBuilder/BurgurBuilder'
import Checkout from './containers/Checkout/Checkout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgurBuilder />
          <Checkout />
        </Layout>
      </div>
    )
  }
}

export default App

import EmbarkJS from 'Embark/EmbarkJS'
import { render } from 'react-dom'
import React from 'react'
import { App } from './components/App'
// import your contracts
// e.g if you have a contract named SimpleStorage:
// import SimpleStorage from 'Embark/contracts/SimpleStorage';

EmbarkJS.onReady((err) => {
  // You can execute contract calls after the connection
})

render(<App />, document.getElementById('root'))

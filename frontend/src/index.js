import React from 'react'
import ReactDOM from 'react-dom'
import App from './Pages/App'
import registerServiceWorker from './Utils/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

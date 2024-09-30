import React from 'react'
import ReactDOM from 'react-dom/client'

const h1 = React.createElement('div',{},React.createElement('h1',{},"Hi"),React.createElement('h2',{},"Nitya"))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(h1) 


import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { data } from './db/db.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter >
    <App data={data}/>
 </BrowserRouter>
 
)

import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import bookLogo from './assets/books.png'
import Account from './components/Account'
import Books from './components/Books'
import Login from './components/Login'
import Navigation from './components/Navigation'
import Register from './components/Register'
import SingleBook from './components/SingleBook'


function App() {
  const [token, setToken] = useState(null)

  useEffect [() => {
    async function fetchBooks (){
      let response = await fetch ('') // api goes here i think 
      let json = await response.json ()
      setBooks (json.data)
    }
    fetchBooks()
  }, []] 
  
  return (
    <>
    
    <Routes>
      <Route path = '/' element = {<Account/>}/>
      <Route path = '/Books' element = {<Books/>}/>
      <Route path = '/Login' element = {<Login/>}/>
      <Route path = '/Navigation' element = {<Navigation/>}/>
      <Route path = '/Register' element = {<Register/>}/>
      <Route path = '/SingleBook' element = {<SingleBook/>}/>
    </Routes> 

  
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>
    </>
  )
}

export default App

import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClothingItemsUpload from './components/ClothingItemsUpload'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>

      <Navbar />
      <Hero />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />

  },
  {
    path: "/clothing-items",
    element: <ClothingItemsUpload />
  }
  ,
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )


}

export default App

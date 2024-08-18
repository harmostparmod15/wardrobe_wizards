import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClothingItemsUpload from './components/ClothingItemsUpload'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { VirtualWardrobe } from './components/VirtualWardrobe'

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
  {
    path: "/virtual-wardrobe",
    element: <VirtualWardrobe />
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )


}

export default App

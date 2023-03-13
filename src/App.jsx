import {lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'

import { UserLayout} from './components/layouts'
import { Loader } from './components/loader/Loader'
import { lazyImport, importDelay } from './utils/lazyImportFuntion'

const Home = lazy(() => importDelay(import("./pages/home").then((module) => ({default: module.Home}))))
const AboutUs = lazy(() => importDelay(import("./pages/about_us").then((module) => ({default: module.AboutUs}))))
const Products = lazy(() => importDelay(import("./pages/products").then((module) => ({default: module.Products}))))
const Lidership = lazy(() => importDelay(import("./pages/lidership").then((module) => ({default: module.Lidership}))))
const Partners = lazy(() => importDelay(import("./pages/partnres").then((module) => ({default: module.Partners}))))

export const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden flex flex-col '>
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loader />}><UserLayout /></Suspense>}>
          <Route index element={<Home />}/>
          <Route path='about-us' element={<AboutUs />}/>
          <Route path='products' element={<Products />}/>
          <Route path='lidership'  element={<Lidership />}/>
          <Route path='partners'  element={<Partners />}/>
        </Route>
      </Routes>
    </div>
  )
}

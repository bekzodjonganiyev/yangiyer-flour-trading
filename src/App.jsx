import {lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'

import { UserLayout} from './components/layouts'
import { Loader } from './components/loader/Loader'
import SkeletonPost from './components/skeleton_loader/SkeletonPost'
import { lazyImport, importDelay } from './utils/lazyImportFuntion'

const Home = lazy(() => importDelay(import("./pages/home").then((module) => ({default: module.Home}))))
const AboutUs = lazy(() => importDelay(import("./pages/about_us").then((module) => ({default: module.AboutUs}))))
const ProductsPage = lazy(() => importDelay(import("./pages/products").then((module) => ({default: module.ProductsPage}))))
const Lidership = lazy(() => importDelay(import("./pages/lidership").then((module) => ({default: module.Lidership}))))
const Partners = lazy(() => importDelay(import("./pages/partnres").then((module) => ({default: module.Partners}))))
const ContactUs = lazy(() => importDelay(import("./pages/contact_us").then((module) => ({default: module.ContactUs}))))

export const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden flex flex-col '>
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loader />}><UserLayout /></Suspense>}>
          <Route index element={<Home />}/>
          <Route path={`:lang/about-us`} element={<AboutUs  />}/>
          <Route path={`:lang/products`} element={<ProductsPage />}/>
          <Route path={`:lang/lidership`} element={<Lidership />}/>
          <Route path={`:lang/partners`}  element={<Partners />}/>
          <Route path={`:lang/contact-us`} element={<ContactUs />}/>
        </Route>
      </Routes>
    </div>
  )
}

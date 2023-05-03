import {lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'

import { UserLayout} from './components/layouts'
import { Loader } from './components/loader/Loader'
import { importDelay } from './utils/lazyImportFuntion'

const Home = lazy(() => importDelay(import("./pages/home").then((module) => ({default: module.Home}))))
const AboutUs = lazy(() => importDelay(import("./pages/about_us").then((module) => ({default: module.AboutUs}))))
const ProductsPage = lazy(() => importDelay(import("./pages/products").then((module) => ({default: module.ProductsPage}))))

const Partners = lazy(() => importDelay(import("./pages/partnres").then((module) => ({default: module.Partners}))))
const ContactUs = lazy(() => importDelay(import("./pages/contact_us").then((module) => ({default: module.ContactUs}))))

const Photos = lazy(() => import("./pages/admin/photos/Photos"))
const ProtectedRoute = lazy(() => import("./components/admin/protected_route/ProtectedRoute"))
const AdminLayout = lazy(() => import("./components/layouts").then(module => ({default: module.AdminLayout})))
const LoginRegister = lazy(() => import("./components/admin/login_register/LoginRegister"))

export const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden flex flex-col '>
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loader />}><UserLayout /></Suspense>}>
          <Route index element={<Home />}/>
          <Route path={`:lang/about-us`} element={<AboutUs  />}/>
          <Route path={`:lang/products`} element={<ProductsPage />}/>
       
          <Route path={`:lang/partners`}  element={<Partners />}/>
          <Route path={`:lang/contact-us`} element={<ContactUs />}/>
        </Route>
        <Route path='/yft-dashboard' element={<Suspense fallback={<Loader />}>
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        </Suspense>}>
          <Route index element={<Photos />} />
          <Route path='photos' element={<Photos />} />
        </Route>
        <Route path='/yft-login' element={<LoginRegister />}/>
      </Routes>
    </div>
  )
}

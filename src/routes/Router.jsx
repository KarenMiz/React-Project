import React from 'react'
import ROUTES from './routesModel'
import CardPage from '../Cards/Pages/CardPage'
import AboutPage from '../pages/AboutPage'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import SandBox from '../sandBox/SandBox'
import CardDetailsPage from '../Cards/Pages/CardDetailsPage'
import Counter from '../sandBox/Counter'
import Countries from '../sandBox/Countries'
import FormExample from '../sandBox/FormExample'
import SignupPage from '../users/pages/SignupPage'
import LoginPage from '../users/pages/LoginPage'
import ParentComponent from '../sandBox/optimization/ParentComponent'
import ParentComponentPage from '../sandBox/context/ParentComponentPage'
import AddCardPage from '../Cards/Pages/AddCardPage'
import EditCardPage from '../Cards/Pages/EditCardPage'
import Profile from '../users/pages/Profile'
import EditAccount from '../users/pages/EditAccount'
import FavCards from '../Cards/Pages/FavCards'
import MyCards from '../Cards/Pages/MyCards'
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.ROOT} element={<CardPage />} />
        <Route path={ROUTES.CARDS} element={<CardPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CARD_INFO + "/:id"} element={<CardDetailsPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
        <Route path={ROUTES.EDIT_CARD + "/:id"} element={<EditCardPage />} />
        <Route path={ROUTES.USER_PROFILE} element={<Profile />} />
        <Route path={ROUTES.EDIT_USER} element={<EditAccount />} />
        <Route path={ROUTES.FAV_CARDS} element={<FavCards />} />
        <Route path={ROUTES.MY_CARDS} element={<MyCards />} />

        <Route path={ROUTES.SANDBOX} element={<SandBox />}>
          <Route path="counter" element={<Counter />} />
          <Route path="countreis" element={<Countries />} />
          <Route path="FormExample" element={<FormExample />} />
          <Route path="ParentComponent" element={<ParentComponent />} />
          <Route path="context" element={<ParentComponentPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

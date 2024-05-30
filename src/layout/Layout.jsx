import React from 'react';
import Main from './main/Main';
import Footer from './footer/Footer';
import TheHeader from './header/TheHeader';



export default function Layout({children}) {
  return (
   <>
   <TheHeader />
   <Main>
      {children}
   </Main>
   <Footer/>
   </>
  );
}

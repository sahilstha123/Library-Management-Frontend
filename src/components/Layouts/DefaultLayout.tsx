import React, { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header />

      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
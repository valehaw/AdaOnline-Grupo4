import React from 'react'
import { Footer, Header } from './components'


const Layout = ({children}) => {

    return(
        <>
        <Header />
        <main className="layout">{children}</main>
        <Footer />
        </>
    )
}

export default Layout
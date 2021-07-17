import React from 'react'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'

export const Page2 = () => {
    return (
        <>
            <Header />
                <div className="h-96 flex items-center justify-center">
                    <h1 className="text-4xl">You are in page2</h1>
                </div>
            <Footer />   
        </>
    )
}

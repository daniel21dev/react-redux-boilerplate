import React from 'react'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'

export const Home = () => {
    return (
        <>
            <Header />
                <div className="h-96 flex items-center justify-center">
                    <h1 className="text-4xl">You are in Home!</h1>
                </div>
            <Footer />
        </>
    )
}

import React from 'react'
import { Layout } from './layout/Layout'

export const Home = () => {
    return (
        <Layout>
            <div className="h-96 flex items-center justify-center">
                <h1 className="text-4xl">You are in Home!</h1>
            </div>
        </Layout>
    )
}

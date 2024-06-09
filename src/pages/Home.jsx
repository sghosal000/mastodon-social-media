import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../api/axios'

import Header from '../components/Header'
import StatusCard from '../components/StatusCard'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const [statuses, setStatuses] = useState('')

    const fetchData = async () => {
        setLoading(true)

        try {
            const res = await axios.get('/api/v1/timelines/public?limit=20')

            setStatuses(res.data)
            // console.log(res.data[0]);
            setErrorMessage('')
        } catch (error) {
            console.error(error)
            setErrorMessage("Error Loading Data. Please try again later...")
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Header />
            <div className="w-full flex justify-center">
                <div className="min-h-screen flex flex-col w-full md:max-w-lg">
                    {
                        statuses && statuses.map((status) => (
                            <div key={status.id} className='w-full border-b-2 border-b-gray-300'>
                                <StatusCard data={status} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
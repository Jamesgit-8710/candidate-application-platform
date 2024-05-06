import React, { useEffect } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { getJobList } from '../../features/jobList/jobList.action'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobList({}))
    }, [])

    return (
        <div>
            Home
        </div>
    )
}

export default Home

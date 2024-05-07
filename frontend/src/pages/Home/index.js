import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getJobList } from '../../features/jobList/jobList.action'
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from '../../components/Navbar';
import Filters from '../../components/Filters';

const Home = () => {
    const dispatch = useDispatch();
    const jobList = useSelector((state) => state.jobs.jobList);
    const isJobListLoaded = useSelector((state) => state.jobs.isJobListLoaded);
    const [pagination, setPagination] = useState({
        limit: 15,
        offset: 0
    })

    useEffect(() => {
        fetchMoreJobs();
    }, [])

    const fetchMoreJobs = () => {
        dispatch(getJobList(pagination))
        setPagination((prevState) => ({
            ...prevState,
            offset: prevState.offset + 15
        }));
    }

    return (
        <div>
            <Navbar />
            <Filters />
            <InfiniteScroll
                dataLength={jobList.length}
                next={fetchMoreJobs}
                hasMore={!isJobListLoaded}
                loader={<div className='loading'><CircularProgress /></div>}
            >
                {jobList.map((data, index) => (
                    <div key={index} style={{ border: "1px solid black", borderRadius: "10px", padding: "20px", margin: "10px" }}>
                        Company name - {data.companyName}
                    </div>
                ))}
            </InfiniteScroll>
            {
                (jobList.length === 0 && isJobListLoaded) && <p>No Jobs Available :(</p>
            }
        </div>
    )
}

export default Home

import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getJobList } from '../../features/jobList/jobList.action'
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from '../../components/Navbar';
import Filters from '../../components/Filters';
import { filteredJobs } from '../../utils';

const Home = () => {
    const dispatch = useDispatch();
    const jobList = useSelector((state) => state.jobs.jobList);
    const filters = useSelector((state) => state.jobs.filters);
    const filteredJobList = filteredJobs(jobList, filters)
    const isJobListLoaded = useSelector((state) => state.jobs.isJobListLoaded);
    const loading = useSelector((state) => state.jobs.loading);

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
                dataLength={filteredJobList.length}
                next={fetchMoreJobs}
                hasMore={(!isJobListLoaded && filteredJobList.length !== 0) || loading}
                loader={<div className='loading'><CircularProgress /></div>}
            >
                {filteredJobList.map((data, index) => (
                    <div key={index} style={{ border: "1px solid black", borderRadius: "10px", padding: "20px", margin: "10px" }}>
                        Company name - {data.companyName}
                    </div>
                ))}
            </InfiniteScroll>
            {
                (filteredJobList.length === 0 && !loading) && <p>No Jobs Available :(</p>
            }
        </div>
    )
}

export default Home

import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getJobList } from '../../features/jobList/jobList.action'
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from '../../components/Navbar';
import Filters from '../../components/Filters';
import { filteredJobs } from '../../utils';
import Card from '../../components/Card';
import noResult from '../../assets/no-results.png'

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
                hasMore={!isJobListLoaded}
                loader={!isJobListLoaded && loading ? <div className='loading'><CircularProgress /></div> : ''}
            >
                <div className='jobCards'>
                    {filteredJobList.map((data, index) => (
                        <Card key={index} jobData={data} />
                    ))}
                </div>
            </InfiniteScroll>
            {
                (filteredJobList.length === 0 && !loading) && 
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
                    <img src={noResult} height={150}/>
                    <p style={{fontSize: "1.3rem", marginTop: "20px", fontWeight: "600"}}>No Jobs Available!</p>
                </div>
            }
        </div>
    )
}

export default Home

import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getJobList } from '../../features/jobList/jobList.action'
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
    const dispatch = useDispatch();
    const jobList = useSelector((state) => state.jobs.jobList);
    const totalCount = useSelector((state) => state.jobs.totalCount);
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
            Home
            <InfiniteScroll
                dataLength={jobList.length}
                next={fetchMoreJobs}
                hasMore={jobList.length<totalCount}
                loader={<h4>Loading...</h4>}
            >
                {jobList.map((data, index) => (
                    <div key={index} style={{ border: "1px solid black", borderRadius: "10px", padding: "20px", margin: "10px" }}>
                        Company name - {data.companyName}
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default Home

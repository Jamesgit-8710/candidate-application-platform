import React from 'react'
import './style.css'
import { Button } from '@mui/material'
import thunder from '../../assets/thunder.png'

const Card = ({ jobData }) => {

    const viewJob = () => {
        if(jobData.jdLink){
            window.location.href = jobData.jdLink;
        }
    }

    return (
        <div className='card'>
            <p className='postedAt'>Posted 6 days ago</p>
            <div className='jobDescription'>
                <div className='descriptionHeader'>
                    <img src={`${jobData.logoUrl}`} height={50} />
                    <div style={{ marginLeft: "10px" }}>
                        <p style={{ fontSize: "0.9rem", fontWeight: "600", color: "rgb(170, 170, 170)" }}>{jobData.companyName}</p>
                        <p style={{ fontWeight: "400", color: "rgb(70, 70, 70)" }}>{jobData.jobRole}</p>
                        <p style={{ fontSize: "0.7rem" }}>{jobData.location !== 'remote' ? jobData.location : 'India (Remote)'}</p>
                    </div>
                </div>
                <p style={{ fontWeight: "400", marginTop: "8px", color: "" }}>{jobData.minJdSalary && jobData.maxJdSalary ? `Estimated Salary: ₹${jobData.minJdSalary} - ${jobData.maxJdSalary} LPA` : 'Salary Not Disclosed'}</p>
                <p style={{ fontWeight: "500", marginTop: "8px", fontSize: "1.1rem" }}>About Company:</p>
                <p style={{ fontSize: "0.8rem" }}>{jobData.jobDetailsFromCompany}</p>
                <div className='gradiantContainer'>
                    <p className='viewJob' onClick={viewJob}>View job</p>
                </div>
            </div>
            <h4 style={{ fontWeight: "500", fontSize: "0.9rem", color: "rgb(170, 170, 170)", marginTop: "10px" }}>Minimum Experience</h4>
            <p>{jobData.minExp ? jobData.minExp : 0} years</p>
            <Button className='easyApply' disableElevation variant="contained" size='large' fullWidth startIcon={<img src={thunder} height={20} />}>Easy Apply</Button>
        </div>
    )
}

export default Card

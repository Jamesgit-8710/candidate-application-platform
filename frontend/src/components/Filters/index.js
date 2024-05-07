import React from 'react'
import './style.css'
import Select from 'react-select';
import rolesOptions from '../../data/rolesOptions.json'
import experienceOptions from '../../data/experienceOptions.json'

const Filters = () => {

    const formatGroupLabel = (data) => (
        <div>
            <span>{data.label}</span>
            <span>{data.label}</span>
        </div>
    );

    return (
        <div className='filtersContainer'>
            <div className='filters'>
                <Select
                    options={rolesOptions}
                    formatGroupLabel={formatGroupLabel}
                    isMulti
                    placeholder='Roles'
                    className='filter'
                />
                <Select
                    options={rolesOptions}
                    formatGroupLabel={formatGroupLabel}
                    isMulti
                    placeholder='Location'
                    className='filter'
                />
                <Select
                    placeholder='Experience'
                    options={experienceOptions}
                    isClearable
                    className='filter'
                />
                <Select
                    options={rolesOptions}
                    formatGroupLabel={formatGroupLabel}
                    isMulti
                    placeholder='Remote/on-site'
                    className='filter'
                />
                <Select
                    options={rolesOptions}
                    formatGroupLabel={formatGroupLabel}
                    isMulti
                    placeholder='Tech Stack'
                    className='filter'
                />
                <Select
                    placeholder='Min Base Pay'
                    options={experienceOptions}
                    isClearable
                    className='filter'
                />
                <input placeholder='Company name' className='companyName'/>
            </div>
        </div>
    )
}

export default Filters

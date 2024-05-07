import React, { useEffect, useState } from 'react'
import './style.css'
import Select from 'react-select';
import rolesOptions from '../../data/rolesOptions.json'
import experienceOptions from '../../data/experienceOptions.json'
import locationOptions from '../../data/locationOptions.json'
import minBasePayOptions from '../../data/minBasePayOptions.json'
import remoteOnsiteOptions from '../../data/remoteOnsiteOptions.json'
import { useDispatch, useSelector } from 'react-redux'
import { setInitialFiltersState, updateFilters } from '../../features/jobList/jobList.slice';

const Filters = () => {

    const dispatch = useDispatch();
    const filters = useSelector((state) => state.jobs.filters);

    const handleFiltersChange = (fieldName, value) => {
        dispatch(updateFilters({ fieldName, value }))
    };

    const clearAllFilters = () => {
        dispatch(setInitialFiltersState());
    };

    const formatGroupLabel = (data) => (
        <div>
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
                    value={filters.roles}
                    onChange={(selectedOptions) => handleFiltersChange('roles', selectedOptions)}
                />
                <Select
                    placeholder='Location'
                    formatGroupLabel={formatGroupLabel}
                    isMulti
                    options={locationOptions}
                    className='filter'
                    value={filters.location}
                    onChange={(selectedOption) => handleFiltersChange('location', selectedOption)}
                />
                <Select
                    placeholder='Experience'
                    options={experienceOptions}
                    isClearable
                    className='filter'
                    value={filters.experience}
                    onChange={(selectedOption) => handleFiltersChange('experience', selectedOption)}
                />
                <Select
                    options={remoteOnsiteOptions}
                    formatGroupLabel={formatGroupLabel}
                    isMulti
                    placeholder='Remote/on-site'
                    className='filter'
                    value={filters.remoteOnsite}
                    onChange={(selectedOptions) => handleFiltersChange('remoteOnsite', selectedOptions)}
                />
                <Select
                    placeholder='Min Base Pay'
                    options={minBasePayOptions}
                    isClearable
                    className='filter'
                    value={filters.minBasePay}
                    onChange={(selectedOption) => handleFiltersChange('minBasePay', selectedOption)}
                />
                <input
                    placeholder='Company name'
                    className='companyName'
                    value={filters.companyName}
                    onChange={(event) => handleFiltersChange('companyName', event.target.value)}
                />
                <p className='clearAll' onClick={clearAllFilters}>CLEAR ALL</p>
            </div>
        </div>
    );
}

export default Filters

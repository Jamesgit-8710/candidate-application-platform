
export const filteredJobs = (jobList,filters) => {
    let filteredJobs = jobList.filter(job => {
        // filter logic based on the selected filters

        
        let remoteOnsite = 'remote'
        if(job.location !== 'remote'){
            remoteOnsite = 'onsite'
        }

        let roleMatch = filters.roles.length === 0 || filters.roles.some(role => job.jobRole.includes(role.value));
        let locationMatch = filters.location.length === 0 || filters.location.some(location => job.location.includes(location.value));
        let experienceMatch = !filters.experience || (filters.experience.value >= job.minExp && filters.experience.value <= job.maxExp);
        let remoteOnsiteMatch = filters.remoteOnsite.length === 0 || filters.remoteOnsite.some(option => option.value===remoteOnsite);
        let minBasePayMatch = !filters.minBasePay || (filters.minBasePay.value >= job.minJdSalary && filters.minBasePay.value <= job.maxJdSalary);
        let companyNameMatch = !filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase());

        return roleMatch && locationMatch && experienceMatch && remoteOnsiteMatch && minBasePayMatch && companyNameMatch;
    });

    return filteredJobs
};


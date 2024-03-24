

const getJobApplication = ()=>{
    const storeJobApplication =localStorage.getItem('job-Application')
    if(storeJobApplication){
        return JSON.parse(storeJobApplication)
    }
    return []
}


const saveJobApplication = id=> {
    const storeJobApplications = getJobApplication()
    const exists = storeJobApplications.find(jobId => jobId===id);
    if(!exists){
         storeJobApplications.push(id);
         localStorage.setItem('job-Application',JSON.stringify(storeJobApplications))
    }

}

export { getJobApplication,saveJobApplication}
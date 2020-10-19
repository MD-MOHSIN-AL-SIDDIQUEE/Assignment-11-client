import React, { useState } from 'react';

const ServiceDataTable = (props) => {
    const {servicedata}=props
    const {_id,title}=servicedata
    const [projectData,setProjectData] =useState([])
    
    const handleSubmit=(e)=>{
        const value=e.target.value;
        const newprojectData=[servicedata,...projectData,value]
      setProjectData(newprojectData);
    }
    console.log(projectData)
    return (
        <div>
                <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary" scope="col">Status</th>
           
                </tr>
            </thead>
            <tbody>
                {
                 servicedata.map((servicedata, index) => 
                        
                    <tr onChange={handleSubmit()} >
                        <td>{index + 1}</td>
                        <td>{servicedata.name}</td>
                        <td>{servicedata.email}</td>
                        <td value={servicedata.title}name="title">{servicedata.title}</td>
                        <td>{servicedata.description}</td>
                        <td>
                        <select className="form-control" name="status"  >
                                <option disabled={true} value="Not set">Select Status</option>
                                <option value="pending">pending</option>
                                <option value="done">done</option>
                                <option value="ongoing">ongoing</option>
                            </select>
                        
                             </td>               
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default ServiceDataTable;
import React, { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import { Input } from 'semantic-ui-react'

function ProjectsList (props) {
    const { projectList } = useContext( ProjectContext )
    const [donation, setDonation] = useState({
        donationAmount: "",
    })

    const saveDonation = pro => {
        axiosWithAuth()
        .post(`/donations/projects/${pro.id}`, {...donation,projectID: pro.id})
        .then ( (res) => {
            console.log('donation working', res)
        })
        .catch(err => console.log(err));
    }
 

    return (
        <div className="listDiv">
            <h2>Start fundraising today</h2>
            <div className="list">
            {projectList.map((project) => (
                <div className="projectList" key={project.id} >
                    <h3> {project.projectTitle}</h3>
                    <p>{project.projectStory}</p>
                    <p>Goal of {project.goalFunding}</p>   
                    <form onSubmit={saveDonation}>
                        <div className="selectbox" onChange={e=>setDonation({ donationAmount: e.target.value})}>
                            <select name="donationAmount" >
                                <option value={100}>$20.00</option>
                                <option value={200}>$50.00</option>
                                <option value={300}>$100.00</option>
                                <option value={400}>$500.00</option>
                            </select>
                        </div>
                          <button className="donBtn" onClick={e => {
                            e.preventDefault();
                            saveDonation(project)
                        }
                        }>
                        Add Donation
                    </button>
                    </form>
                </div>         
            ))}

            </div>

        </div>
    )
}

export default ProjectsList


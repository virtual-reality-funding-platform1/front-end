import React, { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import {axiosWithAuth} from '../utils/AxiosWithAuth'

function ProjectsList (props) {
    const { projectList } = useContext( ProjectContext )
    const [donation, setDonation] = useState({
        donationAmount: "",
    })

    // const handleChanges = e => {
    //     e.preventDefault()
    //     setDonation({ ...donation,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const saveDonation = pro => {
        axiosWithAuth()
        .post(`/donations/projects/${pro.id}`, {...donation,projectID: pro.id})
        .then ( (res) => {
            console.log('donation working', res)
            setDonation(projectList.filter(item => item.id !== pro.id))
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
                        <input
                            type="text"
                            value={donation.donationAmount}
                            name="donationAmount"
                            onChange={e=>setDonation({...donation, donationAmount: e.target.value})}
                        />
                          <button className="delete" onClick={e => {
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


// import React, { useState, useEffect} from 'react'
// import {axiosWithAuth} from '../utils/AxiosWithAuth'
// import { useParams, useHistory } from "react-router-dom";

// function DonationForm() {
//     const [donation, setDonation ] = useState([{
//         donationAmount: "",
//         userID: "",
//     }]);


//     // useEffect(() => {
//     //     axiosWithAuth()
//     //     .get(`/donations/projects/${id}`)
//     //     .then((res) => 
//     //     {setDonation(res.data);
//     //     console.log("put working", res
//     //     )} )
//     //     .catch((err) => {console.log("put error", err)})
//     // },[id])

//     const handleChange = event => {
//         setDonation({...donation,[event.target.name]: event.target.value})
//     }

//     // const addDonation = (event,pro) => {
//     //     event.preventDefault();
//     //     axiosWithAuth()
//     //     .get(`/donations/projects/${pro.id}`)
//     //     .then ( (res) => {
//     //         // updateProject(projectList.filter(item => item.id !== pro.id))
//     //         setDonation({
//     //             donationAmount: "",
//     //             userID: "",
//     //         })
//     //         console.log('donation working',res )
//     //     })
//     //     .catch(err => console.log(err));
//     // }

//     // const handleSubmit = event =>{
//     //     event.preventDefault();
//     //     axiosWithAuth()
//     //     .post(`/donations/projects/${id}`, donation)
//     //     .then((res) => {
//     //         setDonation({
//     //             donationAmount: "",
//     //             userID: "",
//     //             id: Date.now()
//     //         })
//     //         console.log('not working donations',res)
//     //     })
//     //     .catch((err) => {console.log("add error", err)})
//     // }


//     return (
//         <div>
//          <form onSubmit={addDonation}>
//             <input
//                 type="text"
//                 name="donationAmount"
//                 onChange={handleChange}
//                 value={donation.donationAmount}
//              />
//               <input
//                 type="text"
//                 name="userID"
//                 onChange={handleChange}
//                 value={donation.userID}
//              />

//              <input 
//                 type="submit"
//              />
//         </form>
//         </div>
//     )
// }

// export default DonationForm

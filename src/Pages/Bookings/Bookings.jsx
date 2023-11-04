import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
//import axios from "axios";
import useAxiosSecure from "../../Hooks/UseAxiousSecure";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
         //method 3
    const axiosSecure = useAxiosSecure()

         //method 1 & 2
    //const url = (`http://localhost:5000/bookings?email=${user?.email}`);
        
         //method 3
    const url = `/bookings?email=${user?.email}`;

    useEffect(() =>{
             //method 3
        axiosSecure.get(url)
        .then(res => setBookings(res.data))

             //method 2
        // axios.get(url, {withCredentials:true})
        // .then(res => {
        //   setBookings(res.data);
        // })

            //method 1
        // fetch(url, {withCredentials: 'include'  })
        // .then(res => res.json())
        // .then(data => setBookings(data))
    } , [url, axiosSecure]);

    const handleDelete = id => {
      const proceed = confirm('Are You Sure you want to Delete');
      if(proceed){
        fetch(`https://car-doctor-server-bay-eight.vercel.app/bookings/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => { 
          console.log(data);
          if(data.deletedCount > 0){
            alert('Deleted Successful');
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining)
          }
        })
      }
    }
 
    const handleBookingConfirm = id => {
       fetch(`https://car-doctor-server-bay-eight.vercel.app/bookings/${id}`,{
           method:'PATCH',
           headers: {
            'content-type':'application/json'
           },
           body: JSON.stringify({status:'confirm'})
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)  
          if(data.modifiedCount > 0) {
              const remaining = bookings.filter(booking => booking._id !== id);
              const updated = bookings.find(booking => booking._id === id);
              updated.status = 'confirm'
              const newBookings = [updated, ...remaining];
              setBookings(newBookings);
          }
       })
    }

    return (
<div>
  <div className="overflow-x-auto m-auto ">
  <table className="table">
    {/* head */}
    <thead className="">
      <tr>
        
        <th>service</th>
        <th>email</th>
        <th>Name</th>
        <th>Price</th>
        <th>more</th>
      </tr>
    </thead>

    <tbody>
        {
            bookings.map(booking => <BookingRow
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
            handleBookingConfirm={handleBookingConfirm}
            ></BookingRow>)
        }
    </tbody>
    
  </table>
 </div>
</div>
    );
};

export default Bookings;
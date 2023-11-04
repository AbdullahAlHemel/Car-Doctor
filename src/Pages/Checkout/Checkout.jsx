import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const {title, _id, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const data = form.data.value;
        const price = form.price.value;
        const email = form.email.value;
        const booking = {
            customerName: name,
            email,
            img,    
            data,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('https://car-doctor-server-bay-eight.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
                alert('service book successfully')
        })
    }

    return (
<div className='bg-gray-300 p-12 rounded mb-10'>
    <h2 className='text-center text-2xl font-semibold text-[#ff5300]'>Check Out : {title}</h2>
    <form onSubmit={handleBookService}>
    <div className='flex '>
       <div className="form-control w-1/2 ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name'  placeholder='Name' defaultValue={user?.displayName} className="input input-bordered" required />
      </div>
      <div className="form-control ml-5 w-1/2">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="price" defaultValue={price} name='price' placeholder="password" className="input input-bordered" required />
      </div>
    </div>
    <div className='flex'>
       <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' defaultValue={user?.email} placeholder='email' className="input input-bordered" required />
      </div>
      <div className="form-control ml-5 w-1/2">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="date" name='data' className="input input-bordered" required />
      </div>
    </div>
    <div className="form-control w-full pb-12">
          
          <input type='submit' value='Order Confirm' className="mt-7 text-white bg-red-500 text-2xl font-bold input input-bordered" required />
    </div>
    </form>
</div>
    );
};

export default Checkout;
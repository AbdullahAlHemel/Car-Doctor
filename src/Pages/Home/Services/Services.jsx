import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import UserServices from '../../../Hooks/UserServices';

const Services = () => {
        const services = UserServices()

    // const [services, setServices] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/Services')
    //          .then(res => res.json())
    //          .then(data => setServices(data))
    // },[])
    return (
        <div className='mt-4'>
            <div className='text-center space-y-5'>
                <h4 className='font-bold text-2xl text-[#ff5200]'>Service</h4>
                <h2 className='text-5xl text-orange font-bold  '>Our Service Area</h2>
                <p className='px-[250px] text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

           <div className='grid md:grid-cols-3 gap-8 my-12 '>
           {
                services.map(service => <ServiceCard
                 key={service._id}
                 service={service}
                ></ServiceCard>)
            }
           </div>
            
        </div>
    );
};

export default Services;
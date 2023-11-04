import { useEffect, useState } from "react";

const UserServices = () => {

    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('https://car-doctor-server-bay-eight.vercel.app/Services')
             .then(res => res.json())
             .then(data => setServices(data))
    }, [])
    return services
};

export default UserServices;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseNumber = () => {
    const [number, setNumber] = useState(0)
    useEffect(()=> {
        axios.get('/getNumber')
        axios.get()
        .then(res =>{
            setNumber(res.data);                
        })
    },[])
    return number
   
};

export default UseNumber;
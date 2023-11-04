import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
// import { useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
   
    // const {signIn} =  useContext(AuthContext);
    const {signIn} = UseAuth()   


    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email}
            axios.post('https://car-doctor-server-bay-eight.vercel.app/jwt', user, {withCredentials: true})
            .then(res => {
                console.log(res.data)
                if(res.data.success){
                    navigate(location?.state ? location?.state : '/')    
                }
            })
        })
        .catch(error => console.log(error))
    }


    return (
<div>
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className='text-center lg:text-left w-1/2'>
           <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 border p-8">
        <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="w-[400px] p-6 mr-10 input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="w-[400px] p-6 mr-10  input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn text-white bg-orange-500 hover:bg-red-400">Sign In</button>
            </div>
        </form>
         <p className='text-gray-600 font-semibold text-center'>New to Car Doctors ?<Link to='/signup' className='ml-2 text-orange-500 font-bold'>Signup</Link></p>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Login;
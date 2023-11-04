import { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
    
const SignUp = () => {
 
    const {createUser} = useContext(AuthContext)

    const handleSingUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
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
        <form onSubmit={handleSingUP} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="Name" name='name' placeholder="Name" className="w-[400px] p-6 mr-10 input input-bordered" required />
            </div>
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
            <button className="btn text-white bg-[#ff3811] hover:bg-red-400">Sign UP</button>
            </div>
        </form>
         <p className='text-gray-600 font-semibold text-center'>Already to Car Doctors ?<Link to='/login' className='ml-2 text-orange-500 font-bold'>Login</Link></p>
        </div>
      </div>
    </div>
  </div>
    );
};

export default SignUp;
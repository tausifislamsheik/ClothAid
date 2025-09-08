import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState({});

    const handleSubmit = (e) =>{
          e.preventDefault();

          const form = new FormData(e.target)
        //   const name = form.get('name')
        //   const photo = form.get('photo')
          const email = form.get('email')
          const password = form.get('password')

          if(password.length < 8){
              setError({...error, password:'password must be 8 characters or longer'})
              return;
          }

          createUser(email, password)
          .then(result => console.log(result))
          .catch(error => console.log(error.message))
    }
    return (
        <div className="md:w-10/12 mx-auto mt-10">
                <div className="hero-content">
                    <div className="card border border-gray-300 p-10 py-14 w-full max-w-lg shrink-0">
                        <h1 className="text-xl md:text-3xl font-semibold pb-12 text-center">Register your account</h1>
                        <hr className="pt-4 text-gray-200" />
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset space-y-2">
                        <label className="label text-lg font-semibold">Your Name</label>
                        <input type="text" name="name" className="input w-full bg-gray-100 border-none" placeholder="Enter your name" />
                        <label className="label text-lg font-semibold">Photo URL</label>
                        <input type="text" name="photo" className="input w-full bg-gray-100 border-none" placeholder="Enter your photo url" />
                        <label className="label text-lg font-semibold">Email</label>
                        <input type="email" name="email" className="input w-full bg-gray-100 border-none" placeholder="Enter your email address" />
                        <label className="label text-lg font-semibold">Password</label>
                        <input type="password" name="password" className="input w-full bg-gray-100 border-none" placeholder="Enter your password" />
                        {
                            error.password && <p className="text-red-500 text-center font-semibold">{error.password}</p>
                        }
                        <button className="btn bg-orange-600 text-white mt-4">Login</button>
                        </fieldset>
                    </form>
                    <h1 className="text-center pt-4">Already have an account? <Link className="text-red-700 font-semibold" to='/auth/login'>Login</Link></h1>
                    </div>
                </div>
        </div>
    );
};

export default Register;
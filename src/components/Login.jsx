import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate('/');
        })
        .catch(error => console.log(error.message))
    }


    return (
        <div className="md:w-10/12 mx-auto mt-10">
                <div className="hero-content">
                    <div className="card border border-gray-300 p-10 py-14 w-full max-w-lg shrink-0">
                        <h1 className="text-xl md:text-3xl font-semibold pb-12 text-center">Login your account</h1>
                        <hr className="pt-4 text-gray-200" />
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset space-y-2">
                        <label className="label text-lg font-semibold">Email</label>
                        <input type="email" name="email" className="input w-full bg-gray-100 border-none" placeholder="Enter your email address" required />
                        <div className="relative">
                            <label className="label text-lg font-semibold">Password</label>
                            <input type="password" name="password" className="input w-full bg-gray-100 border-none" placeholder="Enter your password" required />
                        </div>
                        <div><a className="link link-hover text-gray-500">Forgot password?</a></div>
                        <button className="btn bg-orange-600 text-white mt-4">Login</button>
                        </fieldset>
                    </form>
                    <h1 className="text-center pt-4">Don't have an account? <Link className="text-red-700 font-semibold" to='/register'>Register</Link></h1>
                    </div>
                </div>
        </div>
    );
};

export default Login;
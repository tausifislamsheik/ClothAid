import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {

    const {loginUser, loginWithGoogle} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

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
            navigate(location?.state ? location.state : '/');
            toast.success('User successfully login')
        })
        .catch(() => toast.error('Invalid email or password'))
    }

    const handleLoginGoogle = () =>{
           loginWithGoogle()
           .then(result => {
            console.log(result.user)
            navigate('/');
            navigate(location?.state ? location.state : '/');
            toast.success('User successfully login')
          })
          .catch(error => console.log(error.message))
    }

    const handleForgotPassword = () =>{
        const email = emailRef.current.value;
        if(!email){
            toast.error('Please provide a valid email')
        }else{
            sendPasswordResetEmail(auth, email)
            .then(() =>{
                toast.success('Password reset email sent!')
            })
            .catch(error => console.log(error.message))
        }
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
                        <input type="email" name="email" ref={emailRef} className="input w-full bg-gray-100 border-none" placeholder="Enter your email address" required />
                        <div className="relative">
                            <label className="label text-lg font-semibold">Password</label>
                            <input type={showPassword ? 'text' : 'password'} name="password" className="input w-full bg-gray-100 border-none" placeholder="Enter your password" required />
                        </div>
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute text-xl right-14 bottom-73 cursor-pointer">
                            {
                                showPassword ? <IoMdEyeOff /> : <IoMdEye />
                            }
                        </div>
                        <div onClick={handleForgotPassword}><a className="link link-hover text-gray-500">Forgot password?</a></div>
                        <button className="btn bg-orange-600 text-white mt-4">Login</button>
                        </fieldset>
                        <div className="divider">or</div>
                        <div className="text-center">
                            <button onClick={handleLoginGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                         <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                         Login with Google
                        </button>
                        </div>
                    </form>
                    <h1 className="text-center pt-4">Don't have an account? <Link className="text-red-700 font-semibold" to='/register'>Register</Link></h1>
                    </div>
                </div>
        </div>
    );
};

export default Login;
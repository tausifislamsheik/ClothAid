import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
       <div className="flex flex-col justify-center items-center min-h-screen text-center">
         <div className="space-y-5 border border-gray-300 inline p-14 px-20 md:px-40 rounded-2xl ">
            <h1 className="text-3xl md:text-5xl font-bold text-orange-600">Oops!</h1>
            <p className="md:text-xl font-semibold text-gray-400">Page not found</p>
            <Link to='/' className="btn bg-orange-600 text-white mt-12">Back to Home</Link>
        </div>
       </div>
    );
};

export default ErrorPage;
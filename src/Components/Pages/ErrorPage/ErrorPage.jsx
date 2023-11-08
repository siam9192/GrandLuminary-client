import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className='error_banner min-h-[60vh] bg-white'>
            <div className="flex items-center justify-center flex-col">
            <img src="/images/Form/4042.jpg" alt="" className='w-1/3 py-20' />
            <Link to="/"><div><button className='px-6 py-2 bg-black text-white'>Back to home</button></div></Link>
            </div>
        </div>
    );
}

export default ErrorPage;

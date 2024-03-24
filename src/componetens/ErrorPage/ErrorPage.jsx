import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center m-40">
            <h2 className="text-6xl  ">Not Found Page</h2>
            <Link to='/' className="btn btn-primary mt-10">Go back</Link>
        </div>
    );
};

export default ErrorPage;
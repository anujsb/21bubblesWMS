import { Link } from "react-router-dom";

const LoginOptions = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary">
      <div className="card w-400 p-3 bg-white rounded-lg shadow-md">
        <h1>login as:</h1>
        <Link to="/auth/manager">login as manager</Link>
        <Link to="/auth/employee">login as employee</Link>
      </div>
    </div>
  );
};

export default LoginOptions;

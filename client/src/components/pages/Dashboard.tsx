import NavBar from "../s/NavBar";
import SideBar from "../s/SideBar";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br backdrop-blur-sm">
      <NavBar />
      <div className="flex min-h-screen w-full">
        <SideBar />
        <div className="flex-1 p-6">
          <div className="border-b border-gray-200 pb-4 dark:border-gray-800">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

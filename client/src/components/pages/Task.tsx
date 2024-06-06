import React, { useEffect, useState } from 'react';
import NavBar from "../nav/NavBar";
import SideBar from "../nav/SideBar";
import { getAllTasks } from '../apiService';

const Projects = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getAllTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br backdrop-blur-sm">
      <NavBar />
      <div className="flex min-h-screen w-full">
        <SideBar />
        <div className="flex-1 p-6">
          <div className="border-b border-gray-200 pb-4 dark:border-gray-800">
            <h1 className="text-2xl font-bold">Team Spaces</h1>
          </div>
          <div className="mt-6 overflow-x-auto">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Project Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Assigned Team</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Due Dates</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Completion</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Priority</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Chat</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {tasks.map(task => (
                    <tr key={task._id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-500">
                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                          </svg>
                          <span className="font-medium">{task.title}</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          {task.AssignedTo && task.AssignedTo.map((member, index) => (
                            <img key={index} src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                          ))}
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className={`inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold ${task.completed ? 'bg-green-500' : 'bg-yellow-500'}`}>
                          {task.completed ? 'Done' : 'Pending'}
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex flex-col gap-1">
                          <div>{task.dueDateStart}</div>
                          <div className="text-gray-500">{task.dueDateEnd}</div>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="relative h-3 w-full rounded-full bg-gray-200">
                          <div className="absolute h-full w-[85%] rounded-full bg-green-500"></div>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className={`inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold ${task.priority === 'High' ? 'bg-red-500' : 'bg-blue-500'}`}>
                          {task.priority}
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M17 6.1H3"></path>
                            <path d="M21 12.1H3"></path>
                            <path d="M15.1 18H3"></path>
                          </svg>
                          Chat
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

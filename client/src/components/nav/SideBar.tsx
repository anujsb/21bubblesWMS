// import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  // const [isUsersAccordionOpen, setIsUsersAccordionOpen] = useState(false);
  // const [isSubMenu1Open, setIsSubMenu1Open] = useState(false);
  // const [isSubMenu2Open, setIsSubMenu2Open] = useState(false);

  return (
    // <>
    //   {/* Navigation Toggle */}
    //   {/* <button
    //     type="button"
    //     className="text-gray-500 hover:text-gray-600"
    //     aria-label="Toggle navigation"
    //     onClick={() => setIsUsersAccordionOpen(!isUsersAccordionOpen)}
    //   >
    //     <span className="sr-only">Toggle Navigation</span>
    //     <svg
    //       className="flex-shrink-0 size-4"
    //       width="16"
    //       height="16"
    //       fill="currentColor"
    //       viewBox="0 0 16 16"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    //       />
    //     </svg>
    //   </button> */}
    //   {/* End Navigation Toggle */}

    //   {/* Sidebar */}
    //   <div
    //     id="docs-sidebar"
    //     className={`hs-overlay ${
    //       isUsersAccordionOpen ? "translate-x-0" : "-translate-x-full"
    //     } transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 backdrop-blur-sm shadow-lg pt-7 pb-10 overflow-y-auto lg:translate-x-0 lg:end-auto lg:bottom-0`}
    //   >
    //     <div className="px-6">
    //       <a
    //         className="flex-none text-xl font-semibold"
    //         href="#"
    //         aria-label="logo"
    //       >
    //         21Bubbles
    //       </a>
    //     </div>
    //     <nav
    //       className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
    //       data-hs-accordion-always-open
    //     >
    //       <ul className="space-y-1.5">
    //         <li>
    //           <Link
    //             className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //             to="/"
    //           >
    //             <svg
    //               className="size-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             >
    //               <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    //               <polyline points="9 22 9 12 15 12 15 22" />
    //             </svg>
    //             Dashboard
    //           </Link>
    //         </li>

    //         <li className="hs-accordion" id="users-accordion">
    //           <Link
    //             to="/projects"
    //             type="button"
    //             className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //             onClick={() => setIsUsersAccordionOpen(!isUsersAccordionOpen)}
    //           >
    //             <svg
    //               className="size-4"
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             >
    //               <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    //               <circle cx="9" cy="7" r="4" />
    //               <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    //               <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    //             </svg>
    //             Projects
    //             <svg
    //               className={`hs-accordion-active:block ms-auto ${
    //                 isUsersAccordionOpen ? "block" : "hidden"
    //               } size-4 text-gray-600 group-hover:text-gray-500`}
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             >
    //               <path d="m18 15-6-6-6 6" />
    //             </svg>
    //             <svg
    //               className={`hs-accordion-active:hidden ms-auto ${
    //                 !isUsersAccordionOpen ? "block" : "hidden"
    //               } size-4 text-gray-600 group-hover:text-gray-500`}
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             >
    //               <path d="m6 9 6 6 6-6" />
    //             </svg>
    //           </Link>

    //           <div
    //             id="users-accordion"
    //             className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
    //               isUsersAccordionOpen ? "block" : "hidden"
    //             }`}
    //           >
    //             <ul
    //               className="hs-accordion-group ps-3 pt-2"
    //               data-hs-accordion-always-open
    //             >
    //               <li className="hs-accordion" id="users-accordion-sub-1">
    //                 <button
    //                   type="button"
    //                   className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //                   onClick={() => setIsSubMenu1Open(!isSubMenu1Open)}
    //                 >
    //                   Project 1
    //                   <svg
    //                     className={`hs-accordion-active:block ms-auto ${
    //                       isSubMenu1Open ? "block" : "hidden"
    //                     } size-4 text-gray-600 group-hover:text-gray-500`}
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     strokeWidth="2"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   >
    //                     <path d="m18 15-6-6-6 6" />
    //                   </svg>
    //                   <svg
    //                     className={`hs-accordion-active:hidden ms-auto ${
    //                       !isSubMenu1Open ? "block" : "hidden"
    //                     } size-4 text-gray-600 group-hover:text-gray-500`}
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     strokeWidth="2"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   >
    //                     <path d="m6 9 6 6 6-6" />
    //                   </svg>
    //                 </button>

    //                 <div
    //                   id="users-accordion-sub-1"
    //                   className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
    //                     isSubMenu1Open ? "block" : "hidden"
    //                   }`}
    //                 >
    //                   <ul className="pt-2 ps-2">
    //                     <li>
    //                       <a
    //                         className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //                         href="#"
    //                       >
    //                         Task 1
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //                         href="#"
    //                       >
    //                         Task 2
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //                         href="#"
    //                       >
    //                         Task 3
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>

    //               <li className="hs-accordion" id="users-accordion-sub-2">
    //                 <button
    //                   type="button"
    //                   className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //                   onClick={() => setIsSubMenu2Open(!isSubMenu2Open)}
    //                 >
    //                   Project 2
    //                   <svg
    //                     className={`hs-accordion-active:block ms-auto ${
    //                       isSubMenu2Open ? "block" : "hidden"
    //                     } size-4 text-gray-600 group-hover:text-gray-500`}
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     strokeWidth="2"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   >
    //                     <path d="m18 15-6-6-6 6" />
    //                   </svg>
    //                   <svg
    //                     className={`hs-accordion-active:hidden ms-auto ${
    //                       !isSubMenu2Open ? "block" : "hidden"
    //                     } size-4 text-gray-600 group-hover:text-gray-500`}
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     strokeWidth="2"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   >
    //                     <path d="m6 9 6 6 6-6" />
    //                   </svg>
    //                 </button>

    //                 <div
    //                   id="users-accordion-sub-2"
    //                   className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
    //                     isSubMenu2Open ? "block" : "hidden"
    //                   }`}
    //                 >
    //                   <ul className="pt-2 ps-2">
    //                     <li>
    //                       <a
    //                         className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //                         href="#"
    //                       >
    //                         Task 1
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //                         href="#"
    //                       >
    //                         Task 2
    //                       </a>
    //                     </li>
    //                     <li>
    //                       <a
    //                         className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
    //                         href="#"
    //                       >
    //                         Task 3
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </>
    <aside className="sticky hs-overlay top-0 h-screen w-56 shadow-md text-gray-800 p-4">
      {/* <div className="flex items-center mb-4 space-x-1">
        <img
          src="/placeholder.svg"
          width="30"
          height="30"
          alt="Company Logo"
          // style="aspect-ratio: 30 / 30; object-fit: cover;"
        />
        <h1 className="text-lg font-medium">Acme</h1>
      </div> */}
      <nav className="space-y-2">
        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4 h-4"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <Link to="/" className="text-sm font-medium">
            Dashboard
          </Link>
        </button>
        <button className="w-full flex items-center space-x-2 bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
          </svg>
          <Link role="button" to="/projects" className="text-sm font-medium">
            Projects
          </Link>
        </button>
        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4 h-4"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span className="text-sm font-medium">Tasks</span>
        </button>
        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
          {/* <span className="text-sm font-medium">Tax</span> */}
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;

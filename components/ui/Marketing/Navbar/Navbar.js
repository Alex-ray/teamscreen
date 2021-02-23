// import Link from 'next/link';
// import s from './Navbar.module.css';
// import Logo from '../../../icons/Logo';
// import { useUser } from '../../../UserContext';

import Button from '../../Button';

const MarketingNavBar = () => {
  return (
    <div class="relative pt-6 pb-16 sm:pb-24">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="" />
            </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
          </div>
            <div className="hidden space-x-10 md:flex md:ml-10">
              <a href="#" className="font-medium text-primary hover:text-gray-300">Product</a>

              <a href="#" className="font-medium text-primary hover:text-gray-300">Features</a>

              <a href="#" className="font-medium text-primary hover:text-gray-300">Marketplace</a>

              <a href="#" className="font-medium text-primary hover:text-gray-300">Company</a>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button variant={"slim"} className="block w-full rounded-md py-2 text-sm font-semibold text-primary text-center">
              Login
            </Button> 
            {/* <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
              Log in
          </a> */}
          </div>
      </nav>

      {/*
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
      */}
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
          </div>
              <div className="-mr-2">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
              Log in
            </a>
          </div>
        </div>
    </div>
  );
}

export default MarketingNavBar; 



// const Navbar = () => {
//   const { user, signOut} = useUser();

//   if (user) {
//     return null;
//   }

//   return (<MarketingNavBar />);
//   return (
//       <nav>
//         <a href="#skip" className="sr-only focus:not-sr-only">
//           Skip to content
//       </a>
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
//             <div className="flex flex-1 items-center">
//               <Link href="/">
//                 <a className={s.logo} aria-label="Logo">
//                   <Logo />
//                 </a>
//               </Link>
//               <nav className="space-x-2 ml-6 hidden lg:block">
//                 <Link href="/">
//                   <a className={s.link}>Pricing</a>
//                 </Link>
//                 <Link href="/account">
//                   <a className={s.link}>Account</a>
//                 </Link>
//               </nav>
//             </div>

//             <div className="flex flex-1 justify-end space-x-8">
//               {user ? (
//                 <Link href="#">
//                   <a className={s.link} onClick={() => signOut()}>
//                     Sign out
//                 </a>
//                 </Link>
//               ) : (
//                   <Link href="/signin">
//                     <a className={s.link}>Sign in</a>
//                   </Link>
//                 )}
//             </div>
//           </div>
//         </div>
//       </nav>
//   );
// };

// export default Navbar;

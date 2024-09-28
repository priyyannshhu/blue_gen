import { Fragment } from "react"; 
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary-200 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl">
            <div className="flex justify-between">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700 p-2 hover:bg-orange-200 rounded-xl"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700 p-2 hover:bg-orange-200 rounded-xl"
                    href="/"  // Redirecting to home
                  >
                    About
                  </Link>
                  <Link
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700 p-2 hover:bg-orange-200 rounded-xl"
                    href="/"  // Redirecting to home
                  >
                    Donate
                  </Link>
                </div>
              </div>

              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <div className="flex text-blue-500 align-baseline">
                    <Link
                      href="https://www.holy-bhagavad-gita.org/"
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-blue-300 hover:text-blue-700"
                    >
                      Read Bhagavad Gita
                    </Link>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Disclosure.Button
                as="Link"  // Changed to Link for client-side routing
                href="/"
                className="block border-l-4 border-primary-500 hover:bg-primary-100 py-2 pl-3 pr-4 text-base font-medium text-gray-500"
              >
                <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path
                    fill="#134563"
                    d="M18.8 34.5c-5.5 0-10 4.5-10 10 0 7.3 4.6 12.1 21.3 25.8 16.7-13.7 21.3-18.5 21.3-25.8 0-5.5-4.5-10-10-10-5 0-7.7 3-9.8 5.4l-1.5 1.7-1.5-1.7c-2.1-2.4-4.8-5.4-9.8-5.4z"
                  />
                </svg>
                BlueGen
              </Disclosure.Button>
              <Disclosure.Button
                as="Link" // Changed to Link for client-side routing
                href="/" // Redirecting to home
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="Link" // Changed to Link for client-side routing
                href="/" // Redirecting to home
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as="Link" // Changed to Link for client-side routing
                href="/" // Redirecting to home
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Blog
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

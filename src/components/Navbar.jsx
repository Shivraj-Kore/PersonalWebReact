import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ph1 from '../assets/ph1.jpeg'
import { useState , useEffect } from 'react';
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

function classNames(...classes) {
return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [changecolor, setChangecolor] = useState(false);
  const [icon, setIcon] = useState(true);

  const handleClick = () => {
    setChangecolor(!changecolor);
    setIcon(!icon);
  };
  // {`bg-opacity-25 ${changecolor ? 'bg-[#00FF75]' : 'bg-[#FF008A]'}`}
  return (
    <Disclosure as="nav" className={`bg-opacity-90 ${changecolor ? 'bg-[#ffffff]' : 'bg-[#000000]'}`}>
      {({ open , close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className='lg:hidden'>
              <img
                className="h-8 w-auto rounded"
                src={icon ? sun : moon}
                onClick={handleClick}
                alt="Your Company"
              />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={ph1}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center justify-center space-x-4">
                    <ul className="flex space-x-4">
                      <li>
                        <Link to="/" className={classNames(
                          'rounded px-3 py-2   font-medium',
                          'hover:text-[#a78bfa]/100  text-[#8A00FF]/100'
                        )}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className={classNames(
                          'rounded px-3 py-2   font-medium',
                          'hover:text-[#a78bfa]/100  text-[#8A00FF]/100'
                        )}>
                          About Me
                        </Link>
                      </li>
                      <li>
                        <Link to="/myskills" className={classNames(
                          'rounded px-3 py-2   font-medium',
                          'hover:text-[#a78bfa]/100  text-[#8A00FF]/100'
                        )}>
                          My Skills 
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects" className={classNames(
                          'rounded px-3 py-2   font-medium',
                          'hover:text-[#a78bfa]/100  text-[#8A00FF]/100'
                        )}>
                          My Projects 
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className={classNames(
                          'rounded px-3 py-2   font-medium',
                          'hover:text-[#a78bfa]/100  text-[#8A00FF]/100'
                        )}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                    {/* <button onClick={() => setChangecolor(!changecolor)} className={classNames('rounded px-3 pl-[500px] font-medium hover:text-[#a78bfa]/100 text-[#8A00FF]/100')}>
                      Change Color
                      </button> */}
                      <div className='pl-[560px]'>
                        <img
                        className="h-8 w-auto rounded"
                        src={icon ? sun : moon}
                        onClick={handleClick}
                        alt="Your Company"/>
                      </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded p-2 text-[#ffffff]">
                  <span className="absolute -inset-0.5" />
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
            <div className="space-y-1 px-2 pb-3 pt-2">
              <ul className="space-y-1 px-2 pb-3 pt-2 hover:text-[#a78bfa]/100  text-[#8A00FF]/100 hover:bg-[#a78bfa]/5  bg-[#8A00FF]/5 rounded">
                <li>
                  <Link to="/" onClick={() => close()} className={classNames(
                    'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => close()} className={classNames(
                    'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link to="/myskills" onClick={() => close()} className={classNames(
                    'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    My Skills
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={() => close()} className={classNames(
                    'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    My Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => close()} className={classNames(
                    'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                    'hover:bg-gray-700 hover:text-white'
                  )}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

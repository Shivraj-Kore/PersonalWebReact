  import { Disclosure } from '@headlessui/react';
  import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
  import { Link } from 'react-scroll';
  import ph1 from '../assets/ph1.jpeg'
  import { useState , useEffect } from 'react';
  import ParticleBGHomePage from '../components/ParticleBGHomePage';
  import ParticleBG from '../components/ParticleBG';
  import sun from "../assets/sun.png"
  import moon from "../assets/moon.png"
  import myphoto from "../assets/myphoto.jpg"
  import { useTypewriter, Cursor } from 'react-simple-typewriter'
  import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  export default function SinglePage() {
    const [changecolor, setChangecolor] = useState(false);
    const [icon, setIcon] = useState(true);

    const handleClick = () => {
      setChangecolor(!changecolor);
      setIcon(!icon);
    };

    const [typewritertext] = useTypewriter({
      words: ['Full-Stack', 'Data science' ,'Programmer', 'Engineer', 'AI/ML'],
      loop: 0,
      // onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    // {`bg-opacity-25 ${changecolor ? 'bg-[#00FF75]' : 'bg-[#FF008A]'}`}
    return (
      <>
      <ParticleBGHomePage/>
      <div className='fixed top-0 w-full z-50'>
      <Disclosure as="nav" className={`${changecolor ? 'bg-[#ffffff] bg-opacity-40' : 'bg-[#000000] bg-opacity-75'}`}>
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
                          <Link  to="home"
                            smooth={true}
                            duration={500}
                            className={classNames(
                              'rounded px-3 py-2 font-medium',
                              'hover:text-[#a78bfa]/100 text-[#8A00FF]/100'
                            )}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link  to="about"
                            smooth={true}
                            duration={500}
                            className={classNames(
                              'rounded px-3 py-2 font-medium',
                              'hover:text-[#a78bfa]/100 text-[#8A00FF]/100'
                            )}>
                            About Me
                          </Link>
                        </li>
                        <li>
                          <Link  to="myskills"
                            smooth={true}
                            duration={500}
                            className={classNames(
                              'rounded px-3 py-2 font-medium',
                              'hover:text-[#a78bfa]/100 text-[#8A00FF]/100'
                            )}>
                            My Skills 
                          </Link>
                        </li>
                        <li>
                          <Link  to="projects"
                            smooth={true}
                            duration={500}
                            className={classNames(
                              'rounded px-3 py-2 font-medium',
                              'hover:text-[#a78bfa]/100 text-[#8A00FF]/100'
                            )}>
                            My Projects 
                          </Link>
                        </li>
                        <li>
                          <Link  to="contact"
                            smooth={true}
                            duration={500}
                            className={classNames(
                              'rounded px-3 py-2 font-medium',
                              'hover:text-[#a78bfa]/100 text-[#8A00FF]/100'
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
                  <Disclosure.Button className={`relative inline-flex items-center justify-center rounded p-2 
                                                ${changecolor ? 'text-[#a4a4a4]' : 'text-[#ffffff]'}`}>
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
                    <Link to="home" smooth={true} duration={500} onClick={() => close()} className={classNames(
                      'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                      'hover:bg-gray-700 hover:text-white'
                    )}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="about" smooth={true} duration={500} onClick={() => close()} className={classNames(
                      'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                      'hover:bg-gray-700 hover:text-white'
                    )}>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link to="myskills" smooth={true} duration={500} onClick={() => close()} className={classNames(
                      'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                      'hover:bg-gray-700 hover:text-white'
                    )}>
                      My Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="projects" smooth={true} duration={500} onClick={() => close()} className={classNames(
                      'block rounded px-3 py-2 text-base font-medium text-[#ffffff]',
                      'hover:bg-gray-700 hover:text-white'
                    )}>
                      My Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" smooth={true} duration={500} onClick={() => close()} className={classNames(
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
      </div>
      <div id="home" className={`${changecolor ? 'bg-[#a4a4a4] bg-opacity-50' : 'bg-[#000000] bg-opacity-65'}`}>
        <div className={`mt-[64px] lgmt-[0px] h-screen ${changecolor ? 'bg-[#ffffff] bg-opacity-10 ' : 'bg-[#000000] bg-opacity-10'} text-[#ffffff] pt-8 gap-5 lg:gap-0 rounded shadow-lg flex flex-col lg:flex-row`}>
            <div className="md:w-1/2 lg:order-1 order-2 flex justify-center items-center ">
              <img
                className="w-[300px] h-[600px] object-cover"
                src={ph1}
                alt="placeholder"
              />
            </div>
            <div className="md:w-1/2 lg:order-2 order-1 flex flex-col justify-center items-center ">
              <div className='flex flex-col justify-center items-center'>
                <h1 className={`text-5xl font-bold ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]/90'}`}>SHIVRAJ</h1>
                <h1 className={`text-5xl font-bold ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]/90'}`}>KORE</h1>
              </div>
              <div className='text-5xl font-bold'>
                <span className='text-[#FF00E5] text-opacity-50'>{typewritertext}</span>
                <Cursor cursorColor='#FF00E5' />
              </div>
              <div className={`text-3xl flex gap-5 p-8 ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                <a href="https://www.github.com/shivraj-kore"><BsGithub/></a>
                <a href="https://www.linkedin.com/in/shivraj-kore/"><BsLinkedin/></a>
                <a href="https://www.instagram.com/stev3raj/"><BsInstagram/></a>
              </div>
            </div>
        </div>
      </div>
      <div id='about'>

      </div>
        </>
    );
  }

  import { Disclosure } from '@headlessui/react';
  import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
  import { Link } from 'react-scroll';
  import ph1 from '../assets/ph1.jpeg'
  import ph2 from '../assets/ph2.png'
  import { useState , useEffect } from 'react';
  import ParticleBGHomePage from '../components/ParticleBGHomePage';
  import sun from "../assets/sun.png"
  import moon from "../assets/moon.png"
  import { useTypewriter, Cursor } from 'react-simple-typewriter'
  import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
  import { DiPython , DiJava , DiDjango , DiReact} from "react-icons/di";
  import { SiCplusplus , SiJavascript , SiTailwindcss , SiKeras , SiNumpy , SiPandas , SiTensorflow , SiPytorch , SiScikitlearn , SiGmail } from "react-icons/si";

  import cartzilla from '../assets/projectImages/cartzilla.png'
  import KiddosBenchmark from '../assets/projectImages/KiddosBenchmark.png'
  import personalwebimg from '../assets/projectImages/personalwebimg.png'
  import chaitanyawebimg from '../assets/projectImages/chaitanyawebimg.png'
  import store from '../assets/projectImages/store.png'
  import recommendationSystem from '../assets/projectImages/recommendationSystem.png'

  export default function SinglePage() {
    const [changecolor, setChangecolor] = useState(true);
    const [icon, setIcon] = useState(false);

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
      <Disclosure as="nav" className={`${changecolor ? 'bg-[#ffffff] bg-opacity-70' : 'bg-[#000000] bg-opacity-85'}`}>
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
                            offset={-70}
                            className={`rounded px-3 py-2 font-medium cursor-pointer hover:text-[#a78bfa]/100 text-[#8A00FF]/100`}>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link  to="about"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className={`rounded px-3 py-2 font-medium cursor-pointer hover:text-[#a78bfa]/100 text-[#8A00FF]/100`}>
                            About Me
                          </Link>
                        </li>
                        <li>
                          <Link  to="myskills"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className={`rounded px-3 py-2 font-medium cursor-pointer hover:text-[#a78bfa]/100 text-[#8A00FF]/100`}>
                            My Skills 
                          </Link>
                        </li>
                        <li>
                          <Link  to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className={`rounded px-3 py-2 font-medium cursor-pointer hover:text-[#a78bfa]/100 text-[#8A00FF]/100`}>
                            My Projects 
                          </Link>
                        </li>
                        <li>
                          <Link  to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className={`rounded px-3 py-2 font-medium cursor-pointer hover:text-[#a78bfa]/100 text-[#8A00FF]/100`}>
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
                <ul className="space-y-1 px-2 pb-3 pt-2 hover:text-[#a78bfa]/100  text-[#8A00FF]/100 rounded">
                  <li>
                    <Link to="home" smooth={true} duration={500} offset={-70} onClick={() => close()} 
                          className={`block rounded px-3 py-2  font-bold ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="about" smooth={true} duration={500} offset={-70} onClick={() => close()} 
                          className={`block rounded px-3 py-2  font-bold ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link to="myskills" smooth={true} duration={500} offset={-70} onClick={() => close()} 
                          className={`block rounded px-3 py-2   font-bold ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                      My Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="projects" smooth={true} duration={500} offset={-70} onClick={() => close()} 
                          className={`block rounded px-3 py-2   font-bold ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                      My Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" smooth={true} duration={500} offset={-70} onClick={() => close()} 
                          className={`block rounded px-3 py-2   font-bold ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
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

      
      <div id="home" className={` ${changecolor ? 'bg-[#a4a4a4] bg-opacity-50' : 'bg-[#000000] bg-opacity-75'}`}>
        <div className={`mt-[64px] pb-[32px] text-[#ffffff] pt-8 gap-5 lg:gap-0 rounded flex flex-col lg:flex-row`}>
            <div className="md:w-1/2 lg:order-1 order-2 flex justify-center items-center ">
              <img
                className="w-[300px] h-[400px] object-cover"
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



      <div id='about' className={`p-4 ${changecolor ? 'bg-[#a4a4a4] bg-opacity-50' : 'bg-[#000000] bg-opacity-75'}`}>
        <div className='lg:flex-row flex flex-col justify-center items-center'>
          <div className='basis-1/2 flex justify-center items-center'>
            <h1 className='font-bold text-4xl text-[#8A00FF] m-2'>About Me </h1>
          </div>
          <div  className='basis-1/2 flex flex-col justify-center items-center'>
              <p className={`flex justify-center items-center font-bold text-2xl ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                Hi, Im a Fullstack Developer and an Ai/Ml enthusiast from Maharashtra , India. 
              </p>
            <br />
              <ul className={` list-disc flex flex-col justify-center items-center text-xl ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                  <div className={`pl-6 flex flex-col justify-center items-center `} >
                    <li className='list-disc p-1'>
                      I'm a fullstack developer specialised in frontend using React and backend using Django.
                    </li>
                    <li className='list-disc p-1'>
                      I have build machine learning models in Tensorflow and am currently learning PyTorch .
                    </li>
                    <li className='list-disc p-1'>
                      I'm a also good at using open cv (cv2) python library to use per-built machine learning models for custom use cases.
                    </li>
                  </div>
              </ul>
          </div>
        </div>
      </div>



      <div id='myskills' className={`p-4 ${changecolor ? 'bg-[#a4a4a4] bg-opacity-50' : 'bg-[#000000] bg-opacity-75'}`}>
        <div className='lg:flex-row flex flex-col justify-center items-center'>
          <div className='basis-1/2 lg:order-2 flex justify-center items-center'>
            <h1 className='font-bold text-4xl text-[#8A00FF] m-2'>My Skills</h1>
          </div>
          <div  className='basis-1/2 lg:order-1 flex flex-col justify-center items-center'>
              <p className={`flex justify-center items-center font-bold text-2xl ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                Languages : 
              </p>
              {/* transition ease hover:scale-[1.2] */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 justify-center items-center mt-5`} >
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiCplusplus/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <DiPython/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiJavascript/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <DiJava/>
              </div>
            </div>


            <p className={`flex justify-center items-center font-bold text-2xl ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                Frameworks and libraries : 
              </p>
              <div className={`grid grid-cols-2 lg:grid-cols-4 justify-center items-center mt-5`} >
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <DiDjango/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <DiReact/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiTailwindcss/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiTensorflow/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiPytorch/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiNumpy/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiPandas/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiScikitlearn/>
              </div>
              <div className={`m-2 text-[70px] rounded bg-[#8A00FF]/10 flex gap-5 p-8 flex justify-center items-center 
                              ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'} transition ease hover:scale-[1.2] `}>
                      <SiKeras/>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id='projects' className={`p-4 ${changecolor ? 'bg-[#a4a4a4] bg-opacity-50' : 'bg-[#000000] bg-opacity-75'}`}>
        <div className='lg:flex-row flex flex-col justify-center items-center'>
          <div className='basis-2/6 flex justify-center items-center'>
            <h1 className='font-bold text-4xl text-[#8A00FF] m-2'>My Projects</h1>
          </div>
          <div  className='basis-4/6 flex flex-col justify-center items-center'>
              <div className='grid grid-cols-1 lg:grid-cols-2 text-xl font-bold'>
                    <div className={`rounded m-2 flex flex-col justify-center items-center ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'} shadow-lg shadow-[#8A00FF]/20`}>
                      <a className='flex flex-col justify-center items-center ' href="http://cstkids.vidnyanubhav.com/">
                        <img src={KiddosBenchmark} alt="Projects here" className='rounded' />
                        <h1 className='p-2'>Kiddos Benchmark</h1>
                      </a>
                    </div>
                    <div className={`rounded m-2 flex flex-col justify-center items-center ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'} shadow-lg shadow-[#8A00FF]/20`}>
                      <a className='flex flex-col justify-center items-center ' href="https://github.com/Shivraj-Kore/Cartzilla-project/blob/main/README.md">
                        <img src={cartzilla} alt="Projects here" className='rounded' />
                        <h1 className='p-2'>Cartzilla</h1>
                      </a>
                    </div>
                    <div className={`rounded m-2 flex flex-col justify-center items-center ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'} shadow-lg shadow-[#8A00FF]/20`}>
                      <a className='flex flex-col justify-center items-center ' href="#">
                        <img src={personalwebimg} alt="Projects here" className='rounded' />
                        <h1 className='p-2'>Personal Website</h1>
                      </a>
                    </div>
                    <div className={`rounded m-2 flex flex-col justify-center items-center ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'} shadow-lg shadow-[#8A00FF]/20`}>
                      <a className='flex flex-col justify-center items-center ' href="https://github.com/Shivraj-Kore/Ecommerse/blob/main/Readme.md">
                        <img src={store} alt="Projects here" className='rounded' />
                        <h1 className='p-2'>Ecommerce wrbsite</h1>
                      </a>
                    </div>
                    <div className={`rounded m-2 flex flex-col justify-center items-center ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'} shadow-lg shadow-[#8A00FF]/20`}>
                      <a className='flex flex-col justify-center items-center ' href="#">
                        <img src={chaitanyawebimg} alt="Projects here" className='rounded' />
                        <h1 className='p-2'>Company website</h1>
                      </a>
                    </div>
                    <div className={`rounded m-2 flex flex-col justify-center items-center ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'} shadow-lg shadow-[#8A00FF]/20`}>
                      <a className='flex flex-col justify-center items-center ' href="https://github.com/Shivraj-Kore/Recommendation-system/blob/main/Readme.md">
                        <img src={recommendationSystem} alt="Projects here" className='rounded' />
                        <h1 className='p-2'>Movie Recommendation System</h1>
                      </a>
                    </div>

              </div>
          </div>
        </div>
      </div>


      <div id='contact' className={`p-4 ${changecolor ? 'bg-[#a4a4a4] bg-opacity-50' : 'bg-[#000000] bg-opacity-75'}`}>
        <div className='lg:flex-row flex flex-col justify-center items-center'>
          <div className='basis-1/2 lg:order-2  flex justify-center items-center'>
            <h1 className='font-bold text-4xl text-[#8A00FF] m-2'>Contact </h1>
          </div>
          <div  className='basis-1/2 flex flex-col justify-center items-center'>

            <br />
              <div className={`flex flex-col justify-center items-start text-xl ${changecolor ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                    <a href="https://instagram.com/stev3raj">
                    <div className={`flex justify-center items-center ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                        <div className={`text-5xl flex  justify-center items-center gap-5 ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                          <BsInstagram/>
                        </div>
                        <h1 className={`text-3xl font-bold flex pb-[10px] justify-center items-center gap-5 ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                           - @Stev3raj
                        </h1>
                    </div>
                    </a>
                    <br />
                    <div className={`flex justify-center items-center ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                        <div className={`text-5xl flex  justify-center items-center gap-5 ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                          <SiGmail/>
                        </div>
                        <h1 className={`text-xl font-bold flex pb-[3px] justify-center items-center gap-5 ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                           - kore.shivraj2003@gmail.com
                        </h1>
                    </div>
                    <br />
                    <a href="https://linkedin.com/in/shivraj-kore">
                    <div className={`flex justify-center items-center ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                        <div className={`text-5xl flex  justify-center items-center gap-5 ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                          <BsLinkedin/>
                        </div>
                        <h1 className={`text-xl font-bold flex pb-[3px] justify-center items-center gap-5 ${changecolor ? 'text-[#000000]/80' : 'text-[#ffffff]'}`}>
                           - linkedin.com/in/shivraj-kore
                        </h1>
                      </div>
                      </a>
              </div>
          </div>
        </div>
      </div>
      </>
    );
  }

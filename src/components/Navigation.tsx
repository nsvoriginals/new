import { Link } from 'react-scroll';

export default function Navigation() {
  return (
    <div className="fixed inset-0 bg-[#0E0E10] flex flex-col items-center justify-center gap-10 font-Geist">
      {/* Container with constrained width */}
      <div className="w-[600px] flex flex-col items-center gap-10"> {/* Adjust width as needed */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="w-full text-8xl text-white hover:bg-white hover:text-[#0E0E10] px-5 py-4 rounded-full transition-all duration-300 cursor-pointer text-center"
        >
          Home
        </Link>
        
        <Link 
          to="skills" 
          smooth={true} 
          duration={500}
          className="w-full text-8xl text-white hover:bg-white hover:text-[#0E0E10] px-5 py-4 rounded-full transition-all duration-300 cursor-pointer text-center"
        >
          Skills
        </Link>
        
        <Link 
          to="projects" 
          smooth={true} 
          duration={500}
          className="w-full text-8xl text-white hover:bg-white hover:text-[#0E0E10] px-5 py-4 rounded-full transition-all duration-300 cursor-pointer text-center"
        >
          Projects
        </Link>
        
        <Link 
          to="resume" 
          smooth={true} 
          duration={500}
          className="w-full text-8xl text-white hover:bg-white hover:text-[#0E0E10] px-5 py-4 rounded-full transition-all duration-300 cursor-pointer text-center"
        >
          Resume
        </Link>
        <div className='w-screen px-10 b-0 flex items-center justify-between  gap-10 text-white  '>
        <h1>HYDERABAD</h1>
        <div className='flex items-center justify-center gap-4'>
          <h1>TWITTER</h1>
          <h1>GITHUB</h1>
          <h1>LINKEDIN</h1>
        </div>
        </div>
      </div>
    </div>
  );
}
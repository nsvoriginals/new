export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 gap-12">
     
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl leading-relaxed">
          Hi, I'm <span className="text-red-500 font-medium">@nsvoriginals</span>. 
          A Computer Science Undergrad diving into WEB3 and Full-Stack Development.
        </h1>
      </div>

      <div className="relative group w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 bg-red-500 rounded-full transform group-hover:rotate-6 transition-all duration-500"></div>
        <img 
          className="relative border-2 border-black rounded-md object-cover w-full h-full transform group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500"
          src="https://pbs.twimg.com/profile_images/1817868182771859456/szpx-B8z_400x400.jpg" 
          alt="Profile picture" 
        />
      </div>
    </div>
  );
}
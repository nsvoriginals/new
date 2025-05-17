import { useState } from 'react';
import { Github, BookOpen, Home, Code2, Twitter, Linkedin } from 'lucide-react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaBriefcase,
} from 'react-icons/fa';
import { DiRedis } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiKubernetes,
  SiSocketdotio,
  SiRedis,
  SiApachekafka,
  SiGrafana,
  SiPrometheus,
  SiRust,
  SiSolana,
  SiEthereum,
  SiNextdotjs,
  SiVim,
  SiReact,
  SiSolidity,
} from 'react-icons/si';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-black text-white min-h-screen font-mono p-8 pb-24">
      
      <div className="max-w-3xl mx-auto">
      
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-800">
              <img 
                src="https://pbs.twimg.com/profile_images/1817868182771859456/szpx-B8z_400x400.jpg" 
                alt="Sheshi Vardhan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sheshi Vardhan
              </h1>
              <p className="text-gray-400 mt-2">భయం వదులు గెలిచి చూడు</p>
              <p className="text-gray-400">webdev - blockchain - android</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            I'm a developer building <span className="text-blue-400 font-medium">meaningful digital experiences</span> through{' '}
            <span className="text-red-400 font-medium">clean code</span>,{' '}
            <span className="text-green-400 font-medium">smart design</span>, and{' '}
            <span className="text-purple-400 font-medium">real-world problem solving</span>.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-300">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: <FaHtml5 className="w-8 h-8" />, color: "text-orange-600", name: "HTML5" },
              { icon: <FaCss3Alt className="w-8 h-8" />, color: "text-blue-600", name: "CSS3" },
              { icon: <SiJavascript className="w-8 h-8" />, color: "text-yellow-400", name: "JavaScript" },
              { icon: <SiTypescript className="w-8 h-8" />, color: "text-blue-500", name: "TypeScript" },
              { icon: <FaReact className="w-8 h-8" />, color: "text-cyan-400", name: "React" },
              { icon: <SiReact className="w-8 h-8" />, color: "text-cyan-400", name: "React Native" },
              { icon: <SiNextdotjs className="w-8 h-8" />, color: "text-gray-300", name: "Next.js" },
              { icon: <SiTailwindcss className="w-8 h-8" />, color: "text-teal-400", name: "Tailwind CSS" },
              { icon: <FaBootstrap className="w-8 h-8" />, color: "text-purple-500", name: "Bootstrap" },
              { icon: <FaGithub className="w-8 h-8" />, color: "text-gray-300", name: "GitHub" },
              { icon: <FaGitAlt className="w-8 h-8" />, color: "text-orange-500", name: "Git" },
              { icon: <FaNodeJs className="w-8 h-8" />, color: "text-green-500", name: "Node.js" },
              { icon: <SiExpress className="w-8 h-8" />, color: "text-gray-300", name: "Express" },
              { icon: <SiMongodb className="w-8 h-8" />, color: "text-green-600", name: "MongoDB" },
              { icon: <SiPostgresql className="w-8 h-8" />, color: "text-blue-800", name: "PostgreSQL" },
              { icon: <SiFirebase className="w-8 h-8" />, color: "text-yellow-500", name: "Firebase" },
              { icon: <FaDocker className="w-8 h-8" />, color: "text-blue-500", name: "Docker" },
              { icon: <SiKubernetes className="w-8 h-8" />, color: "text-blue-600", name: "Kubernetes" },
              { icon: <FaAws className="w-8 h-8" />, color: "text-orange-400", name: "AWS" },
              { icon: <FaLinux className="w-8 h-8" />, color: "text-gray-500", name: "Linux" },
              { icon: <SiSocketdotio className="w-8 h-8" />, color: "text-gray-400", name: "Socket.io" },
              { icon: <DiRedis className="w-8 h-8" />, color: "text-red-600", name: "Redis" },
              { icon: <SiApachekafka className="w-8 h-8" />, color: "text-blue-300", name: "Kafka" },
              { icon: <SiGrafana className="w-8 h-8" />, color: "text-orange-500", name: "Grafana" },
              { icon: <SiPrometheus className="w-8 h-8" />, color: "text-orange-700", name: "Prometheus" },
              { icon: <SiRust className="w-8 h-8" />, color: "text-orange-700", name: "Rust" },
              { icon: <SiSolana className="w-8 h-8" />, color: "text-green-400", name: "Solana" },
              { icon: <SiEthereum className="w-8 h-8" />, color: "text-purple-600", name: "Ethereum" },
              { icon: <SiSolidity className="w-8 h-8" />, color: "text-gray-300", name: "Solidity" },
              { icon: <FaBriefcase className="w-8 h-8" />, color: "text-blue-500", name: "Backpack" },
              { icon: <SiVim className="w-8 h-8" />, color: "text-green-700", name: "Vim" },
            ].map((skill, index) => (
              <div key={index} className={`${skill.color} group relative`}>
                {skill.icon}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>

  
        <div className="mb-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 border border-gray-700 rounded px-4 py-2 hover:bg-gray-800 transition-colors bg-gray-900 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-lg">📄</span> View Resume
          </a>
        </div>

    
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-300">Projects</h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Oasis",
                description: "A metaverse application designed for seamless virtual collaborations.",
                tech: "React, Phaser.js, Web3, Node.js, WebSockets, WebRTC",
                link: "https://oasisclient.vercel.app/" 
              },
              {
                title: "PocketSwap",
                description: "A monetary simulation platform to explore financial concepts interactively.",
                tech: "TypeScript, React, NextJS, PostgreSQL",
                link: "https://pocketswap.vercel.app/"
              },
              {
                title: "stash",
                description: "A productivity tool designed to share and organize contents like videos, links, images, and notes.",
                tech: "Next.js, Tailwind CSS, PostgreSQL",
                link: "https://github.com/nsvoriginals/stash" 
              }
            ].map((project, index) => (
              <div key={index} className="border-b border-gray-800 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500">Tech: {project.tech}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
          
          <button className="mt-6 text-blue-400 hover:text-blue-300 transition-colors">
            View all projects →
          </button>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-300">Hobbies & Interests</h2>
          <ul className="space-y-3">
            {[
              { icon: "♟️", name: "Chess", description: "Strategic thinking and focus" },
              { icon: "📚", name: "Reading Books", description: "Exploring ideas, biographies, and tech stories" },
              { icon: "🌍", name: "Travelling", description: "Experiencing new places, cultures, and perspectives" },
              { icon: "🎸", name: "Playing Guitar", description: "Creativity and emotional expression through music" },
              { icon: "🧠", name: "Solving Puzzles", description: "Improving logic and mental clarity" }
            ].map((hobby, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-xl">{hobby.icon}</span>
                <div>
                  <span className="text-white font-medium">{hobby.name}</span>
                  <span className="text-gray-400"> – {hobby.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

      
        <footer className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-300">Get In Touch</h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { 
                name: "Twitter", 
                icon: <Twitter size={18} />, 
                url: "https://x.com/SheshiVardhan34",
                color: "hover:bg-blue-500/10 hover:text-blue-400"
              },
              { 
                name: "GitHub", 
                icon: <Github size={18} />, 
                url: "https://github.com/nsvoriginals",
                color: "hover:bg-gray-500/10 hover:text-gray-400"
              },
              { 
                name: "LinkedIn", 
                icon: <Linkedin size={18} />, 
                url: "https://www.linkedin.com/in/sheshivardhan34/",
                color: "hover:bg-blue-600/10 hover:text-blue-500"
              }
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                className={`flex items-center gap-2 border border-gray-800 rounded px-4 py-2 transition-colors ${platform.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.icon}
                {platform.name}
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Designed with <span className="text-red-500">❤</span> by nsvoriginals
          </div>
        </footer>
      </div>

    </div>
  );
}
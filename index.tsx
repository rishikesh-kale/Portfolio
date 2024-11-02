import React, { useState } from 'react';
import { Moon, Sun, Code, Book, Briefcase, User, Mail, Phone, Globe, Terminal, 
         FileText, Home, Layers } from 'lucide-react';

const getNeonColor = (darkMode, color) => {
  const colors = {
    blue: darkMode ? 'shadow-[0_0_35px_#4299e1]' : 'shadow-[0_0_15px_#4299e1]',
    purple: darkMode ? 'shadow-[0_0_35px_#9f7aea]' : 'shadow-[0_0_15px_#9f7aea]',
    pink: darkMode ? 'shadow-[0_0_35px_#ed64a6]' : 'shadow-[0_0_15px_#ed64a6]',
  };
  return colors[color] || colors.blue;
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const skills = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="w-6 h-6" />,
      items: ['Java', 'Python', 'C++']
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      items: ['HTML/CSS', 'JavaScript', 'React']
    },
    {
      title: 'Tools & Technologies',
      icon: <Code className="w-6 h-6" />,
      items: ['AWS', 'DevOps', 'Linux']
    }
  ];

  const projects = [
    {
      title: 'Data Analysis and Visualization',
      description: 'Comprehensive data analysis project using Python, implementing various visualization techniques and statistical analysis methods.',
      icon: <Terminal className="w-6 h-6" />,
      technologies: ['Python', 'Pandas', 'Matplotlib']
    },
    {
      title: 'Data Science Blog',
      description: 'Technical blog focusing on Data Science and Analytics topics with regular posts about machine learning algorithms.',
      icon: <Book className="w-6 h-6" />,
      technologies: ['Technical Writing', 'Data Science']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${getNeonColor(darkMode, 'blue')}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Rishikesh Kale</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActivePage('home')}
                className={`p-2 rounded-lg transition-colors duration-200 ${activePage === 'home' ? 'bg-blue-500 text-white' : ''}`}
              >
                <Home className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActivePage('skills')}
                className={`p-2 rounded-lg transition-colors duration-200 ${activePage === 'skills' ? 'bg-blue-500 text-white' : ''}`}
              >
                <Layers className="w-5 h-5" />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-6">
        {activePage === 'home' && (
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className={`inline-block p-4 rounded-full mb-6 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} ${getNeonColor(darkMode, 'blue')}`}>
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Computer Science Professional</h2>
              <p className="text-xl mb-8">MCA Graduate | Full Stack Developer | Data Analytics Enthusiast</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:rishi.kale.01@gmail.com"
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg 
                  ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} 
                  text-white hover:scale-105 transition-transform duration-200 
                  ${getNeonColor(darkMode, 'blue')}`}
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </a>
                <button
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg 
                  border-2 border-blue-500 hover:scale-105 
                  transition-transform duration-200 ${getNeonColor(darkMode, 'blue')}`}
                >
                  <FileText className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activePage === 'skills' && (
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} 
                  ${getNeonColor(darkMode, 'purple')} hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`mr-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{skill.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`py-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto text-center">
          <p>© 2024 Rishikesh Kale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

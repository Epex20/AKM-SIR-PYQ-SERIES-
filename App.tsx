
import React from 'react';

interface Link {
  href: string;
  text: string;
}

interface LinkSection {
  title: string;
  links: Link[];
}

const linkData: LinkSection[] = [
  {
    title: 'Mole Concept',
    links: [
      { href: 'https://unacademy.com/course/pyq-jstar-series-mole-concept/FPRU1RH3', text: 'Start - Mole Concept' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-mole-concept/Y9QCER4B', text: 'Continue - Mole Concept' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-chemical-kinetics/BYGE8X4U', text: 'End - Mole Concept' },
    ],
  },
  {
    title: 'Atomic Structure',
    links: [{ href: 'https://unacademy.com/class/pyq-jstar-series-atomic-structure/11267ZWJ', text: 'PYQ - Atomic Structure' }],
  },
  {
    title: 'Chemical Equilibrium',
    links: [
      { href: 'https://unacademy.com/class/pyq-jstar-series-chemical-equilibrium/OTBTTJYW', text: 'Questions 1-10' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-chemical-equilibrium/PH00C0DO', text: 'Questions 11-18' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-chemical-equilibrium-776/C2F1B49', text: 'Questions 19-27' },
    ],
  },
  {
    title: 'Chemical Equilibrium 2',
    links: [
      { href: 'https://unacademy.com/class/pyqs-jstar-series-chemical-equilibrium-i/B6BTWUK5', text: 'Questions 1-13' },
      { href: 'https://unacademy.com/class/pyqs-jstar-series-chemical-equilibrium-ii/LIQKXA37', text: 'Questions 14-31' },
    ],
  },
  {
    title: 'Thermodynamics',
    links: [
      { href: 'https://unacademy.app.link/DAhscD15Mtb', text: 'Questions 1-7' },
      { href: 'https://unacademy.com/class/module-discussion-part-i/7RNIFBZ3', text: 'Questions 8-21' },
      { href: 'https://unacademy.com/class/module-discussion-part-ii/ESQ2Z46Z', text: 'Questions 22-39' },
    ],
  },
  {
    title: 'Ionic Equilibrium',
    links: [
      { href: 'https://unacademy.com/class/pyq-jstar-series-ionic-equilibrium-200/6VOCNHDQ', text: 'Part 1 - Ionic Equilibrium' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-ionic-equilibrium-ii/WUU84NMS', text: 'Part 2 - Ionic Equilibrium' },
      { href: 'https://unacademy.com/course/pyq-jstar-series-solution/U0L2ZRT5', text: 'Part 3 - Ionic Equilibrium' },
    ],
  },
  {
    title: 'Redox Reactions',
    links: [{ href: 'https://unacademy.com/class/pyq-jstar-series-redox-reaction-453/1F8EKTSE', text: 'PYQ - Redox Reactions' }],
  },
  {
    title: 'Solutions',
    links: [
      { href: 'https://unacademy.com/class/pyq-jstar-series-solutions/EANC670M', text: 'Start - Solutions' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-solutions-847/2EA5JXAE', text: 'Second Lesson - Solutions' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-solutions/SFRKFMRO', text: 'Questions 9-16' },
      { href: 'https://unacademy.com/class/pyqs-jstar-series-solutions/ALW4DGEN', text: 'Questions 17-25' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-solution/W3LG7VUE', text: 'Questions 26-33' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-solid-state/HUYH0G3R', text: 'Questions 34-39' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-solutions/YTOUM8D7', text: 'Questions 40-42' },
    ],
  },
  {
    title: 'Electrochemistry',
    links: [
      { href: 'https://unacademy.com/course/pyq-jstar-series-electrochemistry/SNRJFGA8', text: 'Part 1 - Electrochemistry' },
      { href: 'https://unacademy.com/course/pyq-jstar-series-electrochemistry-ii/IKKXIIPI', text: 'Part 2 - Electrochemistry' },
    ],
  },
  {
    title: 'Chemical Kinetics',
    links: [
      { href: 'https://unacademy.com/class/pyq-jstar-series-chemical-kinetics/BYGE8X4U', text: 'Questions 1-12' },
      { href: 'https://unacademy.com/class/pyqs-jstar-series-chemical-kinetics/CHUCOY49', text: 'Questions 12-25' },
      { href: 'https://unacademy.com/class/pyq-jstar-series-chemical-kinetics/F3L0KEHW', text: 'Questions 26-36' },
      { href: 'https://unacademy.com/class/pyqs-jstar-series-chemical-kinetics/ZGB5YVJN', text: 'End - Chemical Kinetics' },
    ],
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100 flex flex-col items-center justify-start py-10 px-4">
      
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">PYQ JSTAR Series Links</h1>
        <p className="text-lg text-gray-400">
          Arranged by AYUSH | 
          <a 
            href="https://telegram.dog/IMAYUU03" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-violet-400 hover:text-violet-300 transition-colors ml-2"
          >
            TELEGRAM @IMAYUU03 <i className="fab fa-telegram ml-1"></i>
          </a>
        </p>
      </header>
      
      <main className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {linkData.map((section, index) => (
          <section key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col">
            <h2 className="text-2xl font-bold text-violet-400 mb-5 border-b-2 border-gray-700 pb-3">
              {section.title}
            </h2>
            <div className="flex flex-col space-y-3">
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-4 bg-gray-700 text-gray-200 font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:bg-violet-600 hover:text-white hover:-translate-y-1"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default App;

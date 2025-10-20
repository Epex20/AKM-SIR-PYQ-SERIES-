import React, { useState, useMemo } from 'react';

// --- Data for PYQ JSTAR Series ---
interface PyqLink {
  href: string;
  text: string;
}

interface PyqSection {
  title: string;
  links: PyqLink[];
}

const pyqLinkData: PyqSection[] = [
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


// --- Data for AKM SIR Module Discussion ---
interface AkmLink {
  text: string;
  url: string;
}

interface AkmChapter {
  id: string;
  title: string;
  links: AkmLink[];
}

const akmSirData: AkmChapter[] = [
  {
    id: 'mole-concept',
    title: 'Mole Concept',
    links: [
      { text: 'From Ques. 1 to 15', url: 'https://unacademy.app.link/8TKTVArmhzb' },
      { text: 'From Ques. 15 to 41', url: 'https://unacademy.com/class/module-discussion-i/MF8WKVAX' },
      { text: 'From Ques. 41 to 61', url: 'https://unacademy.com/class/module-discussion-ii/HXBCEN9Z' },
      { text: 'From Ques. 62 to 71', url: 'https://unacademy.com/class/module-discussion/L3Z4HZ5B' },
      { text: 'From Ques. 72 to 90', url: 'https://unacademy.com/class/doubt-clearing-session/NHZHH8K4' },
      { text: 'From Ques. 91 to 103', url: 'https://unacademy.com/class/module-discussion-mole-concept-i/R0EWGXHR' },
      { text: 'From Ques. 103 to 118', url: 'https://unacademy.com/class/module-discussion-mole-concept-ii/4N9RRY5O' },
      { text: 'From Ques. 119 to Last', url: 'https://unacademy.com/class/doubt-clearing-session/N18LZG5K' }
    ]
  },
  {
    id: 'atomic-structure',
    title: 'Atomic Structure',
    links: [
      { text: 'Question 1 to 11', url: 'https://unacademy.com/class/doubt-clearing-session/9O6OUBHK' },
      { text: 'Question 12 to 30', url: 'https://unacademy.com/class/module-discussion-mole-concept/B34X537A' },
      { text: 'Question 31 to 85', url: 'https://unacademy.com/course/module-discussion-jstar-series-2023/ASBJBNVP' },
      { text: 'Question 86 to 180', url: 'https://unacademy.com/course/module-discussion-jstar-series-atomic-structure/K748UA4B' },
      { text: 'Part 1', url: 'https://unacademy.com/course/module-discussion-jstar-series-atomic-structure/K748UA4B' },
      { text: 'Part 2', url: 'https://unacademy.com/course/module-discussion-jstar-series-2023/ASBJBNVP' },
      { text: 'Part 3', url: 'https://unacademy.app.link/Ivu0D0k0grb' }
    ]
  },
  {
    id: 'chemical-equilibrium',
    title: 'Chemical Equilibrium',
    links: [
      { text: 'Question 1 to 29', url: 'https://unacademy.com/class/module-discussion-iii/B8FOZN2Z' },
      { text: 'Question 30 to Last', url: 'https://unacademy.com/course/module-discussion-jstar-series/ITRNUJI3' }
    ]
  },
  {
    id: 'thermodynamics',
    title: 'Thermodynamics',
    links: [
      { text: 'Ques 1 to 25', url: 'https://unacademy.com/class/module-discussion-part-iiii/N4Q060PD' },
      { text: 'Ques 25 to 158', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-thermodynamics/0H1L15TI' },
      { text: 'Ques 159 to Last', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-thermodynamics/0H1L15TI' },
      { text: 'Part 1', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-solution-and-thermodynamics/PF9AQD9R' },
      { text: 'Part 2', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-thermodynamics-and-electrochemistry/YL579OPT' },
      { text: 'Part 3', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-thermodynamics/0H1L15TI' }
    ]
  },
  {
    id: 'ionic-equilibrium',
    title: 'Ionic Equilibrium',
    links: [
      { text: 'Open', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-ionic-equilibrium/6M45BE7C' }
    ]
  },
  {
    id: 'redox-reactions',
    title: 'Redox Reactions',
    links: [
      { text: 'Not Yet Discussed', url: '#' }
    ]
  },
  {
    id: 'solutions',
    title: 'Solutions',
    links: [
      { text: 'Ques 1 to 76', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-2022/TTZTV36O' },
      { text: 'Ques 77 to Last', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-solution/R8ZBJVKP' },
      { text: 'PYQs', url: 'https://unacademy.com/class/module-discussion-part-i/7RNIFBZ3' },
      { text: 'Ques Last Lecture', url: 'https://unacademy.com/class/module-discussion-part-i/7RNIFBZ3' }
    ]
  },
  {
    id: 'electrochemistry',
    title: 'Electrochemistry',
    links: [
      { text: 'Question 1 to 4 (01:13:13)', url: 'https://unacademy.com/class/module-discussion-part-iv/6L0FDZES' },
      { text: 'Question 5 to 23', url: 'https://unacademy.com/class/module-discussion-part-v/2AME24U3' },
      { text: 'Question 24 to 43', url: 'https://unacademy.com/class/module-discussion-part-vi/29AR28YQ' },
      { text: 'Question 44 to 59', url: 'https://unacademy.com/class/ionic-equilibrium-part-iv/RJPMGN5U' },
      { text: 'Question 60 to 70', url: 'https://unacademy.com/class/ionic-equilibrium-part-i/LEM21UEJ' },
      { text: 'Question 71 to 84', url: 'https://unacademy.com/class/ionic-equilibrium-part-ii/0FGRJ31L' },
      { text: 'Question 85 to 102', url: 'https://unacademy.com/class/doubt-clearing-session/FG4MD60A' },
      { text: 'Question 102 to 120', url: 'https://unacademy.com/course/course-on-module-discussion-jstar-series-ionic-equilibrium/ZT34ZWGT' }
    ]
  },
  {
    id: 'chemical-kinetics',
    title: 'Chemical Kinetics',
    links: [
      { text: 'Question 1 to 19', url: 'https://unacademy.com/class/module-discussion-chemical-kinetics-i/POQWVIQP' },
      { text: 'Question 20 to 45', url: 'https://unacademy.com/class/doubt-clearing-session/UKR5O2T9' },
      { text: 'Question 46 to 68', url: 'https://unacademy.com/class/module-discussion-chemical-kinetics-ii/BOMWCSDX' },
      { text: 'Question 69 to Last', url: 'https://unacademy.com/class/module-discussion-solution/W6FOWOZD' }
    ]
  }
];

// --- Page Components ---

const NoResults: React.FC = () => (
  <div className="text-center py-10">
    <p className="text-gray-400 text-xl">No topics found matching your search.</p>
  </div>
);


const PyqPage: React.FC<{ data: PyqSection[] }> = ({ data }) => {
  if (data.length === 0) {
    return <NoResults />;
  }
  return (
    <main className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((section, index) => (
        <section key={index} className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg flex flex-col">
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
                className="w-full text-center py-3 px-4 bg-white/10 backdrop-blur-sm text-gray-200 font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:bg-violet-600/80 hover:text-white hover:-translate-y-1"
              >
                {link.text}
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

const AkmSirPage: React.FC<{ data: AkmChapter[] }> = ({ data }) => {
    if (data.length === 0) {
    return <NoResults />;
  }
  return (
    <main className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((chapter) => (
        <section key={chapter.id} className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold text-violet-400 mb-5 border-b-2 border-gray-700 pb-3">
            {chapter.title}
          </h2>
          <div className="flex flex-col space-y-3">
            {chapter.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 px-4 bg-white/10 backdrop-blur-sm text-gray-200 font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform ${link.url === '#' ? 'cursor-not-allowed opacity-50' : 'hover:bg-violet-600/80 hover:text-white hover:-translate-y-1'}`}
              >
                {link.text}
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};


// --- Main App Component ---

type Page = 'pyq' | 'akm';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('pyq');
  const [searchTerm, setSearchTerm] = useState('');

  const navButtonClasses = (page: Page) => 
    `px-6 py-2 text-lg font-semibold rounded-lg transition-colors duration-300 backdrop-blur-sm ${
      currentPage === page 
      ? 'bg-violet-600/80 text-white shadow-lg' 
      : 'bg-white/10 text-gray-300 hover:bg-violet-600/80'
    }`;

  const pageTitles = {
    pyq: 'PYQ JSTAR Series Links',
    akm: 'AKM SIR Module Discussion',
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredPyqData = useMemo(() => 
    pyqLinkData.filter(section =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);
    
  const filteredAkmSirData = useMemo(() =>
    akmSirData.filter(chapter =>
      chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);


  return (
    <>
      <div className="watermark" aria-hidden="true">EPEX</div>
      <div className="min-h-screen w-full text-gray-100 flex flex-col items-center justify-start py-10 px-4 relative z-10">
        
        <header className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{pageTitles[currentPage]}</h1>
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
        
        <nav className="flex space-x-4 mb-6">
          <button onClick={() => setCurrentPage('pyq')} className={navButtonClasses('pyq')}>
            PYQ JSTAR Series
          </button>
          <button onClick={() => setCurrentPage('akm')} className={navButtonClasses('akm')}>
            AKM SIR Module
          </button>
        </nav>

        <div className="w-full max-w-xl mb-10">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm text-gray-200 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-violet-500 transition-colors"
            aria-label="Search topics"
          />
        </div>

        {currentPage === 'pyq' ? <PyqPage data={filteredPyqData} /> : <AkmSirPage data={filteredAkmSirData} />}

      </div>
    </>
  );
};

export default App;

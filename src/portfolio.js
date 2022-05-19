const header = {
  homepage: '#',
  title: 'Ah.',
}

const about = {
  name: 'Ahmad Hamadneh',
  role: 'Software Engineer',
  // description: 'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  social: {
    linkedin: 'https://www.linkedin.com/in/hamadneh/',
    github: 'https://github.com/amjhamadneh',
    leetcode: 'https://leetcode.com/Hamadneh/',
    hackerrank: 'https://www.hackerrank.com/compuWare?hr_r=1'
  },
}

const projects = [
  {
    name: 'Hierarchy Tree',
    description:
      'Developed a page to build a Hierarchy Positions that provide users to build it dynamically and simply, '+  
      'Easier to use and merge with any project that support hierarchy positions',
    stack: ['React', 'Html', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/amjhamadneh/Create-Hierarchy-Tree',
    livePreview: 'https://create-hierarchy-tree.vercel.app/',
  },
  {
    name: 'To-do app',
    description:
      'Created a web application to practice what I learned with Gaza sky Geeks team',
    stack: ['React', 'Html', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/amjhamadneh/Gaza-Sky-Geeks/tree/main/to_do%20app',
    livePreview: 'https://gaza-sky-geeks.vercel.app/about',
  },
  {
    name: 'WorldEye Application',
    description:
      'Developed a web application to upload, share and review images, '+
      'used a Cross-Site Request Forgery and verification link to increase site security, ' +
      'based on Waterfall methodology',
    stack: ['Laravel', 'Html', 'CSS', 'JavaScript', 'AJAX'],
    sourceCode: 'https://github.com/amjhamadneh/Software-Engineering-Course',
    livePreview: 'https://www.youtube.com/watch?v=xTpZMrm-ffk',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'Material UI',
  'Git',
  'Express js',
  'Laravel',
  'Data Mining',
  'AJAX',
  'Axios',
  'PHP',
  'Java',
  'Python',
  'OOP',
  'Data Structures',
  'C',
  'C++',
  'Algorithms',
  'Shell Scripting',
  'Graphic Design',
  'VHDL',
  'Verilog',
  'PL/SQL',
  'SQL',
  'Oracle Database',
  'MySQL',
  'JSON Web Token',
  'Microsoft SQL Server',
  'Powershell',
  'Problem Solving',
  'GitHub'
]

const contact = {
  email: 'a.m.hamadneh99@mail.com',
}

export { header, about, projects, skills, contact }

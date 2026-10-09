/* Dependency-free portfolio interactions. Edit these case studies to update content. */
const projects = {
  resume: {
    title: 'AI Resume Analyzer & Interview Assistant', category: 'AI-powered application',
    problem: 'Resume feedback and interview preparation are often disconnected. This application brings them into one context-aware workflow.',
    implementation: 'Built a React frontend and FastAPI backend with OpenAI API integration and SQLite. The application analyzes resumes, provides ATS-oriented feedback, and generates relevant interview questions.',
    workflow: ['React interface', 'FastAPI backend', 'Resume context + prompts', 'OpenAI API', 'Feedback & questions'],
    decisions: ['Separated the interface from API and AI processing.', 'Used prompt engineering and RAG concepts for context-aware responses.', 'Used SQLite for application data.'],
    limitations: 'AI-generated feedback can be inaccurate and should be reviewed. ATS-oriented suggestions do not guarantee ATS success, interviews, or selection. No independently verified results or live demo are supplied.',
    stack: ['Python', 'FastAPI', 'React', 'OpenAI API', 'SQLite'], repository: null
  },
  inventory: {
    title: 'Full-Stack Product Inventory Management System', category: 'Full-stack development',
    problem: 'Product information and inventory workflows need a consistent interface backed by structured, persistent data.',
    implementation: 'Built a React user interface with Node.js and Express.js backend functionality, REST APIs, and MySQL database integration. The project includes SQL query optimization and Microsoft Azure deployment.',
    workflow: ['React interface', 'REST API', 'Node.js / Express.js', 'MySQL', 'Microsoft Azure'],
    decisions: ['Separated presentation, API functionality, and database responsibilities.', 'Used MySQL for structured product and inventory data.', 'Optimized SQL queries and deployed the application on Azure.'],
    limitations: 'The displayed interface is an illustration with sample data, not an actual screenshot. No verified throughput, user counts, query performance figures, or public live demo are supplied.',
    stack: ['React', 'Node.js', 'Express.js', 'MySQL', 'Microsoft Azure'], repository: null
  },
  plant: {
    title: 'Plant Disease Detection Using Deep Learning', category: 'Applied machine learning',
    problem: 'Image-based disease classification can help make machine-learning predictions accessible through a simple web interface.',
    implementation: 'Developed a CNN-based plant disease classification application using Python and TensorFlow. Integrated OpenCV image processing and a Flask web application to display predictions.',
    workflow: ['Image input', 'OpenCV preprocessing', 'Trained CNN model', 'Disease classification', 'Flask prediction display'],
    decisions: ['Used a CNN for image-based classification.', 'Integrated image preprocessing with OpenCV.', 'Exposed model predictions through a Flask application.'],
    limitations: '91% is the reported model accuracy in the supplied brief, not an independently verified result. Accuracy on arbitrary real-world images is not established. Predictions are not a substitute for professional agricultural diagnosis. Dataset and evaluation details were not supplied.',
    stack: ['Python', 'TensorFlow', 'Flask', 'OpenCV'], repository: null
  }
};
// Set to your real PDF path after adding it, e.g. 'assets/Praveen-Kothapalli-Resume.pdf'.
const RESUME_URL = '';
// Only set this after confirming the URL belongs to you. Unverified links stay hidden.
const LINKEDIN_URL = '';
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation');
}));
const dialog = document.querySelector('#project-dialog');
let lastTrigger;
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  if (!project) return;
  lastTrigger = button;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren();
  const chips = element('div', '', 'chips');
  project.stack.forEach(tech => chips.append(element('span', tech, 'chip')));
  content.append(element('h3', 'Technologies'), chips);
  content.append(element('h3', 'The problem'), element('p', project.problem));
  content.append(element('h3', 'Implementation & contribution'), element('p', project.implementation));
  content.append(element('h3', 'Architecture & workflow'));
  const flow = element('div', '', 'workflow');
  project.workflow.forEach((step, index) => {
    if (index) flow.append(element('b', '→'));
    flow.append(element('span', step));
  });
  content.append(flow, element('h3', 'Technical decisions'));
  const list = element('ul');
  project.decisions.forEach(decision => list.append(element('li', decision)));
  content.append(list, element('h3', 'Limitations & context'), element('p', project.limitations));
  const link = element('a', project.repository ? 'View source on GitHub ↗' : 'Explore my GitHub profile ↗', 'button');
  link.href = project.repository || 'https://github.com/pandu-116';
  link.target = '_blank'; link.rel = 'noopener noreferrer'; content.append(link);
  dialog.showModal(); dialog.scrollTop = 0;
}));
dialog.querySelector('.close-button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => { if (lastTrigger) lastTrigger.focus(); });
if (RESUME_URL) {
  document.querySelectorAll('.resume-link').forEach(link => {
    link.href = RESUME_URL; link.setAttribute('download', 'Praveen-Kothapalli-Resume.pdf');
    link.textContent = 'Download resume ↓';
  });
  const viewLink = element('a', 'View resume ↗', 'text-link');
  viewLink.href = RESUME_URL; viewLink.target = '_blank'; viewLink.rel = 'noopener noreferrer';
  document.querySelector('.resume-summary').append(viewLink);
}
if (LINKEDIN_URL) {
  document.querySelectorAll('.socials').forEach(group => {
    const link = element('a', 'LinkedIn ↗'); link.href = LINKEDIN_URL;
    link.target = '_blank'; link.rel = 'noopener noreferrer'; group.append(link);
  });
}
document.querySelector('#year').textContent = String(new Date().getFullYear());
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nav.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('#projects,#experience,#skills,#contact').forEach(section => observer.observe(section));
}

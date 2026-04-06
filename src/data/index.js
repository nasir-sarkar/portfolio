// Navigation
export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]



// Social Links
export const socialLinks = [
  { href: 'https://github.com/nasir-sarkar', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://linkedin.com/in/nasir-sarkar', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'mailto:nasirsarkardipon5@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
]



// About
export const aboutInfoLeft = [
  ['Name', 'Nasir Sarkar'],
  ['Phone', '+8801868056018'],
  ['Email', 'nasirsarkardipon5@gmail.com'],
  ['GitHub', 'github.com/nasir-sarkar'],
]

export const aboutInfoRight = [
  ['Address', 'Kuratoli, Kuril, Dhaka-1229'],
  ['University', 'AIUB'],
  ['Program', 'CSE'],
  ['CGPA', '3.82 (Current)'],
]



// Contact Info
export const contactInfo = [
  { icon: 'fas fa-phone-alt', label: 'Phone', val: '+8801868056018', href: 'tel:+8801868056018' },
  { icon: 'fas fa-envelope', label: 'Email', val: 'nasirsarkardipon5@gmail.com', href: 'mailto:nasirsarkardipon5@gmail.com' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', val: 'Kuratoli, Kuril, Dhaka-1229', href: '#' },
]

export const contactFormFields = [
  { name: 'name', placeholder: 'Name', type: 'text', required: true },
  { name: 'email', placeholder: 'Email', type: 'email', required: true },
  { name: 'phone', placeholder: 'Phone', type: 'text', required: false },
  { name: 'subject', placeholder: 'Subject', type: 'text', required: false },
]



// Services
export const services = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    desc: 'Building responsive and modern web applications using HTML, CSS, JavaScript, and PHP with MVC architecture patterns.',
  },
  {
    icon: 'fas fa-server',
    title: 'Backend Development',
    desc: 'Developing scalable backend systems using NestJS, PHP, PostgreSQL and MySQL databases for robust applications.',
  },
  {
    icon: 'fas fa-desktop',
    title: 'Desktop Applications',
    desc: 'Creating desktop-based management systems using C# Windows Forms and .NET Framework for business operations.',
  },
  {
    icon: 'fas fa-database',
    title: 'Database Design',
    desc: 'Designing and managing relational databases using PostgreSQL and MySQL for efficient data storage and retrieval.',
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'System Design',
    desc: 'Planning and architecting software systems including management platforms for universities, events, and hostel services.',
  },
  {
    icon: 'fas fa-network-wired',
    title: 'IT & Networking',
    desc: 'Foundational knowledge in IT essentials, computer hardware, operating systems, networking and IT security from Cisco Academy.',
  },
]



// Skills
export const skillsRow1 = ['NestJS', 'JavaScript', 'PHP', 'HTML5', 'CSS3', 'PostgreSQL', 'MySQL', 'C++', 'C#', 'Java']
export const skillsRow2 = ['.NET', 'Git', 'GitHub', 'VS Code', 'XAMPP', 'Visual Studio', 'MVC', 'REST API', 'OOP', 'Linux']



// Hero Stats
export const heroStats = [
  { target: 4, isDecimal: false, label: 'Projects Completed' },
  { target: 3, isDecimal: false, label: 'Certifications' },
  { target: 3.82, isDecimal: true, label: 'Current CGPA' },
]



// Education
export const educationCards = [
  {
    meta: { date: '2022 – Present', comment: 'CSE', dateIcon: 'far fa-calendar-alt', commentIcon: 'fas fa-graduation-cap' },
    title: 'American International University-Bangladesh (AIUB)',
    titleLink: 'https://www.aiub.edu/',
    authorIcon: 'fas fa-medal',
    authorName: 'CGPA: 3.82',
    authorSub: 'Current',
    readMore: 'Read More',
    readMoreLink: 'https://www.aiub.edu/',
  },
  {
    meta: { date: 'HSC 2021', comment: 'Science', dateIcon: 'far fa-calendar-alt', commentIcon: 'fas fa-flask' },
    title: 'Madhupur Government College',
    titleLink: 'https://madhupur.college.gov.bd/',
    authorIcon: 'fas fa-star',
    authorName: 'GPA: 5.00',
    authorSub: 'Perfect Score',
    readMore: 'Read More',
    readMoreLink: 'https://madhupur.college.gov.bd/',
  },
]



// Certifications
export const certCards = [
  {
    imgKey: 'cisco',
    meta: { date: '2023', comment: 'Cisco', dateIcon: 'far fa-calendar-alt', commentIcon: 'fas fa-network-wired' },
    title: 'Cisco Networking Academy – IT Essentials',
    titleLink: '#education',
    authorIcon: 'fas fa-award',
    authorName: 'Nasir Sarkar',
    authorSub: 'Certified',
    readMore: 'Credential',
    readMoreLink: 'https://www.credly.com/badges/ce7a1237-0397-4dae-ba53-9ca1b023ed6d/public_url',
  },
  {
    imgKey: 'freecodecamp',
    meta: { date: '2026', comment: 'JavaScript', dateIcon: 'far fa-calendar-alt', commentIcon: 'fas fa-code' },
    title: 'FreeCodeCamp – JavaScript Certification',
    titleLink: '#education',
    authorIcon: 'fas fa-award',
    authorName: 'Nasir Sarkar',
    authorSub: 'Certified',
    readMore: 'Credential',
    readMoreLink: 'https://www.freecodecamp.org/certification/nasir-sarkar/javascript-v9',
  },
  {
    imgKey: 'freecodecamp',
    meta: { date: '2026', comment: 'Web Design', dateIcon: 'far fa-calendar-alt', commentIcon: 'fas fa-laptop-code' },
    title: 'FreeCodeCamp – Responsive Web Design Certification',
    titleLink: '#education',
    authorIcon: 'fas fa-award',
    authorName: 'Nasir Sarkar',
    authorSub: 'Certified',
    readMore: 'Credential',
    readMoreLink: 'https://www.freecodecamp.org/certification/nasir-sarkar/responsive-web-design-v9',
  },
]



// Portfolio Projects
export const portfolioProjects = [
  {
    imgKey: 'event',
    cat: 'Web Development',
    title: 'Event Booking Management System',
    tech: 'HTML, CSS, JavaScript, PHP (MVC) · 2025',
    link: 'https://github.com/nasir-sarkar/Event_Booking',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
  },
  {
    imgKey: 'university',
    cat: 'Desktop App',
    title: 'University Management System',
    tech: 'C# (Windows Forms, .NET Framework) · 2025',
    link: 'https://github.com/nasir-sarkar/University_Management_System',
    gradient: 'linear-gradient(135deg, #0f3460, #16213e)',
  },
  {
    imgKey: 'pet',
    cat: 'Desktop App',
    title: 'Pet Hostel Management System',
    tech: 'C# (Windows Forms, .NET Framework) · 2024',
    link: 'https://github.com/nasir-sarkar/PET_HOSTEL',
    gradient: 'linear-gradient(135deg, #533483, #1a1a2e)',
  },
  {
    imgKey: 'food',
    cat: 'Desktop App',
    title: 'Food Delivery Management System',
    tech: 'Java (Swing GUI) · 2023',
    link: 'https://github.com/nasir-sarkar/Food_Delivery',
    gradient: 'linear-gradient(135deg, #1b262c, #0f3460)',
  },
]



// Footer
export const footerContactInfo = [
  { label: 'Phone', val: '+8801868056018', href: 'tel:+8801868056018' },
  { label: 'Email', val: 'nasirsarkardipon5@gmail.com', href: 'mailto:nasirsarkardipon5@gmail.com' },
  { label: 'Location', val: 'Kuratoli, Kuril, Dhaka-1229', href: null },
]

export const footerInfoLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'My Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
]

export const footerQuickLinks = [
  { label: 'GitHub Profile', href: 'https://github.com/nasir-sarkar', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nasir-sarkar', external: true },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Download CV', href: 'https://drive.google.com/file/d/1rVgR5ObAme8us-4Bx2L77XXCeJ1g4Enm/view?usp=sharing', external: true },
]



// Sidebar Contact
export const sidebarContactItems = [
  { icon: 'fas fa-map-marker-alt', text: 'Kuratoli, Kuril, Dhaka-1229' },
  { icon: 'fas fa-envelope', text: 'nasirsarkardipon5@gmail.com' },
  { icon: 'fas fa-phone', text: '+8801868056018' },
]
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, ArrowLeft, Moon, Sun, Github, Linkedin, Mail, Phone, X, Code2, Database, GitBranch, Monitor, Layers, Plus, ChevronRight } from 'lucide-react';
import './styles.css';

import { projects, type Project } from './projects';

const skills = [
  { icon: Code2, title: 'Frontend', detail: 'Building the interface', tags: ['HTML', 'CSS', 'JavaScript'] },
  { icon: Layers, title: 'Frameworks & build tools', detail: 'Currently learning through this portfolio', tags: ['React', 'Vite'] },
  { icon: Database, title: 'Databases', detail: 'Working with data', tags: ['SQL / MySQL', 'MongoDB'] },
  { icon: GitBranch, title: 'Version control', detail: 'Keeping work organized', tags: ['Git', 'GitHub'] },
  { icon: Monitor, title: 'Responsive design', detail: 'Thinking across screens', tags: ['Mobile layouts', 'Flexible interfaces'] },
];

function Blueprint({ variant }: { variant: string }) {
  return <div className={`blueprint ${variant}`} aria-hidden="true"><div className="mock-browser"><div className="mock-toolbar"><i/><i/><i/><span/></div><div className="mock-body"><div className="mock-sidebar"><b/><i/><i/><i/></div><div className="mock-content"><div className="mock-heading"/><div className="mock-line"/><div className="mock-grid"><div/><div/><div/></div><div className="mock-bottom"><span/><span/><span/></div></div></div></div><div className="preview-caption"><Layers size={13}/> SCREENSHOT PLACEHOLDER</div></div>;
}

function ProjectGallery({ screenshots }: { screenshots: NonNullable<Project['screenshots']> }) {
  const [selected, setSelected] = useState(0);
  const imageViewer = useRef<HTMLDialogElement>(null);
  const shot = screenshots[selected];
  const move = (direction: number) => setSelected(index => (index + direction + screenshots.length) % screenshots.length);
  return <div className="project-gallery">
    <div className="gallery-heading"><h3>Project walkthrough</h3><span>{selected + 1} / {screenshots.length} pictures</span></div>
    <figure aria-live="polite">
      <button type="button" onClick={() => imageViewer.current?.showModal()} className="screenshot-expand" aria-label={`Enlarge screenshot: ${shot.title}`}>
        <img src={shot.src} alt={shot.alt} className="detail-screenshot" />
        <span>View full picture <ArrowUpRight size={14}/></span>
      </button>
      <figcaption><h4>{shot.title}</h4><p>{shot.caption}</p></figcaption>
    </figure>
    <div className="gallery-navigation"><button type="button" onClick={() => move(-1)} aria-label="Previous screenshot"><ArrowLeft size={16}/> Previous</button><button type="button" onClick={() => move(1)} aria-label="Next screenshot">Next <ArrowRight size={16}/></button></div>
    <div className="screenshot-controls" role="group" aria-label="Choose a project screenshot">
      {screenshots.map((image, i) => <button key={image.src} type="button" aria-label={`Show screenshot ${i + 1}: ${image.title}`} aria-pressed={selected === i} onClick={() => setSelected(i)}><img src={image.src} alt="" loading="lazy"/><span><b>{String(i + 1).padStart(2, '0')}</b> {image.title}</span></button>)}
    </div>
    <dialog ref={imageViewer} className="image-viewer" aria-labelledby="image-viewer-title" onClick={e => { e.stopPropagation(); if (e.target === e.currentTarget) imageViewer.current?.close(); }} onCancel={e => { e.preventDefault(); e.stopPropagation(); imageViewer.current?.close(); }} onClose={e => e.stopPropagation()}>
      <div className="image-viewer-header"><h3 id="image-viewer-title">{shot.title}</h3><button type="button" className="arrow-button" autoFocus aria-label="Close enlarged image" onClick={() => imageViewer.current?.close()}><X size={20}/></button></div>
      <img src={shot.src} alt={shot.alt}/>
      <p>{shot.caption}</p>
    </dialog>
  </div>;
}

function App() {
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('portfolio-theme') === 'dark'; } catch { return false; } });
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touch = useRef<number | null>(null);
  const [section, setSection] = useState('home');
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch { /* Theme still works without storage. */ } }, [dark]);
  useEffect(() => { if (opened !== null) { dialog.current?.showModal(); const old = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = old; }; } }, [opened]);
  useEffect(() => { const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) setSection(e.target.id); }); }, { rootMargin: '-15% 0px -55% 0px' }); document.querySelectorAll('main > section').forEach(el => observer.observe(el)); return () => observer.disconnect(); }, []);
  const move = (direction: number) => setActive(n => (n + direction + projects.length) % projects.length);
  const close = () => { dialog.current?.close(); setOpened(null); };

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><a className="wordmark" href="#home" aria-label="Virger Isla home">virger<span>.</span></a><nav aria-label="Main navigation">{['home', 'projects', 'about', 'contact'].map(s => <a key={s} href={`#${s}`} className={section === s ? 'current' : ''}>{s[0].toUpperCase() + s.slice(1)}</a>)}</nav><div className="header-actions"><button className="theme-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><a className="header-contact" href="mailto:islavirgerjhonel0523@gmail.com">Let’s talk <ArrowUpRight size={16}/></a></div></header>
    <main id="main">
      <section id="home" className="hero section-shell"><div className="hero-copy"><div className="availability"><span/> MY DEVELOPER PORTFOLIO</div><p className="intro">Hello, I’m Virger Isla.</p><h1>Learning by building.<br/>Creating with <span>purpose.</span></h1><p className="hero-description">A BSIT student and aspiring developer turning ideas into<br className="desktop-break"/> thoughtful web experiences, one project at a time.</p><div className="hero-buttons"><a href="#projects" className="button primary">Explore my projects <ArrowUpRight size={18}/></a><a href="#about" className="button text-button">A little about me <ArrowRight size={17}/></a></div><div className="hero-footnote"><span className="mini-symbol">&lt;/&gt;</span><span>Curious mind. Growing skillset. Always building.</span></div></div><div className="hero-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span><div className="floating-tag tag-one"><Code2 size={15}/> BUILD. LEARN. REPEAT.</div><div className="code-tile tile-back"/><div className="code-tile tile-main"><div className="tile-top"><span>V / I</span><span>01 — DEV</span></div><div className="tile-code">&lt;<span>/</span>&gt;</div><div className="tile-bottom"><span>IDEAS INTO<br/>INTERFACES</span><ArrowUpRight size={28}/></div></div><div className="floating-tag tag-two"><span/> A WORK IN PROGRESS, ALWAYS.</div></div></section>

      <section id="projects" className="projects-section"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>A space for what I build<span>.</span></h2></div><p>Explore the ideas, the process,<br/>and the things I’m learning along the way.</p></div><div className="project-stage" role="region" aria-roledescription="carousel" aria-label="Project showcase" tabIndex={0} onKeyDown={e => { if (e.target !== e.currentTarget) return; if (e.key === 'ArrowRight') { e.preventDefault(); move(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); move(-1); } }} onTouchStart={e => { touch.current = e.touches[0].clientX; }} onTouchEnd={e => { if (touch.current !== null) { const distance = touch.current - e.changedTouches[0].clientX; if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1); touch.current = null; } }}>
        {projects.map((project, i) => {
          const position = (i - active + projects.length) % projects.length;
          const isTemplate = !project.description;
          return <button key={project.title} className={`project-card position-${position}`} tabIndex={position === 2 ? -1 : 0} aria-hidden={position === 2 ? true : undefined} aria-label={position === 0 ? `Open ${project.title} details, project ${i + 1} of ${projects.length}` : `Show ${project.title}`} onClick={() => position === 0 ? setOpened(i) : setActive(i)}>
            <div className="project-image">
              {project.screenshots?.length ? <img className="project-cover" src={project.screenshots[0].src} alt={project.screenshots[0].alt} /> : <Blueprint variant={project.layout}/>}
              <span className="template-label">{isTemplate ? 'PROJECT TEMPLATE' : 'LOCAL DEVELOPMENT'}</span>
              <span className="hover-open">Explore project <ArrowUpRight size={16}/></span>
            </div>
            <div className="project-info">
              <div className="project-meta"><span>{project.type}</span><span>0{i + 1}</span></div>
              <div className="project-title"><h3>{project.title}</h3><span className="round-arrow"><ArrowUpRight size={19}/></span></div>
              <p>{project.description ?? 'A future home for a project, its story, and screenshots.'}</p>
              <div className="project-tags">{(project.technologies?.slice(0, 3) ?? ['Details coming soon', 'Placeholder']).map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          </button>;
        })}
      </div><div className="carousel-controls"><button className="arrow-button" onClick={() => move(-1)} aria-label="Previous project"><ArrowLeft size={19}/></button><div className="carousel-dots" aria-label="Choose a project">{projects.map((p, i) => <button key={p.title} aria-label={`Show ${p.title}`} aria-current={active === i ? 'true' : undefined} className={active === i ? 'selected' : ''} onClick={() => setActive(i)}/>)}</div><button className="arrow-button" onClick={() => move(1)} aria-label="Next project"><ArrowRight size={19}/></button></div><p className="carousel-caption" aria-live="polite"><span>0{active + 1} / 04</span> <span className="caption-divider"/> Projects and works in progress. <span className="desktop-hint">Hover to explore · Click to view</span></p></div></section>

      <section id="about" className="about-section section-shell"><div className="about-copy"><p className="eyebrow">02 / BEHIND THE CODE</p><h2>A student today.<br/>A developer in the making<span>.</span></h2><p>I’m <strong>Virger Jhonel V. Isla</strong>, a Bachelor of Science in Information Technology student exploring web development and turning ideas into projects.</p><p>This portfolio is a space for what I build and what I learn along the way. I’m developing my skills in web development, databases, and responsive design, and exploring React and Vite through this website.</p><a href="https://github.com/virIsla" className="inline-link" target="_blank" rel="noopener noreferrer">Get to know me on GitHub <ArrowUpRight size={16}/></a></div><div className="skills-panel"><div className="skills-heading"><span>MY TOOLKIT</span><span>Always learning <Plus size={13}/></span></div>{skills.map(({ icon: Icon, title, detail, tags }) => <div className="skill-row" key={title}><span className="skill-icon"><Icon size={20}/></span><div><h3>{title}</h3><p>{detail}</p><div className="skill-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>)}</div></section>

      <section id="contact" className="contact-section section-shell"><div className="contact-panel"><div><p className="eyebrow">03 / LET’S CONNECT</p><h2>Good ideas start<br/>with a conversation<span>.</span></h2><p>Have a project idea, feedback, or just want to connect?<br/>I’d love to hear from you.</p><a className="button contact-button" href="mailto:islavirgerjhonel0523@gmail.com">Say hello <ArrowUpRight size={18}/></a></div><div className="contact-details"><a href="mailto:islavirgerjhonel0523@gmail.com"><Mail size={19}/><div><span>EMAIL ME</span><p>islavirgerjhonel0523@gmail.com</p></div><ArrowUpRight size={16}/></a><a href="tel:+639392829747"><Phone size={19}/><div><span>GIVE ME A CALL</span><p>+63 939 282 9747</p></div><ArrowUpRight size={16}/></a><div className="social-links"><a href="https://github.com/virIsla" target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/virger-jhonel-isla-3845b329b/" target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a></div></div></div></section>
    </main><footer className="section-shell"><a className="wordmark" href="#home">virger<span>.</span></a><p>© {new Date().getFullYear()} Virger Isla. Built with curiosity.</p><a href="#home">Back to top <ArrowUpRight size={15}/></a></footer>
    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-detail-title" onCancel={close} onClose={() => setOpened(null)} onClick={e => { if (e.target === e.currentTarget) close(); }}>
      {opened !== null && <div className="dialog-content">
        <button className="dialog-close arrow-button" onClick={close} aria-label="Close project details" autoFocus><X size={20}/></button>
        <p className="eyebrow">{projects[opened].description ? 'PROJECT DETAILS' : 'PROJECT TEMPLATE'} / 0{opened + 1}</p>
        <h2 id="project-detail-title">{projects[opened].title}</h2>
        <p className="dialog-intro">{projects[opened].description ?? 'This space is reserved for an upcoming project. The graphics below are placeholders, not completed work.'}</p>
        {projects[opened].screenshots?.length ? <ProjectGallery key={opened} screenshots={projects[opened].screenshots!}/> : <Blueprint variant={projects[opened].layout}/>}
        {projects[opened].description ? <>
          <section className="project-detail-section"><h3>About the project</h3><p>{projects[opened].overview}</p></section>
          <section className="project-detail-section"><h3>Technology stack</h3><div className="detail-technologies">{projects[opened].technologies?.map(tag => <span key={tag}>{tag}</span>)}</div></section>
          <section className="project-detail-section"><h3>Key features</h3><div className="detail-grid feature-grid">{projects[opened].features?.map(feature => <div key={feature.title}><h4>{feature.title}</h4><p>{feature.description}</p></div>)}</div></section>
          <section className="project-detail-section"><h3>How it works</h3><p>{projects[opened].development}</p></section>
          <aside className="project-status"><h3>Project status</h3><p>{projects[opened].status}</p></aside>
        </> : <div className="detail-grid"><div><h3>About the project</h3><p>Add a short description of the problem, who the project is for, and what you built.</p></div><div><h3>My contribution</h3><p>Add your role, the features you worked on, and what you learned.</p></div></div>}
        <div className="detail-footer"><span>{projects[opened].description ? 'Screenshots captured from the local development version.' : 'Technologies and project links will be added with the real project.'}</span><button onClick={() => { setOpened((opened + 1) % projects.length); dialog.current?.scrollTo({ top: 0 }); }}>Next project <ChevronRight size={16}/></button></div>
      </div>}
    </dialog>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);


"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Workflow,
  Code2,
  Database,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  Zap,
  Globe,
  Layers3,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI Agents",
    description:
      "Intelligent AI agents that handle repetitive work, support customers, and help your business operate smarter.",
    icon: Bot,
    color: "blue",
    tags: ["AI assistants", "Custom agents", "AI integration"],
  },
  {
    number: "02",
    title: "Business Automation",
    description:
      "Connect your tools, eliminate manual processes, and build workflows that give your team time back.",
    icon: Workflow,
    color: "purple",
    tags: ["Workflow design", "Integrations", "Process automation"],
  },
  {
    number: "03",
    title: "Web & App Development",
    description:
      "Beautiful, high-performance websites and applications designed to turn great ideas into real products.",
    icon: Code2,
    color: "orange",
    tags: ["Websites", "Mobile apps", "Custom software"],
  },
  {
    number: "04",
    title: "Data & Intelligence",
    description:
      "Transform your business data into actionable insights, smarter decisions, and measurable growth.",
    icon: Database,
    color: "green",
    tags: ["Data analytics", "Dashboards", "Machine learning"],
  },
];

const projects = [
  {
    category: "AI & AUTOMATION",
    title: "Intelligent business operations",
    description:
      "A concept for an AI-powered operations platform that connects everyday business workflows.",
    label: "AI concept",
    style: "project-blue",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Digital experiences that convert",
    description:
      "A concept for a modern digital storefront with a seamless customer experience.",
    label: "Web concept",
    style: "project-purple",
  },
  {
    category: "DATA & ANALYTICS",
    title: "Make your data work harder",
    description:
      "A concept dashboard bringing business performance and actionable insights together.",
    label: "Data concept",
    style: "project-orange",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="navbar">
        <a href="#" className="brand" onClick={closeMenu}>
          <span className="brand-mark">A</span>
          <span>adirondack<span className="brand-light">logic</span></span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#work" onClick={closeMenu}>Our work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            TECHNOLOGY, BUILT AROUND YOU
          </div>

          <h1>
            Big ideas.
            <br />
            <span className="gradient-text">Smarter technology.</span>
            <br />
            Real results.
          </h1>

          <p className="hero-description">
            We help ambitious businesses simplify operations, embrace AI,
            and build digital experiences that move them forward.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button-primary">
              Build something great <ArrowRight size={18} />
            </a>
            <a href="#services" className="button-secondary">
              Explore our services <ChevronRight size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <div className="proof-icon"><Sparkles size={17} /></div>
            <span>Thoughtful technology. Practical innovation.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="dashboard-card">
            <div className="dashboard-top">
              <div>
                <span className="dashboard-kicker">YOUR BUSINESS, REIMAGINED</span>
                <h3>Intelligence at work.</h3>
              </div>
              <span className="dashboard-icon"><Sparkles size={19} /></span>
            </div>

            <div className="dashboard-main">
              <div className="dashboard-symbol">
                <Bot size={38} strokeWidth={1.5} />
              </div>
              <div>
                <span className="mini-label">AI OPERATIONS</span>
                <h4>Your AI assistant</h4>
                <p>Working behind the scenes</p>
              </div>
              <span className="live-pill"><span /> LIVE</span>
            </div>

            <div className="workflow-list">
              <div className="workflow-row">
                <span className="workflow-icon blue-icon"><Globe size={16} /></span>
                <span>Customer inquiry received</span>
                <CheckCircle2 className="check-icon" size={17} />
              </div>
              <div className="workflow-row">
                <span className="workflow-icon purple-icon"><Zap size={16} /></span>
                <span>AI workflow activated</span>
                <CheckCircle2 className="check-icon" size={17} />
              </div>
              <div className="workflow-row">
                <span className="workflow-icon green-icon"><Layers3 size={16} /></span>
                <span>CRM automatically updated</span>
                <CheckCircle2 className="check-icon" size={17} />
              </div>
            </div>

            <div className="dashboard-bottom">
              <span>AN EXAMPLE OF WHAT'S POSSIBLE</span>
              <span className="dashboard-arrow"><ArrowUpRight size={17} /></span>
            </div>
          </div>

          <div className="floating-card floating-top">
            <span className="floating-icon"><Zap size={17} /></span>
            <div><strong>Less busywork.</strong><small>More possibilities.</small></div>
          </div>

          <div className="floating-card floating-bottom">
            <span className="floating-icon purple-icon"><Sparkles size={17} /></span>
            <div><strong>Built for growth.</strong><small>Designed for people.</small></div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>INNOVATION WITH PURPOSE</span>
          <span>SCROLL TO EXPLORE <span className="scroll-line" /></span>
        </div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label">A DIFFERENT KIND OF TECH PARTNER</div>
        <div className="intro-grid">
          <h2>
            Technology should make business
            <span className="muted-heading"> feel simpler.</span>
          </h2>
          <div className="intro-copy">
            <p>
              The right technology shouldn't create more complexity.
              It should remove friction, unlock opportunity, and give
              people the freedom to focus on what matters.
            </p>
            <p>
              That's the thinking behind Adirondack Logic. We bring
              together strategy, software, automation, and AI to solve
              real business problems.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <div className="section-label">WHAT WE DO</div>
            <h2>Technology for what's next.</h2>
            <p>From the first idea to the finished product, we build solutions that work.</p>
          </div>
          <a href="#contact" className="text-link">
            Discuss a project <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className={`service-card ${service.color}`} key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon"><Icon size={25} strokeWidth={1.7} /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href="#contact" className="service-link" aria-label={`Discuss ${service.title}`}>
                  <ArrowUpRight size={19} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ai-section" id="approach">
        <div className="ai-orb ai-orb-one" />
        <div className="ai-orb ai-orb-two" />
        <div className="ai-content">
          <div className="dark-eyebrow"><Sparkles size={15} /> THE NEXT ERA OF BUSINESS</div>
          <h2>
            Don't just keep up.
            <br />
            <span>Move ahead.</span>
          </h2>
          <p>
            AI is changing how businesses operate. We help you make
            sense of it, identify the opportunities, and put practical
            solutions to work.
          </p>
          <a href="#contact" className="button-light">
            Explore what's possible <ArrowRight size={18} />
          </a>
        </div>
        <div className="ai-feature-grid">
          <div className="ai-feature">
            <Bot size={22} />
            <strong>Intelligent agents</strong>
            <span>Purpose-built AI assistants</span>
          </div>
          <div className="ai-feature">
            <Workflow size={22} />
            <strong>Connected workflows</strong>
            <span>Systems that work together</span>
          </div>
          <div className="ai-feature">
            <Database size={22} />
            <strong>Useful intelligence</strong>
            <span>Insights from your data</span>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <div className="section-label">SELECTED IDEAS</div>
            <h2>Imagine what's possible.</h2>
            <p>A look at the kinds of digital experiences we love to create.</p>
          </div>
          <span className="concept-note">ILLUSTRATIVE CONCEPTS</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-art ${project.style}`}>
                <div className="project-art-inner">
                  {project.style === "project-blue" && (
                    <div className="art-ai">
                      <div className="art-ai-icon"><Bot size={42} /></div>
                      <div className="art-ai-line" />
                      <div className="art-ai-line short" />
                      <div className="art-ai-pills"><i /><i /><i /></div>
                    </div>
                  )}
                  {project.style === "project-purple" && (
                    <div className="art-browser">
                      <div className="browser-dots"><i /><i /><i /></div>
                      <div className="browser-content">
                        <div className="browser-block" />
                        <div><i /><i /><i /></div>
                      </div>
                    </div>
                  )}
                  {project.style === "project-orange" && (
                    <div className="art-chart">
                      <div className="chart-bars"><i /><i /><i /><i /><i /><i /></div>
                      <div className="chart-caption">BUSINESS INSIGHTS</div>
                    </div>
                  )}
                </div>
                <span className="project-badge">{project.label}</span>
              </div>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="section-label">HAVE AN IDEA?</div>
        <h2>Let's make something <span>meaningful.</span></h2>
        <p>
          Tell us what you're working on, what's slowing you down,
          or what you'd love to build. Let's explore what's possible.
        </p>
        <a href="mailto:hello@adirondacklogic.com" className="button-primary">
          Start a conversation <ArrowRight size={18} />
        </a>
        <span className="contact-email">hello@adirondacklogic.com</span>
      </section>

      <footer className="footer">
        <a href="#" className="brand footer-brand">
          <span className="brand-mark">A</span>
          <span>adirondack<span className="brand-light">logic</span></span>
        </a>
        <span>Thoughtful technology. Real-world impact.</span>
        <span>© 2026 Adirondack Logic</span>
      </footer>
    </main>
  );
}

"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, Award, BookOpen, Mountain, Globe, Menu, X } from 'lucide-react';

const PortfolioWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
      title: "Full Stack Developer",
      description: "Building scalable web applications with modern technologies",
      background: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
      background: "bg-gradient-to-r from-green-600 to-blue-600"
    },
    {
      title: "Tech Enthusiast",
      description: "Always learning and exploring new technologies",
      background: "bg-gradient-to-r from-purple-600 to-pink-600"
    }
  ];

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(timer);
}, [slides.length]);

  const skills = {
    languages: [
      { name: "JavaScript", proficiency: 90 },
      { name: "Python", proficiency: 85 },
      { name: "SQL", proficiency: 80 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 85 }
    ],
    frameworks: [
      { name: "React", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "Flask", proficiency: 75 },
      { name: "Vue.js", proficiency: 80 },
      { name: "Express", proficiency: 85 }
    ],
    databases: [
      { name: "MongoDB", proficiency: 85 },
      { name: "MySQL", proficiency: 80 },
      { name: "Firebase", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 70 }
    ],
    tools: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 75 },
      { name: "AWS", proficiency: 80 },
      { name: "Jenkins", proficiency: 70 }
    ]
  };

  const projects = [
    {
      title: "E-commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, payment gateways, and responsive UI. Implemented using React, Node.js, and MongoDB with Stripe integration for secure payments. Optimized for handling hundreds of simultaneous users.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Weather Forecasting App", 
      description: "Python-based weather app using Flask that fetches real-time data from external APIs. Features include multi-city forecasts, historical data visualization, and user preferences for default locations.",
      tags: ["Python", "Flask", "REST APIs"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Vue.js and Firebase-powered task management tool with real-time updates, drag-and-drop functionality, and cloud syncing. Includes user authentication and role-based access control.",
      tags: ["Vue.js", "Firebase", "Real-time Database"],
      link: "#"
    }
  ];


  const testimonials = [
    {
      text: "Mohammed Maaz Ul Hasan was instrumental in helping us develop our web platform. Their skills in React and Node.js made a huge difference, and their proactive approach was a delight to work with. Their ability to find creative solutions to complex problems saved us a lot of time and effort.",
      author: "Former Client"
    },
    {
      text: "I appreciated Mohammed Maaz Ul Hasan&apos;s ability to tackle complex technical challenges and their collaborative spirit. They consistently communicated effectively, making sure everyone was on the same page, which greatly improved our team's efficiency. Their work was of high quality, and they always went the extra mile to ensure we delivered on time.",
      author: "Previous Employer"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      description: "Cloud application deployment and management"
    },
    {
      title: "Certified ScrumMaster (CSM)",
      description: "Agile methodologies and Scrum practices"
    },
    {
      title: "Google Associate Android Developer",
      description: "Android development and best practices"
    }
  ];

  // Rest of the data remains the same...

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${currentSlide === 0 ? 'bg-white' : 'bg-background/95'} backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-primary">Mohammed Maaz Ul Hasan</a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => {
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="about" className="min-h-screen pt-16 relative overflow-hidden">
        <div className="absolute inset-0 transition-all duration-500 ease-in-out transform">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 ${slide.background} transition-opacity duration-500 flex items-center justify-center
                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="text-center text-white p-6">
                <h1 className="text-3xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl opacity-90">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all
                ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">About Me</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            I am a passionate software developer with a strong background in building web applications and solving complex programming challenges. With several years of experience in both startups and larger companies, I&apos;ve developed a diverse skill set that spans full-stack development, emphasizing clean, scalable, and efficient code.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Beyond coding, I excel in communication and bridge the gap between technical and non-technical stakeholders. I thrive in collaborative environments and am particularly drawn to projects that make a meaningful difference in users&apos; lives.
          </p>
        </div>
      </section>

      {/* Skills Section with Proficiency Bars */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 capitalize">{category}</h3>
                  <div className="space-y-4">
                    {items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary transition-all duration-500 ease-out"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same... */}

       {/* Projects Section */}
       <section id="projects" className="py-16 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Software Developer</h3>
                <p className="text-muted-foreground">Tech Innovators Inc. (2020 - Present)</p>
                <p className="mt-4">
                  Contributed to multiple projects focusing on full-stack web development using JavaScript frameworks. 
                  Played a key role in designing, building, and maintaining software solutions that enhanced user experiences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Junior Developer</h3>
                <p className="text-muted-foreground">StartUp Solutions (2018 - 2020)</p>
                <p className="mt-4">
                  Assisted in the development of scalable web applications using Python and Flask. 
                  Worked alongside senior developers to enhance backend performance and participated in code reviews.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <Award className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-lg italic mb-4">{testimonial.text}</p>
                  <p className="text-primary font-bold">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-16 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Technology Trends</h3>
                <p className="text-muted-foreground">Staying current with AI, blockchain, and cloud computing advances</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Mountain className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Hiking</h3>
                <p className="text-muted-foreground">Exploring nature and staying active outdoors</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">Reading</h3>
                <p className="text-muted-foreground">Technology books and personal development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out through any of these channels!
          </p>
          <div className="flex justify-center gap-4">
            <Button>
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Mohammed Maaz Ul Hasan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;

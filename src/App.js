import React, { useState, useEffect } from 'react';
// Import the CSS file - make sure this path matches your project structure
// import './main.css';
import './App.css';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (!isHovering) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    setRotation({ x: yAxis, y: xAxis });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  const userOptions = [
    {
      id: 'student',
      title: 'Students',
      headerClass: 'student-header',
      description: 'Find your perfect college match and get expert guidance for your future.',
      benefits: ['College matching algorithm', 'Direct counselor access', 'Application tracking']
    },
    {
      id: 'university',
      title: 'Universities',
      headerClass: 'university-header',
      description: 'Connect with motivated students and showcase your unique program offerings.',
      benefits: ['Student recruitment tools', 'Custom profile page', 'Analytics dashboard']
    },
    {
      id: 'counselor',
      title: 'Counselors',
      headerClass: 'counselor-header',
      description: 'Build your side hustle by guiding students toward their educational goals.',
      benefits: ['Flexible scheduling', 'Secure payments', 'Client management tools']
    }
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header container">
        <div className="logo-container">
          <div className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"></path>
            </svg>
          </div>
          <h1 className="logo-text">EduBridge</h1>
        </div>
        <button className="signin-button">
          <span className="signin-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
          </span>
          Sign In
        </button>
      </header>

      <main className="main container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">Where Education Paths Connect</h1>
          <p className="hero-subtitle">
            A single platform connecting students, universities, and counselors to create the perfect educational journey.
          </p>
        </div>

        {/* 3D Brain Element */}
        <div 
          className="brain-3d-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setRotation({ x: 0, y: 0 });
          }}
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isHovering ? 'none' : 'transform 0.5s ease'
          }}
        >
          <div className="pulse-layer pulse-layer-1"></div>
          <div className="pulse-layer pulse-layer-2"></div>
          <div className="pulse-layer pulse-layer-3"></div>
          <div className="brain-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"></path>
            </svg>
          </div>
        </div>

        {/* User Selection */}
        <h2 className="section-title">Choose Your Path</h2>
        
        <div className="options-container">
          {userOptions.map((option) => (
            <div
              key={option.id}
              className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
              onClick={() => setSelectedOption(option.id)}
            >
              <div className={`option-header ${option.headerClass}`}>
                <div className="icon-container">
                  {option.id === 'student' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                    </svg>
                  )}
                  {option.id === 'university' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  )}
                  {option.id === 'counselor' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  )}
                </div>
                <h3 className="option-title">{option.title}</h3>
                <p className="option-description">{option.description}</p>
              </div>
              
              <div className="option-body">
                <ul className="benefits-list">
                  {option.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <span className="check-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="login-button">
                  Login as {option.title.slice(0, -1)}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-title">How It Works</h2>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="step-number step1">
                <span className="step-text">1</span>
              </div>
              <h3 className="feature-title">Create Your Profile</h3>
              <p className="feature-description">Sign up and customize your profile based on your role in the education journey.</p>
            </div>
            
            <div className="feature-item">
              <div className="step-number step2">
                <span className="step-text">2</span>
              </div>
              <h3 className="feature-title">Make Connections</h3>
              <p className="feature-description">Our platform helps you find the perfect match based on your needs and goals.</p>
            </div>
            
            <div className="feature-item">
              <div className="step-number step3">
                <span className="step-text">3</span>
              </div>
              <h3 className="feature-title">Achieve Success</h3>
              <p className="feature-description">With the right guidance and connections, your educational journey will thrive.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-title">Ready to Begin Your Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of students, universities, and counselors already transforming education connections.
          </p>
          <button className="cta-button">
            Get Started For Free
          </button>
        </div>
      </main>

      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"></path>
              </svg>
            </div>
            <span className="logo-text">EduBridge</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 EduBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
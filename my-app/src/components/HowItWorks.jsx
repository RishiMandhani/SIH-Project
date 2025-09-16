import React from 'react';

const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'Select Language', description: 'Choose your preferred language for interaction' },
    { number: 2, title: 'Provide Details', description: 'Share your location, soil type, and crop information' },
    { number: 3, title: 'Get Recommendations', description: 'Receive AI-powered personalized advice' },
    { number: 4, title: 'Improve Yield', description: 'Implement suggestions to increase productivity' }
  ];

  return (
    <section id="how-it-works" className="py-5">
      <div className="container">
        <h2 className="text-center section-title mx-auto">How It Works</h2>
        
        <div className="row mt-5">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <span className="h4 mb-0">{step.number}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
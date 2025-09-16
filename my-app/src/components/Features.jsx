import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-seedling',
      title: 'Crop Advisory',
      description: 'Personalized recommendations based on soil type, weather, and crop history'
    },
    {
      icon: 'fas fa-flask',
      title: 'Soil Health',
      description: 'Get precise fertilizer recommendations based on your soil\'s needs'
    },
    {
      icon: 'fas fa-cloud-sun',
      title: 'Weather Alerts',
      description: 'Real-time weather updates and predictive insights for your location'
    },
    {
      icon: 'fas fa-bug',
      title: 'Pest Detection',
      description: 'Upload images to identify pests and diseases with AI analysis'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Market Prices',
      description: 'Track commodity prices in local markets to get better deals'
    },
    {
      icon: 'fas fa-microphone',
      title: 'Voice Support',
      description: 'Voice-based interface for farmers with low digital literacy'
    }
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center section-title mx-auto">Our Solutions</h2>
        <p className="text-center lead mb-5">AI-powered features designed for small farmers</p>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="card feature-card h-100">
                <div className="card-body text-center p-4">
                  <div className="feature-icon">
                    <span className={feature.icon}></span>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
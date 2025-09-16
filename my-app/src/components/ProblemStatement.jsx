import React from 'react';

const ProblemStatement = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">The Challenge for Indian Farmers</h2>
            <p className="lead">86% of Indian farmers are small or marginal (NABARD Report, 2022)</p>
            <p>They rely on traditional knowledge, local shopkeepers, or guesswork for critical decisions about:</p>
            <ul>
              <li>Crop selection</li>
              <li>Pest control</li>
              <li>Fertilizer use</li>
            </ul>
            <p>This leads to poor yield, excessive costs, and environmental damage due to overuse of chemicals.</p>
          </div>
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Indian Farmer" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
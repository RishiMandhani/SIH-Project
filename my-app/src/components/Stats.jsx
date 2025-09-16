import React from 'react';

const Stats = () => {
  const stats = [
    { value: '20-30%', label: 'Potential Yield Increase' },
    { value: '86%', label: 'Small/Marginal Farmers' },
    { value: '10+', label: 'Local Languages' },
    { value: '5000+', label: 'Farmers Impacted' }
  ];

  return (
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-6 mb-4">
              <div className="stats-number">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
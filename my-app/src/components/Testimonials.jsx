import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Rajesh Kumar',
      location: 'Wheat Farmer, Punjab',
      quote: '"KrishiMitra helped me identify a nutrient deficiency in my soil that increased my yield by 25% this season."'
    },
    {
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
      name: 'Laxmi Devi',
      location: 'Rice Farmer, Odisha',
      quote: '"The voice feature in my local language made it so easy to get advice without needing to read or write."'
    },
    {
      image: 'https://images.unsplash.com/photo-1563583493546-2d581d410c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Venkatesh',
      location: 'Cotton Farmer, Telangana',
      quote: '"The pest detection feature saved my crop from whitefly infestation. I just uploaded a photo and got immediate treatment advice."'
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center section-title mx-auto">Farmer Stories</h2>
        
        <div className="row mt-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="d-flex align-items-center mb-3">
                  <img src={testimonial.image} alt="Farmer" className="farmer-image me-3" />
                  <div>
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.location}</small>
                  </div>
                </div>
                <p className="mb-0">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import Testimonials from "./Testimonials";
import Footer from "./Footer";


const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="about_us">
        <div className="about-us">
        <h1>About</h1>
        
        <div className='text-contain'>
        <p>
          At Our English School, we are dedicated to providing top-quality English language education to students of all ages and backgrounds. </p>
        <p> 
          With experienced instructors and a dynamic learning environment, we help our students achieve their language goals.</p>
        <p>
          Whether you are looking to improve your conversational skills, prepare for exams, or enhance your career prospects,   </p>
          <p>we have a program that fits your needs. Join us and embark on an exciting journey to fluency!</p> 
    
        
        <p>Are you ready to embark on a journey that can truly transform your life? Learning English opens doors to countless opportunities, broadens your horizons,
          and enhances your global perspective. At Our English School, we believe that English isn't just a language; it's the key to a world of possibilities.
          </p>
        <p>Why Learn English with Us?

        We understand that choosing the right school is crucial to your success. 
        Our English School stands out for several compelling reasons:
        </p>
    <p> 1. Experienced and Passionate Instructors
        Our team of dedicated and experienced instructors is passionate about 

        teaching English. They bring a wealth of knowledge and expertise to the
        classroom, ensuring that every lesson is engaging, effective, and tailored to 
        your unique learning style.
    </p>
    
    <p>2. Comprehensive Curriculum
      We offer a comprehensive curriculum that covers all aspects of the English language, 
      from grammar and vocabulary to conversational skills and fluency. Whether you're a 
      beginner or an advanced learner, our courses are designed to meet your specific needs.
  </p>
  <p>3. Small Class Sizes
      We believe in personalized learning. Our small class sizes allow for individualized 
      attention, enabling you to progress at your own pace and receive the support you need to succeed.
  </p> 
  <p>4. Immersive Learning Environment
      Immerse yourself in the English language and culture. Our school provides an 
      immersive learning environment where you'll not only learn the language but also gain 
      insights into English-speaking cultures from around the world.
  </p>
  <p>
  gone on to excel in their careers, travel the world, and communicate confidently
  in English-speaking environments. Your success story could be next.
  </p>

  <p><h3>Join Us Today!</h3></p>
        </div>
  </div>
      
      <div className="image-container">
        {/* Include images or videos here */}
        <h1>Testimonials</h1>
         <Testimonials/>
      </div>

      <div className="image-container">
        {/* Include images or videos here */}
        <h1>Courses Offered</h1>
          <Testimonials/>   {/*To be chenged with courses offered, new section must be created */}
      </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default AboutUs;

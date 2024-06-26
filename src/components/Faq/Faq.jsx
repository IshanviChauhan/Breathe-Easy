import React, { useState } from 'react';
import './faq.css';

const FaqItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="content_container">
      <div className="faq_header" onClick={handleClick}>
        <h3>{question}</h3>
        <span className={`open ${isActive ? '' : 'active'}`}>+</span>
        <span className={`close ${isActive ? 'active' : ''}`}>-</span>
      </div>
      <div className={`answer_content ${isActive ? 'active' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: 'How do I know the level of the pollution problem in my community?',
      answer: 'Many cities have implemented monitoring networks that continuously measure air pollutants as part of their air quality management systems. Many regularly report an Air Quality Index (AQI) designed for public information purposes that is easy to interpret, and often color-coded, to warn of dangerous levels of air pollution. The information is accessible through websites, newspapers, and apps. Countries define their own indices based on their own air quality standards. Therefore, they are not comparable between countries. There are also a wide variety of AQIs available globally, which are also not readily comparable.'
    },
    {
      question: 'What can I do to improve Air Quality in my community?',
      answer: 'Some of the things individuals can do to reduce their personal contribution to air pollution are: 1: Choose clean modes of transport when available (e.g. public transport, cycling or walking rather than private cars or motorbikes). 2: If you\'re considering buying a car, look at its fuel economy, nitrogen dioxide emissions, and check the real-world emissions. Buying a hybrid or electric vehicle or smaller engine capacity vehicles will also help to cut down your contributions to emissions. 3: If you have a car, ensure it is serviced regularly to minimize its contribution to air pollution. 4: Use clean fuels and technologies for cooking, lighting and heating. 5: Use renewable energy sources wherever possible. 6: Stop burning household and agricultural waste.'
    },
    {
      question: 'What is the role of Air Quality monitoring in Air Quality management?',
      answer: 'Countries face several challenges when addressing air quality. The cost of certified monitoring equipment, as well as regular calibration and maintenance, can be a heavy burden to many local authorities and national governments. It is important to note that the cost of air quality monitoring is much lower than the cost of air pollution reduction, the former being a public investment and the latter a private investment. It therefore makes sense for national governments and cities in developing countries to prioritize and invest in the establishment, operation, and maintenance of ground-level air quality monitoring networks, to generate reliable data on air quality.'
    },
    {
      question: 'What actions can Businesses and Industry take to reduce Air Pollution?',
      answer: 'Businesses and industry have a key role to play in reducing air pollution, since many of their activities produce different types of air pollutants. The private sector can contribute to air pollution reduction through its various operations and supply chains across different sectors. Pollution sources from the private sector range from burning fuels, to distribution and delivery vehicles. Since air pollution also contributes to climate change, companies that pledge to reduce their air pollution emissions can simultaneously reduce their carbon footprint.'
    },
  ];

  return (
    <div>
      <div className="faqs_container">
        <h2>Frequently Asked Questions</h2>
        <div className="question_container">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

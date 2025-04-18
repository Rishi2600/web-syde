'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqItems = [
  {
    question: "Which software development services do you provide?",
    answer: "Our main services include UI/UX design, graphic design, mobile app development, web development, CTO as a service, business analytics, and DevOps services. Usually, when we begin a project, we work on it from start to finish — conduct a business analysis, design an interface, develop and test it, release the product and support it as long as the client needs. If you need any of the services separately, it’s not a problem.",
  },
  {
    question: "What is your software development company’s pricing policy? How much do your services cost?",
    answer: `The cost of software development is influenced by various factors, including the type of application (whether web or mobile), the technologies employed, the number and complexity of features, and the project timeline.
    Our average prices for web development are $30,000-$60,000+, landing pages might cost around $2000-$5000+, while simple websites can cost $5000-$8000+. As for mobile app development, it can be around $25,000-$60,000+. All these prices are very approximate and based on our previous projects. To get an estimate for your project, please contact our manager.`,
  },
  {
    question: "How long does it take you to develop a digital product?",
    answer: "The software development time depends on the number and complexity of features we need to develop for your project. If we’re talking about creating an MVP (minimum viable product), our dedicated development team can launch it in 1-3 months",
  },
  {
    question: "What is your experience with custom software development?",
    answer: "Our software development company has 17+ years of experience in designing and developing products for different industries. You can always check our custom software development cases on our website.",
  },
  {
    question: "Who is on your dedicated development team?",
    answer: "There are 50+ specialists in our software development company, including UI/UX designers, developers, and DevOps engineers. Our usual project team consists of a manager, a designer, a frontend developer, and a backend developer. If the project requires, we can dedicate more specialists.",
  },
  {
    question: "Can you sign an NDA?",
    answer: "Sure! Your privacy is our priority — if you’re worried about sensitive details being disclosed during our custom software development process, we can sign an NDA.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="bg-primary text-white py-20 max-w-5xl">
        <div className='container lg:flex lg:justify-between'>
            <div>
                <h2 className="text-4xl font-bold mb-12">FAQ</h2>
            </div>
            <div className="lg:w-2/3 -mr-60 space-y-6">
                {faqItems.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                    <div key={index} className="border-b border-white/10 pb-6">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-start justify-between text-left focus:outline-none"
                    >
                        <div className="flex gap-6">
                        {/* <span className="text-red-500 text-4xl font-normal leading-none">+</span> */}

{/* TODO: ANIMATE THIS LATER ON  */}
                    <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="text-red-500 text-4xl font-normal leading-none select-none inline-block origin-center"
                    >
                    +
                    </motion.span>

                        <span className="text-xl md:text-2xl font-medium">
                            {item.question}
                        </span>
                        </div>
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                            className=" pl-12 text-secondary lg:text-sm md:text-lg overflow-hidden"
                        >
                            {item.answer}
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                );
                })}
            </div>
        </div>

    </section>
  );
}

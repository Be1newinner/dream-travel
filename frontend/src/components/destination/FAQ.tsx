"use client"
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData?: FAQItem[];
}

export default function FAQ({ faqData = [] }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqData || faqData.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-blue-500 rounded-xl shadow-sm text-lg overflow-hidden">
            <button onClick={() => toggleFAQ(index)} className="w-full text-left p-4 font-medium flex justify-between items-center">
              {item.question}
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="p-4 border-t text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
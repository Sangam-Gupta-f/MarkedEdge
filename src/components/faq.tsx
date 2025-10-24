'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Why should I choose AdcureMedia over other agencies?",
      answer: "We provide fast responses, honest approach, clear reporting, and exact solutions tailored to your business needs."
    },
    {
      question: "What sets AdcureMedia apart from the competition?",
      answer: "Our team combines expertise with personalized service, ensuring your brand gets the attention and results it deserves."
    },
    {
      question: "How does AdcureMedia ensure accurate reporting?",
      answer: "We use advanced analytics tools and provide transparent, real-time reporting so you always know how your campaigns are performing."
    }
  ]

  return (
    <section className="py-20 bg-purple-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-12">
          <h2 className="text-5xl font-bold text-center text-black mb-12">Need Help?</h2>

          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-black text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t pt-8">
            <p className="text-center text-gray-700">
              Still Have A Question? <a href="#" className="font-bold text-black underline hover:text-gray-600">Chat With Our Experts</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

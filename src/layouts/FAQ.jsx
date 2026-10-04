
import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "Can I Buy an AWS Account Online?",
    answer:
      "Yes, you can purchase an AWS account online. Choose the account that suits your requirements and follow the available purchase process.",
  },
  {
    question: "What Is Required to Buy an AWS Account?",
    answer:
      "You need to provide the required information during the purchase process. Make sure all information provided is accurate and complete.",
  },
  {
    question: "How Does AWS Account Delivery Work?",
    answer:
      "After your payment has been confirmed, the account details will be delivered according to the delivery process provided by the seller.",
  },
  {
    question: "Do You Provide Customer Support?",
    answer:
      "Yes. Customer support is available to help you with questions or problems related to your order.",
  },
  {
    question: "What Is Your Refund Policy?",
    answer:
      "Refunds are handled according to the applicable refund policy. Please contact customer support if you have an issue with your order.",
  },
  {
    question: "What Payment Methods Do You Accept?",
    answer:
      "We accept several payment methods depending on the available options at checkout.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-6 py-10">
      <div className="mx-auto max-w-[1050px]">

        {/* Title */}
        <h2 className="mb-8 text-[30px] font-bold leading-tight text-black">
          Frequently Asked Questions
        </h2>

        {/* FAQ */}
        <div className="w-full">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-300"
              >
                {/* Question */}
                <button
                  onClick={() => handleToggle(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-7
                    py-6
                    text-left
                    transition
                    duration-200
                    hover:bg-gray-50
                  "
                >
                  <span className="text-[14px] font-semibold text-black">
                    {faq.question}
                  </span>

                  <span className="ml-4 shrink-0 text-black">
                    {isOpen ? (
                      <FiChevronDown size={18} />
                    ) : (
                      <FiChevronRight size={18} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-6 pr-16 text-sm leading-6 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
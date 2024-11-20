import { SectionLayout } from './section-layout';
import { useState } from 'react';

export const FAQSection = () => {
  const faqAccordionInfo = [
    {
      question: 'Q. 사주 운세를 확인하고 싶은데, 비용은 무료인가요?',
      answer:
        '첫 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저쩌구입니다.\n첫 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저쩌구입니다.',
    },
    {
      question: 'Q. 어떤 기술이 활용되었나요?',
      answer:
        '두 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저쩌구입니다.\n두 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저쩌구입니다.',
    },
    {
      question:
        'Q. 세 번째 질문입니다. 한 줄까지 들어갈 수 있습니다. 그 이상은 말줄임표 처리합니다. 바로 이렇게... 이렇게... 이렇게... 이렇게... 이렇게...',
      answer:
        '세 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저쩌구입니다.\n세 번째 질문에 대한 답변입니다. 답변 내용은 어쩌구저쩌구입니다.',
    },
  ];

  return (
    <SectionLayout>
      <div className="w-full h-full flex flex-col gap-[80px] mobile:gap-[70px]">
        <h3 className="text-left text-4xl mobile:text-3xl nanum-extra-bold">
          FAQs
        </h3>
        <div className="flex flex-col gap-[30px] justify-center">
          {faqAccordionInfo.map((accordion) => (
            <FAQAccordion
              key={accordion.question}
              question={accordion.question}
              answer={accordion.answer}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-xl px-[50px] py-10 mobile:px-[10px] mobile:py-5 mobile:gap-0 shadow-2xl w-full gap-5">
      <div className="flex justify-between items-center gap-5">
        <p className="text-xl mobile:text-sm font-bold truncate">{question}</p>
        <button
          className="rounded-full shadow-lg transition"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            className={`transition-transform transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
          >
            <circle
              className="transition"
              cx="25.6691"
              cy="25.3309"
              r="25.3309"
              fill={!isOpen ? '#FFFFFF' : '#6F6C90'}
            />
            <path
              className="transition"
              d="M17.4125 22.2212L25.6691 30.4405L33.9257 22.2212"
              stroke={!isOpen ? '#6F6C90' : '#FFFFFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="text-lg mobile:text-xs w-full text-left mt-4">{answer}</p>
      </div>
    </div>
  );
};

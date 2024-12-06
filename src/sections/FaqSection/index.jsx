import './faqSection.scss';
import FAQ from './../../components/Faq';
import { useTranslation } from 'react-i18next';

const faqsData = [
  {
    questionKey: "faq1_question",
    answerKey: "faq1_answer"
  },
  {
    questionKey: "faq2_question",
    answerKey: "faq2_answer"
  },
  {
    questionKey: "faq3_question",
    answerKey: "faq3_answer"
  },
  {
    questionKey: "faq4_question",
    answerKey: "faq4_answer"
  },
  {
    questionKey: "faq5_question",
    answerKey: "faq5_answer"
  },
  {
    questionKey: "faq6_question",
    answerKey: "faq6_answer"
  }
];

const FaqSection = () => {
  const { t } = useTranslation();

  const translatedFaqs = faqsData.map(faq => ({
    question: t(faq.questionKey),
    answer: t(faq.answerKey)
  }));

  return (
    <div className="container faqSection" id="faq">
      <h2 className='faqSection-title'>{t('faq.title')}</h2>
      <FAQ faqs={translatedFaqs} />
    </div>
  );
};

export default FaqSection;

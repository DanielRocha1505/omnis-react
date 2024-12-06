import React from 'react';
import './faq.scss';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useTranslation } from 'react-i18next';

const FAQ = ({ faqs }) => {
  const { t } = useTranslation();

  return (
    <div className="faq">
      <Accordion activeIndex={0}>
        <h2>{t('faq.title')}</h2>
        {faqs.map((faq, index) => (
          <AccordionTab key={index} header={t(`faq.faq${index + 1}_question`)}>
            <p className="m-0">{t(`faq.faq${index + 1}_answer`)}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;

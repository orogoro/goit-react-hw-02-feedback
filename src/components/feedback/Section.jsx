import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackFormTitle } from './Feedback.styled';

export default function Section({ title, children }) {
  return (
    <FeedbackSection>
      <FeedbackFormTitle>{title}</FeedbackFormTitle>
      {children}
    </FeedbackSection>
  );
}

Section.protoTypes = {
  title: PropTypes.string.isRequired,
};

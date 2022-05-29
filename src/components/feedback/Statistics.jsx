import PropTypes from 'prop-types';
import { StatisticsList } from './Feedback.styled';

export default function FeedbackOptions({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        Positive feedback:
        {total === 0 ? 100 : Math.round(positivePercentage)}%
      </li>
    </StatisticsList>
  );
}

FeedbackOptions.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

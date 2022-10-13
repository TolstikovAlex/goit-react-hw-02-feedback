import PropTypes from 'prop-types';
import { StatsRow, StatsWrapper } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total !== 0 && (
        <StatsWrapper>
          <StatsRow>Good: {good}</StatsRow>
          <StatsRow>Neutral: {neutral}</StatsRow>
          <StatsRow>Bad: {bad}</StatsRow>
          <StatsRow>Total: {total}</StatsRow>
          <StatsRow>Positive feedback: {positivePercentage}%</StatsRow>
        </StatsWrapper>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

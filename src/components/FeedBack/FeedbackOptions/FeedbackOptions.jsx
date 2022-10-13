import PropTypes from 'prop-types';
import { Btn } from './FeedcackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionName = options.map(str => str[0].toUpperCase() + str.slice(1));
  return (
    <>
      {options.map((option, i) => (
        <Btn type="button" onClick={() => onLeaveFeedback(option)} key={option}>
          {optionName[i]}
        </Btn>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

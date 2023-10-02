import css from '../Feedback.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div
      className={`btn-group ${css.feedbackButtons}`}
      role="group"
      aria-label="Basic mixed styles example"
    >
      {options.map(option => {
        const classes = ['btn-success', 'btn-warning', 'btn-danger'];

        return (
          <button
            key={option}
            name={option}
            type="button"
            className={`btn ${classes[options.indexOf(option)]}`}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

import css from '../../Feedback.module.css';
import PropTypes from 'prop-types';

function StatisticItem({ text, value }) {
  return (
    <li className={css.statisticsItem}>
      {text}: <span>{value}</span>
    </li>
  );
}

export default StatisticItem;

StatisticItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

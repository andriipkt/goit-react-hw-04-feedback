import StatisticItem from './StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

function Statistics(data) {
  const dataEntries = Object.entries(data);

  return (
    <>
      <h2>Statistics</h2>

      <ul>
        {dataEntries.map(([key, value]) => (
          <StatisticItem
            key={key}
            text={key}
            value={key === 'positivePercentage' ? `${value}%` : `${value}`}
          />
        ))}
      </ul>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

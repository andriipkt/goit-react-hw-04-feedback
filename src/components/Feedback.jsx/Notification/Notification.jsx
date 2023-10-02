import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <p
      style={{
        fontSize: '26px',
        fontWeight: 600,
        color: 'orange',
      }}
    >
      {message}
    </p>
  );
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

import css from '../Feedback.module.css';
import PropTypes from 'prop-types';

function Section({ children, title }) {
  return (
    <section className={`container ${css.section}`}>
      <h2 className={css.feedbackTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

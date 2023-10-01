import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function Feedback() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleOnFeedbackClick = name => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();
    const positiveFeedbacks = feedback.good;

    if (totalFeedbacks === 0) {
      return 0;
    }

    const percentage = (positiveFeedbacks / totalFeedbacks) * 100;
    return Math.round(percentage);
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleOnFeedbackClick}
      />

      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
}

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleOnFeedbackClick = event => {
//     this.setState(currState => {
//       const name = event.target.name;

//       return { [name]: currState[name] + 1 };
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const totalFeedbacks = this.countTotalFeedback();
//     const positiveFeedbacks = this.state.good;

//     if (totalFeedbacks === 0) {
//       return 0;
//     }

//     const percentage = (positiveFeedbacks / totalFeedbacks) * 100;
//     return Math.round(percentage);
//   }

//   render() {
//     return (
//       <Section title={'Please leave feedback'}>
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.handleOnFeedbackClick}
//         />

//         {this.countTotalFeedback() === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         )}
//       </Section>
//     );
//   }
// }

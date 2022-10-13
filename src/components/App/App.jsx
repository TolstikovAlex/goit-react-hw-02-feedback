import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedBack/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/FeedBack/Section/Section';
import { Statistics } from 'components/FeedBack/Statistics/Statistics';
import { Notification } from 'components/FeedBack/Notification/Notification';
import { Wrapper } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((sum, el) => sum + el, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.floor((this.state.good / total) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() !== 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Wrapper>
    );
  }
}

export default App;

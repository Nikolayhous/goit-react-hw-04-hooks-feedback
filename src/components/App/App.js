import { Component } from 'react';
import Container from '../Container';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = e => {
        const btnValue = e.target.value;
        this.setState(prevState => ({
            ...prevState,
            [btnValue]: prevState[btnValue] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        let totalFeedback = this.countTotalFeedback();
        return totalFeedback
            ? Math.round((this.state.good / totalFeedback) * 100)
            : 0;
    };

    render() {
        const countTotalFeedback = this.countTotalFeedback();
        const countPositiveFeedbackPercentage =
            this.countPositiveFeedbackPercentage();
        const { onLeaveFeedback } = this;
        const { good, neutral, bad } = this.state;
        return (
            <Container>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={onLeaveFeedback}
                    />
                </Section>
                <Section title={'Statistical'}>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback}
                        positivePercentage={countPositiveFeedbackPercentage}
                    />
                </Section>
            </Container>
        );
    }
}

export default App;

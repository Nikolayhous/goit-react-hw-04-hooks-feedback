import { useState } from 'react';
import Container from '../Container';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = option => {
        switch (option) {
            case 'good':
                setGood(good => good + 1);
                break;
            case 'neutral':
                setNeutral(neutral => neutral + 1);
                break;
            case 'bad':
                setBad(bad => bad + 1);
                break;

            default:
                return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100 || 0);
    };

    return (
        <Container>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>
            <Section title={'Statistical'}>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            </Section>
        </Container>
    );
}

export default App;

import { useState } from 'react';
import Container from '../Container';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addLeaveFeedback = option => {
        switch (option) {
            case 'good':
                setGood(prevGood => prevGood + 1);
                break;
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case 'bad':
                setBad(prevBad => prevBad + 1);
                break;
            default:
                return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        let totalFeedback = countTotalFeedback();
        return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    };

    return (
        <Container>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={addLeaveFeedback}
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

import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className={s.feedbackBtn}>
            {options.map(option => (
                <button
                    key={option}
                    className={s.btn}
                    value={option}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array,
};

export default FeedbackOptions;

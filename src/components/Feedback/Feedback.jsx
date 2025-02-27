export default function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
    return (
        <>
            <p>{`Good: ${good}`}</p>
            <p>{`Neutral: ${neutral}`}</p>
            <p>{`Bad: ${bad}`}</p>
            <p>{`Total: ${totalFeedback}`}</p>
            <p>{`Positive: ${positiveFeedback}%`}</p>
        </>
    );
}
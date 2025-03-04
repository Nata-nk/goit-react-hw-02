import css from './Options.module.css'


export default function Options({ onClick, totalFeedback, reset }) {
    return (
        <>
            <button onClick={() => {
                onClick('good')
            }} className={css.button}>Good</button>
            <button onClick={() => {
                onClick('neutral')
            }} className={css.button}>Neutral</button>
            <button onClick={() => {
                onClick('bad')
            }} className={css.button}>Bad</button>
            {totalFeedback >= 1 && <button onClick={reset}>Reset</button>}
        </>
    )
}


function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    // This is kind of new to me the progress element. I have never used it before.
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)} // if answer is not null then add 1 to index, Number(true) === 1, Number(false) === 0
      ></progress>

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;

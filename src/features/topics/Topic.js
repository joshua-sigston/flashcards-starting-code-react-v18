import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, Navigate } from 'react-router-dom';
import ROUTES from '../../app/routes';
// import selectors

export default function Topic() {
  const topics = useSelector((state) => state.topics.topics); // replace with selector
  const quizzes = useSelector((state) => state.quizzes.quizzes); // replace with selector
  const { topicId } = useParams();
  const topic = topics.find((topic) => topic.id === topicId);

  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />;
  }

  let quizzesForTopic = [];

  // push associated quizes (i.e. quizzes whos topic is math) into an array of quizes to display.
  quizzes.forEach((quiz) => {
    if (quiz.topicId === topic.name) {
      quizzesForTopic.push(quiz);
    }
  });

  // const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {!quizzesForTopic ? (
          <p>No quizzes found</p>
        ) : (
          quizzesForTopic.map((quiz) => (
            <li className="quiz" key={quiz.id}>
              <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
            </li>
          ))
        )}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}

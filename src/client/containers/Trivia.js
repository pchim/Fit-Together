import { connect } from 'react-redux';
import Trivia from '../components/Dashboard/Items/Trivia/Trivia';
import { 
  selectOption, 
  fetchQuizQuestions, 
  receiveCurrentQuestion, 
  updateScore,
  updateQuizStatus,
  updateUserPoints,
  updateIndex,
  fetchLeaderboardRanks,
  updateQuestionStatus
} from '../actions';

const mapStateToProps = ({ questions, question, selectedOption, score, quizStatus, index, leaderboard, questionStatus }) => 
  ({ questions, question, selectedOption, score, quizStatus, index, leaderboard, questionStatus });

const mapDispatchToProps = (dispatch) => ({
  selectOption: (option) => dispatch(selectOption(option)),
  fetchQuizQuestions: (category) => dispatch(fetchQuizQuestions(category)),
  receiveCurrentQuestion: (question) => dispatch(receiveCurrentQuestion(question)),
  updateScore: (score) => dispatch(updateScore(score)),
  updateQuizStatus: (status) => dispatch(updateQuizStatus(status)),
  updateUserPoints: (points) => dispatch(updateUserPoints(points)),
  updateIndex: (index) => dispatch(updateIndex(index)),
  fetchLeaderboardRanks: () => dispatch(fetchLeaderboardRanks()),
  updateQuestionStatus: (status) => dispatch(updateQuestionStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);

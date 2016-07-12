import { connect } from 'react-redux';
import Logbook from '../components/Dashboard/Items/Logbook/Logbook';
import { addMem, addExercise, addFood, addSleep } from '../actions';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  addMem: (obj) => dispatch(addMem(obj)),
  addExercise: (obj) => {
    return dispatch(addExercise(obj));
  },
  addFood: (obj) => dispatch(addFood(obj)),
  addSleep: (obj) => dispatch(addSleep(obj))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Logbook);

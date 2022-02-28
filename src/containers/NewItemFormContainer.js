import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const mapDispatchToProps = {
  onSubmit: addNewItem
};

//* Solution 2
// const mapDispatchToProps = {
//   onSubmit: (name,price) => addNewItem(name,price)
// };

//* Solution 2
// const mapDispatchToProps = (dispatch)=>{
//   onSubmit: (name,price) => dispatch(addNewItem(name,price))
// };

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);

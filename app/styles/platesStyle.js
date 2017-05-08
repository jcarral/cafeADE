import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item : {
    backgroundColor: '#FFF8E1',
    borderColor: '#FFF8E1',
    borderBottomColor: '#FFECB3',
    borderWidth: 1,
    padding: 10
  },
  itemInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  itemInfoText:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  search: {
    backgroundColor: 'white'
  },
  ingredientList: {
    fontSize: 10,
    color: 'gray'
  },
  ingredient: {
    margin: 5
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#F3EEE9',

  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#F3EEE9',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFF8E1',
    borderColor: '#FFF8E1',
    borderBottomColor: '#FFECB3',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },
  date: {
    fontSize: 10,
    color: '#7a7a7a',
    marginRight: 10
  }
});

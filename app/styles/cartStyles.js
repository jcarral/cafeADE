import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '90%',
    backgroundColor: '#F3EEE9',
  },
  itemRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF8E1',
    borderColor: '#FFF8E1',
    borderBottomColor: '#FFECB3',
    borderWidth: 1,

  },
  row:{
    flexDirection: 'row',
  },
  info:{
    flexDirection: 'column',
    justifyContent: 'center'
  },
  takeaway:{
    marginLeft: 11,
    marginRight: 11,
    marginTop: -6,
    backgroundColor: 'white',
    padding: 10
  },
  advice:{
    fontSize: 9,
    color: '#8e8e8e',
    textAlign: 'center'
  },
  textarea: {
    backgroundColor: 'white',
    height: 120,
    marginRight: 11,
    marginLeft: 11,
    padding: 10,
    marginBottom: 10
  },
  label:{
    marginLeft: 11,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5
  },
  totalPrice: {
    marginRight: 11,
    marginLeft: 11,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FF9800',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button:{
    backgroundColor: '#2196F3',
    margin: 11
  },
  list:{
    //margin: 11,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  counter:{
    flexDirection: 'row',
    alignItems: 'center'

  },
  counterBtns:{
    flexDirection: 'column',
    borderColor: '#f6f6f6',
    borderWidth: 0.5
  },
  countBtn:{
    backgroundColor: 'white',
    borderColor: 'red',
    borderColor: '#f6f6f6',
    borderWidth: 0.5
  },
  counterNumb:{
    fontSize: 24,
    backgroundColor: 'white',
    width: 40,
    height: '100%',
    lineHeight: 50,
    textAlign: 'center',
    borderColor: '#f6f6f6',
    borderWidth: 0.5,
    borderRightWidth: 0
  },
  itemIcon:{
    backgroundColor: 'red',
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC107',
    borderWidth: 1,
    borderColor: '#FFB300',
    elevation: 2
  }
});

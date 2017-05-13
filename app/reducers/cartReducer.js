import * as c from '../constants/cartTypes';

export default function cartReducer(state = [], action) {

	switch (action.type) {
		case c.INCREMENT_PLATE:
			return incrementPlate(state, action.payload);
		case c.DECREMENT_PLATE:
			return decrementPlate(state, action.payload);
		case c.ADD_PLATE:
			return addPlateToList(state, action.payload);
		case c.RESET_CART:
			return [];
		default:
			return state;
	}
};

const incrementPlate = (state, data) => (
  state.map((plate) => {
    if(data.id !== plate.id || data.category !== plate.category) return plate;
    return {
      ...plate,
      quantity: plate.quantity + 1
    };
  })
);

const decrementPlate = (state, data) => {
  if(data.quantity === 0) return state.filter((plate) => data.id !== plate.id || data.category !== plate.category);
  return state.map((plate) => {
    if(data.id !== plate.id || data.category !== plate.category) return plate;
    return {
      ...plate,
      quantity: plate.quantity - 1
    };
  })
};

const addPlateToList = (state, plate) => {
	let exists = false;

	let newList = state.map((current) => {
		if(current.id === plate.id && current.category === plate.category){
			exists = true;
			return {
				...current,
				quantity : current.quantity + 1
			};
		}
		return current;
	});

	if(exists) return newList;
	else return [...newList, plate];
};


// const debugDefaultState = [
//   {
//     id: '0',
//     category: 'bocadillos',
//     name: 'bocadillo1',
//     price: '1.99',
//     quantity: 2
//   },
//   {
//     id: '1',
//     category: 'otros',
//     name: 'adf',
//     price: '1.99',
//     quantity: 3
//   },
//   {
//     id: '1',
//     category: 'bocadillos',
//     name: 'bocadillo222',
//     price: '1.99',
//     quantity: 1
//   },
//   {
//     id: '4',
//     category: 'otros',
//     name: 'fvv',
//     price: '1.99',
//     quantity: 2
//   }
// ];
//

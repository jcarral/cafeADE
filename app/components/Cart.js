import React, {PropTypes} from 'react';
import {Text, View, FlatList, TextInput} from 'react-native';
import {Button, Icon, CheckBox} from 'react-native-elements';

import css from '../styles/cartStyles';

const Cart = ({
	cart,
	handleIncrementPlate,
	handleDecrementPlate,
	handleConfirmCard,
	price,
	takeaway,
	handleToggleTakeAway,
	handleAddress
}) => (
	<View>
		<FlatList data={cart} renderItem={({item}) => _renderItem(item, handleIncrementPlate, handleDecrementPlate)} keyExtractor={(item, index) => index}/>
		<View>
			<View>
				<CheckBox checked={takeaway} title='To take away' iconType='material' checkedIcon='check-box' uncheckedIcon='crop-square' checkedColor='#4c951f' onPress={handleToggleTakeAway}/>
				<Text>{price}</Text>
			</View>
			{takeaway && <CartTakeAway handleAddress={handleAddress}/>}
			<Button title='Confirm card' onPress={() => handleConfirmCard(price)}/>
		</View>
	</View>
);

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
	handleIncrementPlate: PropTypes.func.isRequired,
	handleDecrementPlate: PropTypes.func.isRequired,
	handleConfirmCard: PropTypes.func.isRequired,
	takeaway: PropTypes.bool.isRequired,
	handleToggleTakeAway: PropTypes.func.isRequired,
	handleAddress: PropTypes.func.isRequired
}
export default Cart;

// CART PLATE ITEM

const _renderItem = (item, handleIncrementPlate, handleDecrementPlate) => (<CartPlateItem plate={item} handleIncrementPlate={handleIncrementPlate} handleDecrementPlate={handleDecrementPlate}/>);

const CartPlateItem = ({plate, handleIncrementPlate, handleDecrementPlate}) => (
	<View style={css.row}>
		<Icon name="restaurant" size={20}/>
		<View style={css.info}>
			<Text>{plate.name}</Text>
			<Text>{plate.price}</Text>
		</View>
		<Counter value={plate.quantity} handleIncrementPlate={handleIncrementPlate} handleDecrementPlate={handleDecrementPlate} id={plate.id} category={plate.category}/>
	</View>
);

CartPlateItem.propTypes = {
	plate: PropTypes.object.isRequired,
	handleIncrementPlate: PropTypes.func.isRequired,
	handleDecrementPlate: PropTypes.func.isRequired
};

const Counter = ({value, handleIncrementPlate, handleDecrementPlate, id, category}) => (
	<View>
		<Icon name="add" onPress={() => handleIncrementPlate(id, category)}/>
		<Text>{value}</Text>
		<Icon name="remove" onPress={() => handleDecrementPlate(id, category, value)}/>
	</View>
);

Counter.propTypes = {
	handleIncrementPlate: PropTypes.func.isRequired,
	handleDecrementPlate: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired
};

//CART ADDRESS Component

const CartTakeAway = ({handleAddress}) => (
	<View>
		<Text>
			Address:
		</Text>
		<TextInput style={{
			height: 40
		}} onChangeText={handleAddress} placeholder="Enter the address"/>
		<Text>
			** La opción de pedido a domicilio añade un sobrecoste del 5%
		</Text>
	</View>
);

CartTakeAway.propTypes = {
	handleAddress: PropTypes.func.isRequired
};

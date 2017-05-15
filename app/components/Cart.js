import React, {PropTypes} from 'react';
import {Text, View, FlatList, TextInput, ScrollView} from 'react-native';
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
	handleComment,
	handleAddress
}) => (
	<ScrollView style={css.container}>
		<View style={css.list}>
			{cart.length >= 0 && <FlatList data={cart} renderItem={({item}) => _renderItem(item, handleIncrementPlate, handleDecrementPlate)} keyExtractor={(item, index) => index}/>}
			{cart.length === 0 && <Text> No hay elementos en la carta! Selecciona un plato</Text>}
		</View>
		<View>
			<View>
				<CheckBox checked={takeaway} title='Para llevar!' iconType='material' checkedIcon='check-box' uncheckedIcon='crop-square' checkedColor='#4c951f' onPress={handleToggleTakeAway}/>
				{takeaway && <CartTakeAway handleAddress={handleAddress}/>}

			</View>

			<Text style={css.label}>Comentarios adicionales: </Text>
			<TextInput
				multiline = {true}
				numberOfLines = {4}
				style={css.textarea}
				onChangeText={handleComment}
				placeholder='Introduce algún comentario adicional aquí...'
				/>
			<View style={css.totalPrice}>
				<Text> Precio total: </Text>
				<Text>{price} €</Text>
			</View>
			<Button buttonStyle={css.button} title='Confirmar pedido' onPress={() => handleConfirmCard(price)}/>
		</View>
	</ScrollView>
);

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
	handleIncrementPlate: PropTypes.func.isRequired,
	handleDecrementPlate: PropTypes.func.isRequired,
	handleConfirmCard: PropTypes.func.isRequired,
	takeaway: PropTypes.bool.isRequired,
	handleToggleTakeAway: PropTypes.func.isRequired,
	handleAddress: PropTypes.func.isRequired,
	handleComment: PropTypes.func.isRequired
}
export default Cart;

// CART PLATE ITEM

const _renderItem = (item, handleIncrementPlate, handleDecrementPlate) => (<CartPlateItem plate={item} handleIncrementPlate={handleIncrementPlate} handleDecrementPlate={handleDecrementPlate}/>);

const CartPlateItem = ({plate, handleIncrementPlate, handleDecrementPlate}) => (
	<View style={css.itemRow}>
		<View style={css.row}>
			<Icon style={css.itemIcon} name="restaurant" size={20}/>
			<View style={css.info}>
				<Text style={css.label}>{plate.name}</Text>
				<Text style={css.label}>{plate.price}€</Text>
			</View>
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
	<View style={css.counter}>

		<Text style={css.counterNumb}>{value}</Text>
		<View style={css.counterBtns}>
			<Icon style={css.countBtn} name="add" onPress={() => handleIncrementPlate(id, category)}/>
			<Icon style={css.countBtn} name="remove" onPress={() => handleDecrementPlate(id, category, value)}/>
		</View>
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
	<View style={css.takeaway}>
		<Text>
			Dirección:
		</Text>
		<TextInput style={{
			height: 40
		}} onChangeText={handleAddress} placeholder="Enter the address"/>
	<Text style={css.advice}>
			** La opción de pedido a domicilio añade un sobrecoste del 5% **
		</Text>
	</View>
);

CartTakeAway.propTypes = {
	handleAddress: PropTypes.func.isRequired
};

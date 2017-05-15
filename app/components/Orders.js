import React, {PropTypes} from 'react';
import {View, Text, FlatList, Modal} from 'react-native';
import {Icon, Card, Button} from 'react-native-elements';


import css from '../styles/ordersStyles';

const Orders = ({
	orders,
	handleOpenModal,
	handleCloseModal,
	modal,
	currentOrder,
	handleFinishOrder
}) => (
	<View style={css.container}>
		<OrderModal visible={modal} handleCloseModal={handleCloseModal} data={currentOrder} handleFinishOrder={handleFinishOrder}/>

		<FlatList data={orders} renderItem={({item}) => _renderItem(item, handleOpenModal)} keyExtractor={(item, index) => index}/>
	</View>
);

Orders.propTypes = {
	orders: PropTypes.array.isRequired,
	handleOpenModal: PropTypes.func.isRequired,
	handleCloseModal: PropTypes.func.isRequired,
	modal: PropTypes.bool.isRequired,
	currentOrder: PropTypes.object.isRequired,
	handleFinishOrder: PropTypes.func.isRequired
};

export default Orders;

//Order item
const OrderItem = ({order, handleOpenModal}) => (
	<View style={css.item}>
		<View style={css.row}>
			<Text>#{order.count}</Text>
			<Text> {order.author} </Text>

		</View>
		<View style={css.row}>
		<Text style={css.date}> {orderTime(order.date)}</Text>
		<Icon onPress={() => handleOpenModal(order)} name='visibility' color='#FF9800'/>
		</View>
	</View>
);

const _renderItem = (item, handleOpenModal) => (<OrderItem order={item} handleOpenModal={handleOpenModal}/>);

OrderItem.propTypes = {
	handleOpenModal: PropTypes.func.isRequired
};

//MODAL CON LISTA DE PEDIDOS
const OrderModal = ({visible, handleCloseModal, data, handleFinishOrder}) => (
	<Modal transparent={false} visible={visible} transparent={true}>
		<Card title={`Pedido #${data.count}`}>
			<Text style={css.label}>
				Platos:
			</Text>
			{Object.keys(data.meals || {}).map((key, i) => (
				<View key={i} style={css.row}>
					<Text>{data.meals[key].name}</Text>
					<Text>x{data.meals[key].quantity}</Text>
				</View>
			))}
			<Text style={css.label}>Precio: </Text>
			<Text>
				{data.price}€
			</Text>
			<Text style={css.label}>Comentarios:</Text>
			<Text>
				{data.comment || 'No hay comentarios para este pedido'}
			</Text>
			<View style={css.row}>
				<Button buttonStyle={{
					backgroundColor: '#F44336',
					marginBottom: 10,
					marginTop: 15
				}} title="Cerrar ventana" onPress={handleCloseModal}/>
				<Button buttonStyle={{
					backgroundColor: '#388a27',
					marginBottom: 10,
					marginTop: 15
				}} title="Finalizar pedido" onPress={() => handleFinishOrder(data)}/>
			</View>
		</Card>
	</Modal>
);

OrderModal.propTypes = {
	visible: PropTypes.bool.isRequired,
	handleCloseModal: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
	handleFinishOrder: PropTypes.func.isRequired
};



const orderTime = (time) => {
	const date = new Date(time);
	const minutes = (date.getMinutes()<10)?'0'+date.getMinutes():date.getMinutes();
	return `${date.getUTCDate()}/${date.getMonth()}/${date.getUTCFullYear()}-${date.getHours()}:${minutes}`;
};

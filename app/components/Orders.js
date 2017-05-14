import React, {PropTypes} from 'react';
import {View, Text, FlatList, Modal} from 'react-native';
import {Icon, Card, Button} from 'react-native-elements';

const Orders = ({
	orders,
	handleOpenModal,
	handleCloseModal,
	modal,
	currentOrder,
	handleFinishOrder
}) => (
	<View>
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
	<View>
		<Text>{order.price}</Text>
		<Icon onPress={() => handleOpenModal(order)} name='visibility' color='#FF9800'/>

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
			<Text>
				Platos:
			</Text>
			{Object.keys(data.meals || {}).map((key, i) => (
				<View key={i}>
					<Text>{data.meals[key].name}</Text>
					<Text>x{data.meals[key].quantity}</Text>
				</View>
			))}
			<Text>Comentarios:</Text>
			<Text>
				{data.comment || 'No hay comentarios para este pedido'}
			</Text>
			<Button buttonStyle={{
				backgroundColor: '#F44336'
			}} title="Cerrar Modal" onPress={handleCloseModal}/>
			<Button buttonStyle={{
				backgroundColor: '#388a27'
			}} title="Finalizar pedido" onPress={() => handleFinishOrder(data)}/>
		</Card>
	</Modal>
);

OrderModal.propTypes = {
	visible: PropTypes.bool.isRequired,
	handleCloseModal: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
	handleFinishOrder: PropTypes.func.isRequired
};

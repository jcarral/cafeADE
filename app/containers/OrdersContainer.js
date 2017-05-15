import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchOrders, finishOrder} from '../actions/orderActions';

import Orders from '../components/Orders';
import LoadingPage from '../components/LoadingPage';

class OrdersContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Pedidos',
    header: null
  });
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			currentOrder: {}
		};

	}

	handleOpenModal = (order) => {
		this.setState({modal: true, currentOrder: order});
	}

  handleCloseModal = () => {
    this.setState({modal: false});
  }

  handleFinishOrder = (order) => {
    this.props.dispatch(finishOrder(order));
    this.handleCloseModal();
  }

	componentDidMount() {
		console.log('Orders:', this.props.orders);
		if (this.props.orders.length === 0)
			this.props.dispatch(fetchOrders());
		}

	render() {
		return (<Orders
      orders={this.props.orders}
      handleOpenModal={this.handleOpenModal}
      handleCloseModal={this.handleCloseModal}
      modal={this.state.modal}
      currentOrder={this.state.currentOrder}
      handleFinishOrder={this.handleFinishOrder}
      />);
		//return (<LoadingPage />);
	}
}

const mapStateToProps = (state, action) => ({loading: state.status.loading, error: state.status.error, orders: state.orders});

export default connect(mapStateToProps)(OrdersContainer);

import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';

import HomepageContainer from './HomepageContainer';
import MealsContainer from './MealsContainer';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';
import CartContainer from './CartContainer';
import MealContainer from './MealContainer';
import ConfirmedContainer from './ConfirmedContainer';
import OrdersContainer from './OrdersContainer';

class AppRouter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const mealsNavigator = StackNavigator({
			Menus: {
				screen: MealsContainer
			},
			Meal: {
				screen: MealContainer
			},
		});

		let userTypeTabs = {
			Home: {
				screen: HomepageContainer,
				navigationOptions: {
					tabBarIcon: ({tintColor}) => <Icon name="menu" size={20} color={tintColor}/>
				}
			},
			Meals: {
				screen: mealsNavigator,
				navigationOptions: {
					tabBarIcon: ({tintColor}) => <Icon name="restaurant" size={20} color={tintColor}/>
				}
			},
			//DELETE

		};
		if (this.props.isLogged) { //TODO: Change to isLogged
			userTypeTabs = {
				...userTypeTabs,
				Cart: {
					screen: CartContainer,
					navigationOptions: {
						tabBarIcon: ({tintColor}) => <Icon name="add-shopping-cart" size={20} color={tintColor}/>
					}
				}
			}
			if(this.props.role === 'empleado'){
				userTypeTabs = {
					...userTypeTabs,
					Orders: {
						screen: OrdersContainer,
						navigationOptions: {
							tabBarIcon: ({tintColor}) => <Icon name="av-timer" size={20} color={tintColor}/>
						}
					}
				}
			}
		} else {
			userTypeTabs = {
				...userTypeTabs,
				Login: {
					screen: LoginContainer,
					navigationOptions: {
						tabBarIcon: ({tintColor}) => <Icon name="person-outline" size={20} color={tintColor}/>
					}
				}
			}
		}
		const TabNavigation = TabNavigator(userTypeTabs, {
			tabBarOptions: {
				activeTintColor: '#e91e63',
				inactiveTintColor: 'white',
				style: {
					backgroundColor: '#FF9800'
				}
			}
		});

		const AppNavigation = StackNavigator({
			Main: {
				screen: TabNavigation
			},
			Login: {
				screen: LoginContainer
			},
			SignUp: {
				screen: SignUpContainer
			},
			Confirm: {
				screen: ConfirmedContainer
			}
		}, {
			headerMode: 'screen'
		})

		return (<AppNavigation/>);
	}
}

const mapStateToProps = (state, action) => ({isLogged: state.status.user.isLogged, role: state.status.user.role});

export default connect(mapStateToProps)(AppRouter);

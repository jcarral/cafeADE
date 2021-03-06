import React, { PropTypes } from 'react';
import { ScrollView, Text, View, ListView, TextInput, FlatList, Modal, Image } from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import Toast, {DURATION} from 'react-native-easy-toast';

import css from '../styles/platesStyle';

const MealView = ({handleSearch,
  currentInput,
  plates,
  title,
  isLogged,
  modalVisible,
  handleOpenModal,
  selectedPlate,
  handleCloseModal,
  handleAddMealToCart,
  currentPage,
  goBack,
  onRef
}) => (
  <View style={css.container}>
    <MealTitle page={currentPage} goBack={goBack} />
    <PlateModal visible={modalVisible} handleCloseModal={handleCloseModal} data={selectedPlate}/>
    <SearchView  handleSearch={handleSearch} currentInput={currentInput}/>
    <PlatesList handleOpenModal={handleOpenModal} plates={plates} isLogged={isLogged} handleAddMealToCart={handleAddMealToCart}/>
    <Toast ref={onRef}/>
  </View>
);

MealView.propTypes = {
 handleSearch: PropTypes.func.isRequired,
 currentInput: PropTypes.string.isRequired,
 plates: PropTypes.array.isRequired,
 title: PropTypes.string.isRequired,
 isLogged: PropTypes.bool.isRequired,
 modalVisible: PropTypes.bool.isRequired,
 handleOpenModal: PropTypes.func.isRequired,
 selectedPlate: PropTypes.object.isRequired,
 handleCloseModal: PropTypes.func.isRequired,
 handleAddMealToCart: PropTypes.func.isRequired,
 goBack: PropTypes.func.isRequired,
 currentPage: PropTypes.string.isRequired
};

export default MealView;


const SearchView = ({handleSearch, currentInput}) => (
  <View style={css.search}>
    <TextInput onChangeText={handleSearch} placeholder="Buscar un plato.." style={{height: 40}}/>
  </View>
);

SearchView.propTypes = {
 handleSearch: PropTypes.func.isRequired,
 currentInput: PropTypes.string.isRequired
};

const PlatesList = ({plates, isLogged, handleOpenModal, handleAddMealToCart}) => {
	return (
		<ScrollView>
      <FlatList
        data={plates}
        renderItem={({item}) => _renderItem(item, isLogged, handleOpenModal, handleAddMealToCart)}
        keyExtractor={(item, index) => index}
        />
		</ScrollView>
	);
};

PlatesList.propTypes = {
  plates: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleAddMealToCart: PropTypes.func.isRequired
};

const PlateListItem = ({plate, isLogged, handleOpenModal, handleAddMealToCart}) => (
  <View style={css.item}>
    <View style={css.itemInfo}>
      <View style={css.itemName}>
        <Text style={css.itemInfoText}>{plate.name}</Text>
        <Text style={css.ingredientList}>{plate.ingredients.join(', ')}</Text>
      </View>
      <View style={css.row}>
        <Text style={css.itemInfoText}>{plate.price}€</Text>
        <Icon onPress={() => handleOpenModal(plate)} name='image' color='#FF9800' size={18} raised/>
        {isLogged && <Icon name="add" onPress={() => handleAddMealToCart(plate.id, plate.name, plate.price)} size={18} raised/>}
      </View>

    </View>


  </View>
);

PlateListItem.propTypes = {
  plate: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleAddMealToCart: PropTypes.func.isRequired
};

const PlateModal = ({visible, handleCloseModal, data}) => {
	const imageURI = {
		uri: data.imgSrc
	};
	return (
		<Modal animationType={"slide"} transparent={false} visible={visible} transparent={true}>
			<Card title={data.name}>
				<Text>{data.desc}</Text>
				<Image style={{
					width: 200,
					height: 200,
          marginTop: 10,
          marginLeft: 60,
          marginBottom: 10
				}} source={imageURI}

        />
				<Button buttonStyle={{
					backgroundColor: '#F44336'
				}} title="Close" onPress={handleCloseModal}/>
			</Card>
		</Modal>
	);
};

PlateModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const MealTitle = ({goBack, page}) => (
  <View style={css.header}>
    <Icon  size={40} name='keyboard-arrow-left' onPress={goBack} />
    <Text style={css.headerTxt}> {page} </Text>
  </View>
);

MealTitle.propTypes = {
  goBack: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
};

const _renderItem = (item, isLogged, handleOpenModal, handleAddMealToCart) =>  (
      <PlateListItem
        plate={item}
        isLogged={isLogged}
        handleOpenModal={handleOpenModal}
        handleAddMealToCart={handleAddMealToCart}
      />
);

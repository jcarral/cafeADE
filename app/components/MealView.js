import React, { PropTypes } from 'react';
import { Text, View, ListView, TextInput, FlatList, Modal, Image } from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';

import css from '../styles/platesStyle';

const MealView = ({handleSearch, currentInput, plates, title, isLogged, modalVisible, handleOpenModal, selectedPlate, handleCloseModal}) => (
  <View style={css.container}>
    <PlateModal visible={modalVisible} handleCloseModal={handleCloseModal} data={selectedPlate}/>
    <SearchView  handleSearch={handleSearch} currentInput={currentInput}/>
    <PlatesList handleOpenModal={handleOpenModal} plates={plates} isLogged={isLogged}/>
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
 handleCloseModal: PropTypes.func.isRequired
};

export default MealView;


const SearchView = ({handleSearch, currentInput}) => (
  <View style={css.search}>
    <TextInput onChangeText={handleSearch} placeholder="Search plate..." style={{height: 40}}/>
  </View>
);

SearchView.propTypes = {
 handleSearch: PropTypes.func.isRequired,
 currentInput: PropTypes.string.isRequired
};

const PlatesList = ({plates, isLogged, handleOpenModal}) => {
	return (
		<View>
      <FlatList
        data={plates}
        renderItem={({item}) => _renderItem(item, isLogged, handleOpenModal)}
        keyExtractor={(item, index) => index}
        />
		</View>
	);
};

PlatesList.propTypes = {
  plates: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired
};

const PlateListItem = ({plate, isLogged, handleOpenModal}) => (
  <View style={css.item}>
    <View style={css.itemInfo}>
      <Text style={css.itemInfoText}>{plate.name}</Text>
      <View style={css.row}>
        <Text style={css.itemInfoText}>{plate.price}€</Text>
        <Icon onPress={() => handleOpenModal(plate)} name='image' color='#FF9800'/>
        {isLogged && <Icon name="add"/>}
      </View>

    </View>

    <Text style={css.ingredientList}>{plate.ingredients.join(', ')}</Text>
  </View>
);

PlateListItem.propTypes = {
  plate: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired
};

const PlateModal = ({visible, handleCloseModal, data}) => {
	const imageURI = {
		uri: data.imgSrc
	};
	console.log('URI:', imageURI);
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



const _renderItem = (item, isLogged, handleOpenModal) =>  (
      <PlateListItem
        plate={item}
        isLogged={isLogged}
        handleOpenModal={handleOpenModal}
      />
);

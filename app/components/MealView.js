import React, { PropTypes } from 'react';
import { Text, View, ListView, Button, TextInput, FlatList } from 'react-native';

import css from '../styles/platesStyle';

const MealView = ({handleSearch, currentInput, plates, title, isLogged}) => (
  <View style={css.container}>
    <SearchView  handleSearch={handleSearch} currentInput={currentInput}/>
    <PlatesList plates={plates} isLogged={isLogged}/>
  </View>
);

MealView.propTypes = {
 handleSearch: PropTypes.func.isRequired,
 currentInput: PropTypes.string.isRequired,
 plates: PropTypes.array.isRequired,
 title: PropTypes.string.isRequired,
 isLogged: PropTypes.bool.isRequired
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

const PlatesList = ({plates, isLogged}) => {
	return (
		<View>
      <FlatList
        data={plates}
        renderItem={({item}) => _renderItem(item, isLogged)}
        keyExtractor={(item, index) => index}
/>
		</View>
	);
};

PlatesList.propTypes = {
  plates: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired
};

const PlateListItem = ({plate, isLogged}) => (
  <View style={css.item}>
    <View style={css.itemInfo}>
      <Text style={css.itemInfoText}>{plate.name}</Text>
      <Text style={css.itemInfoText}>{plate.price}€</Text>
      {isLogged && <Button title='+' />}
    </View>
    <Text style={css.ingredientList}>{plate.ingredients.join(', ')}</Text>
  </View>
);

PlateListItem.propTypes = {
  plate: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired
};

const _renderItem = (item, isLogged) =>  (
      <PlateListItem
        plate={item}
        isLogged={isLogged}
      />
);

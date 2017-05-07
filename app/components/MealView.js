import React, { PropTypes } from 'react';
import { Text, View, ListView, Button, TextInput } from 'react-native';

import mealstyle from '../styles/platesStyle';

const MealView = ({handleSearch, currentInput, plates, title, isLogged}) => (
  <View>
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
  <View style={mealstyle.search}>
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
			{plates.map((plate) => <PlateListItem plate={plate} isLogged={isLogged} />)}
		</View>
	);
};

PlatesList.propTypes = {
  plates: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired
};

const PlateListItem = ({plate, isLogged}) => (
  <View style={mealstyle.item}>
    <View>
      <Text>Nombre plato: {plate.name}</Text>
      <Text>Precio: {plate.price}</Text>
      {isLogged && <Button title='+' />}
    </View>
    <View style={mealstyle.ingredientList}>
      <Text>{plate.ingredients.join(', ')}</Text>
    </View>
  </View>
);

PlateListItem.propTypes = {
  plate: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired
};

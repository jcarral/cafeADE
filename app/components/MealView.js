import React, { PropTypes } from 'react';
import { Text, View, ListView, Button, TextInput } from 'react-native';

const MealView = ({handleSearch, currentInput, plates, title, isLogged}) => (
  <View>
    <SearchView handleSearch={handleSearch} currentInput={currentInput}/>
    <Text> {title} </Text>
    <PlatesList plates={plates} />
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
  <View>
    <TextInput />
  </View>
);

SearchView.propTypes = {
 handleSearch: PropTypes.func.isRequired,
 currentInput: PropTypes.string.isRequired
};


const PlatesList = ({plates, isLogged}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
  <View>
    <Text>{plate.name}</Text>
    <Text>{plate.price}</Text>
    {plate.ingredients.map((ing) => <Text>{ing}</Text>)}
    {isLogged && <Button title='+' />}
    </View>
);

PlateListItem.propTypes = {
  plate: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired
};

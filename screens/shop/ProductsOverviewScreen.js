import React from 'react';
import { FlatList } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { productsReducer } from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const ProductsOverviewScreen = (props) => {
  return <Provider store={store}></Provider>;
};

export default ProductsOverviewScreen;

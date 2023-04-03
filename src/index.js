import { ColorModeScript, theme ,ChakraProvider} from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/slices/mainReducer';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
let persistor=persistStore(store);

root.render(
 <Provider store={store}>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
        <PersistGate persistor={persistor}>
    <App />
        </PersistGate>
    </ChakraProvider>
    </Provider>



);



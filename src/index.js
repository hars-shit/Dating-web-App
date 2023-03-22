import { ColorModeScript, theme ,ChakraProvider} from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/slices/mainReducer';





const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
 <Provider store={store}>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </Provider>



);



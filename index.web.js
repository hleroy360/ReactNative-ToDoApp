import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('todos', () => App);
AppRegistry.runApplication('todos', { rootTag: document.getElementById('root') });
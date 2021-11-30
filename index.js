/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import LoginForm from "./src/LoginForm";
import DetailKaryawan from "./src/DetailKaryawan";
import Category from "./src/Category";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Category);

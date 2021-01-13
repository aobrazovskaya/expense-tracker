import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './App';

const svgModules = require.context('./asset/icons', false, /\.svg$/);
svgModules.keys().forEach(svgModules);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
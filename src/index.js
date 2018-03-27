import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider, addLocaleData} from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import {zh_CN, en_US} from './i18n';
import intl from 'intl';
import features from './feature';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...zh, ...en]);

function chooseLocale(){
	switch(navigator.language.split('-')[0]){
		case 'en':
			return en_US;
		case 'zh':
			return zh_CN;
		default:
			return en_US;
	}
}

ReactDOM.render(<IntlProvider locale={navigator.language} messages={chooseLocale()}><App /></IntlProvider>, document.getElementById('root'));
ReactDOM.render(<IntlProvider locale={navigator.language} messages={chooseLocale()}><features.NavContainer /></IntlProvider>, document.getElementById('mainNav'));
registerServiceWorker();

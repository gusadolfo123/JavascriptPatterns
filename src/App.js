import React from 'react';
import logo from './logo.svg';
import Users from './classes/users';
import User from './classes/user';
import './App.css';
import Messenger from './classes/messenger';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './config/firebaseConfig';

function App() {
	let users = new Users();

	let usr = new User('Gustavo Moreno');
	let usrPrueba = new User('Prueba Nombre');
	let usrLive = new User('Live');
	let messenger = new Messenger();

	users.addUser(usr);
	users.addUser(usrPrueba);
	users.addUser(usrLive);

	messenger.sendMessage({
		sender: usr,
		receiver: usrPrueba,
		message: 'Hola Mundo',
	});

	users.removeUser(usr);

	return (
		<div className="App">
			<FirebaseAppProvider firebaseConfig={firebaseConfig}>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</FirebaseAppProvider>
		</div>
	);
}

export default App;

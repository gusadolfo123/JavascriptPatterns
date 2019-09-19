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

	// iteradores
	let iterator = {
		currentValue: 1,
		next() {
			let result = { value: null, done: false };

			if (this.currentValue > 0 && this.currentValue <= 5) {
				result = { value: this.currentValue, done: false };
				this.currentValue += 1;
			} else {
				result = { done: true };
			}
			return result;
		},
	};

	let item = iterator.next();

	while (!item.done) {
		console.log(item.value);
		item = iterator.next();
	}

	// generadores
	function* counter() {
		for (let index = 1; index <= 5; index++) {
			yield index;
		}
	}

	let generator = counter();
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());

	function* retornador() {
		return 3;
	}

	let g = retornador();

	console.log(g.next());

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

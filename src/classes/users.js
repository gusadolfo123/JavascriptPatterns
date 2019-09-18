export default class Users {
	constructor() {
		this.users = [];
	}

	// patron observer
	notifyUserWasAdded(newUser) {
		for (let user of this) {
			if (user !== newUser) user.userAdded(newUser);
		}
	}

	notifyUserWasRemoved(removedUser) {
		for (let user of this) {
			if (user !== removedUser) user.userRemoved(removedUser);
		}
	}

	addUser(user) {
		this.users.push(user);
		this.notifyUserWasAdded(user);
	}

	removeUser(user) {
		this.users = this.users.filter(currentUser => currentUser !== user);
		this.notifyUserWasRemoved(user);
	}

	// Patron Iterator: se utiliza para recorrer de manera indirecta un arreglo
	[Symbol.iterator]() {
		return this.generatorUser();
	}

	*generatorUser() {
		for (let i = 0; i < this.users.length; i++) {
			yield this.users[i];
		}
	}
}

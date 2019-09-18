export default class User {
	constructor(userName) {
		this.userName = userName;
		this.status = true;
	}

	userAdded(user) {
		console.log(`${this.userName} informa que ${user.userName} se agrego`);
	}

	userRemoved(user) {
		console.log(`${this.userName} informa que ${user.userName} se elimino`);
	}
}

export default class Messenger {
	// Mediator defign pattern
	// sirve como intermediario de comunicacion entre dos objetos
	sendMessage({ sender, receiver, message }) {
		console.log(`${sender.userName} dice ${message} a ${receiver.userName}`);
	}
}

export const createNewEvent = (event) => {
	fetch('http://localhost:8080/event/', {
		method: 'POST', // or 'PUT'
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(event),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log('Success:', data)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
}

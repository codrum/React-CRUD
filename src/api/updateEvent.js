export const updateEvent = (event) => {
	fetch(`http://localhost:8080/event/${event._id}`, {
		method: 'PUT', // or 'PUT'
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

export const deleteEvent = (event) => {
	const myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')

	const raw = JSON.stringify({
		title: event.title,
		description: event.description,
		costInDollars: event.costInDollars,
		date: event.date,
	})

	const requestOptions = {
		method: 'DELETE',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	}
	fetch(`http://localhost:8080/event/${event._id}`, requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error))
}

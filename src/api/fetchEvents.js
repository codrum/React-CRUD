export const fetchEvents = (setIsLoaded, setEvents, setError) => {
	fetch('http://localhost:8080/event/')
		.then((res) => res.json())
		.then(
			(result) => {
				setIsLoaded(true)
				setEvents(result)
			},
			(error) => {
				console.log(error)
				setIsLoaded(true)
				setError(error)
			}
		)
}

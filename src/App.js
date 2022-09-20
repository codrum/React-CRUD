import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { deleteEvent } from './api/deleteEvent'
import { fetchEvents } from './api/fetchEvents'
import { EventCard } from './components/card/EventCard'
import { Form } from './components/forms/Form'

export const App = () => {
	// app state
	const [error, setError] = useState()
	const [isLoaded, setIsLoaded] = useState(false)
	const [events, setEvents] = useState()
	const [editMode, setEditMode] = useState(false)
	const [eventToEdit, setEventToEdit] = useState()

	const toggleEditMode = (event) => {
		if (event) {
			setEventToEdit(event)
			setEditMode(true)
		} else {
			setEventToEdit({})
			setEditMode(false)
		}
	}
	const deleteEventAction = (event) => {
		deleteEvent(event)
	}
	// Fetch all events
	useEffect(() => {
		fetchEvents(setIsLoaded, setEvents, setError)
	}, [])
	// only return content if content is there
	if (error) {
		return <div>Error: {error.message}</div>
	} else if (!isLoaded) {
		return <div>Loading...</div>
	} else {
		return (
			<>
				<Box width={'100%'} height={32}></Box>
				<Grid container>
					<Grid item xs={12} md={6}>
						<Container>
							<Typography variant='h1'>Events</Typography>
							<Grid container justifyContent='flex-start'>
								{events.map((event) => {
									return (
										<Grid item xs={12} key={event._id}>
											<EventCard
												event={event}
												toggleEditMode={toggleEditMode}
												deleteEvent={deleteEventAction}
											/>
										</Grid>
									)
								})}
							</Grid>
						</Container>
					</Grid>

					<Grid item xs={12} md={6}>
						<Container>
							<Typography variant='h1'>
								{editMode ? `Edit` : `Create`} event
							</Typography>
							<Form
								eventToEdit={eventToEdit}
								editMode={editMode}
								toggleEditMode={toggleEditMode}
							/>
						</Container>
					</Grid>
				</Grid>
			</>
		)
	}
}

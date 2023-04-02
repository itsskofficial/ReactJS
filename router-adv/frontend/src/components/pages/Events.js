import { Suspense } from "react"
import { Await, defer, json, useLoaderData } from "react-router-dom"
import EventsList from "../EventsList"

const Events = () => {
    const { events } = useLoaderData()
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
        
    )
}

export default Events

async function eventsLoaderFunc() {
    const response = await fetch('http://localhost:8080/events')
    if (!response.ok) {
        throw json({ message: 'Something went wrong' }, {status:500})
    }
    else {
        const data= await response.json()
        return data.events
    }
}

export async function eventLoader() {
    return defer({
        events:eventsLoaderFunc()
    })
  }
import { Fragment, Suspense } from "react"
import { Await, defer, json, redirect, useLoaderData } from "react-router-dom"
import EventItem from "../EventItem"
import EventsList from "../EventsList"

const EventDetails = () => {
    const { event, events } =useLoaderData()
    return (
        <Fragment>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={event}>
                    {loadedEvent=>{<EventItem event={ loadedEvent } />}}
                </Await>
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={events}>
                    {loadedEvents=>{<EventsList events={ loadedEvents } />}}
                </Await>
            </Suspense>
        </Fragment>
    )
}

export default EventDetails

async function eventLoaderFunc(id) {
    const response = await fetch('https://localhost:8080/events' + id)

    if (!response.ok){
        throw json({
            message:'Could not find event'
        },
        {
            status:400
        })
    }
    else{
        const data=await response.json()
        return data.event
    }
}

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

export async function eventItemLoader({ params }) {
    const id = params.id
    return (
        defer({
        event:await eventLoaderFunc(id),
        events:eventsLoaderFunc()
        })
    )
}

export async function deleteEventAction({params,request}) {
    const id = params.id
    const response = await fetch('http://localhost:8080/events' + id, {
        method:request.method
    })

    if (response.status === 422) {
        return response
    }
    if (!response.ok){
        throw json({
            message:'Could not delete event'
        },
        {
            status:400
        })
    }
    else{
        return redirect('/events')
    }
}
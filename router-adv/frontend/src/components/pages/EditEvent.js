import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../EventForm"

const EditEvent = () => {
    const data = useRouteLoaderData('event-item')
    return (
        <EventForm method='patch' event={data.event}/>
    )
}

export default EditEvent
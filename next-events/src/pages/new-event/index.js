import { useRouter } from 'next/router'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewEvent = () => {
    const router= useRouter()
    const addMeetupHandler = async (eventData) => {
        const response = await fetch('/api/new-meetup',{
            body: eventData,
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            }
        })

        const data = await response.json()
        console.log(data)
        router.push('/')
    }
    return (
        <NewMeetupForm onaddMeetup ={addMeetupHandler}/>
    )
}

export default NewEvent
import { Fragment } from "react"
import MeetupInfo from "../../components/meetups/MeetupInfo"
import {
    MongoClient, ObjectId} from "mongodb"

const MeetupDetails = (props) => {
    return (
        <Fragment>
            <MeetupInfo image={props.meetupData.image} title={props.meetupData.title} description={props.meetupData.description } address={props.meetupData.address} />
        </Fragment>
    )
}

export async function getStaticPaths() {

    const client = await MongoClient.connect(URL)
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, { _id: 1 })
    
    return (
        {
            fallback:'blocking',
            paths: meetups.map(meetup=>({
                params: {
                    id:meetup._id.toString()
                }
            }))
    }
        
    )
}

export async function getStaticProps(context) {
    const id = context.params.id
    const client = await MongoClient.connect(URL)
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetup = await meetupsCollection.findOne({ _id: ObjectId(id) })
    
    return (
        {
            props: {
                meetupData: {
                    title: meetup.title,
                    image:meetup.image,
                    address: meetup.address,
                    description: meetup.description,
                    id:meetup._id.toString()
                }
            },
            revalidate:10
        }
    )
}

export default MeetupDetails
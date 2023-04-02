import { Fragment } from 'react'
import Head from 'next/head'
import MeetupList from '../components/meetups/MeetupList'

const Home = (props) => {
    return (
        <Fragment>
            <Head>
                <title>
                    NextJS Project
                </title>
            </Head>
        <MeetupList>
            meetups={props.meetups}
            </MeetupList>
        </Fragment>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect(URL)
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
    client.close()
    return (
        {
            props: {
                meetups: meetups.map(meetup => ({
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.image,
                    description: meetup.description,
                    id:meetup._id.toString()
                }))
            },
            revalidate:10
        }
    )
}

// export async function getServerSideProps(context) {
//     const req=context.req
//     const res = context.res
    
//     return (
//         {
//             props: {
//                 meetups:MEETUPS
//             }
//         }
//     )
// }

export default Home
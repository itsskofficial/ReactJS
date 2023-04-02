import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import classes from "./MeetupInfo.module.css"

const MeetupInfo = (props) => {
    return (
        <Fragment>
            <Head>
                <title>
                    {props.meetupData.title}
                </title>
                <meta
                    name="description"
                content={props.metaData.description}/>
            </Head>

            <section className={classes.info}>
                <Image src={props.image} alt='Nothing' />
                <h1>{props.title}</h1>
                <p>{props.address}</p>
                <p>{props.description}</p>
            </section>
        </Fragment>
    )
}

export default MeetupInfo
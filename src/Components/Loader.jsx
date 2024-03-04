import React from 'react'
import LoaderCard from './LoaderCard'


export default function Loader() {
    return (
        <div className="container">
            <h2 className="text-center my-5">Users</h2>
            <div className="row gap-5">
             <LoaderCard/>
             <LoaderCard/>
             <LoaderCard/>
            </div>
        </div>
    )
}

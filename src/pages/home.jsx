import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyCard from '../Components/MyCard'
import Loader from '../Components/Loader'
import NavigationBar from '../Components/NavigationBar'

export default function Home() {
 // const [counter, setCounter] = useState(0)

  //useEffect(()=>{
    //console.log("hello")
  //}, [counter])

  const [users, setusers] = useState([])


  useEffect(()=>{
  //  { fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((res)=> res.json())
  //   .then((data) => setTimeout(()=> setusers(data), 2000))
  //   .catch((err)=> console.log(err))}

  axios.get('https://jsonplaceholder.typicode.com/users')
  .then((data)=>setTimeout(()=> setusers(data.data), 2000))
  .catch((err)=>console.log(err))
  },[])
  return (
    <>
     
     <NavigationBar/>
     
    {users.length > 0 ? 
    (
      <div className="container">
        <h2 className="text-center my-5">Users</h2>
        <div className="row gap-5">
        {
            users.map((user,index)=>{
              return(
                <MyCard data={user} key={index}/>
              )
            })
          }
        </div>
      </div>
  
    )
     : 
     (<Loader/>)
    }

    {/* div className="container my-5 text-center">
         <div>{counter}</div>
         <div><button className="btn btn-dark mx-2" onClick={()=> setCounter(counter + 1)}>+</button></div>
         <div><button className="btn btn-dark mx-2" onClick={ ()=> setCounter(counter - 1)}>-</button></div>
  </div> */}


    </>
  )
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  // const { peoples, errors, loading } = customReactQuery("/api/products")
  const [peoples, setPeoples] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("Coriss")

  useEffect(() => {
    const controller = new AbortController()
    ; (async () => {
      try {
        setLoading(true)
        setErrors(false)
        const res = await axios.get(`/api/products?search=${search}`,
          {
          signal: controller.signal
          }
        )
        const users = await res.data
        // console.log(res.data);
        console.log(users);
        setPeoples(users)
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Req cancled", error.message);
          return
        }
        console.log("Error: ", error);
        setErrors(true)
        setLoading(false)
      }
    })()

    return () => {
      controller.abort()
    }
  }, [search])

  // if (errors) {
  //   return <h1>Something went wrong</h1>
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  // console.log(peoples)

  return (
    <>
      <h1>Handling API like a PRO</h1>
      <input
        placeholder='Search..'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        type="text" />
      {errors && <h1>Something went wrong</h1>}
      {loading && <h1>Loading...</h1>}

      <h2>Number of People are: </h2><h1>{peoples.length}</h1>
      {
        peoples.map((people) => (
          <ul key={people.id}>
            <li>{people.id}</li>
            <li>{people.first_name}</li>
          </ul>
        ))
      }
    </>
  )
}

export default App


// const customReactQuery = (urlPath) => {
//   const [peoples, setPeoples] = useState([])
//   const [errors, setErrors] = useState(false)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     ; (async () => {
//       try {
//         setLoading(true)
//         setErrors(false)
//         const res = await axios.get(urlPath)
//         const users = await res.data
//         console.log(res.data);
//         console.log(users);
//         setPeoples(users)
//         setLoading(false)
//       } catch (error) {
//         console.log("Error: ", error);
//         setErrors(true)
//         setLoading(false)
//       }
//     })()
//   }, [urlPath])

//   return { peoples, errors, loading }
// }

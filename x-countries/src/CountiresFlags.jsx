import { useEffect, useState } from 'react'

export const CountiresFlags = () => {
const [countries,setCountries]=useState([])
useEffect( ()=>{

    async function fetchData() {
        
    try {
    const response= await fetch("https://xcountries-backend.azurewebsites.net/all")
    const data= await response.json(response)
    // console.log(data)
    return setCountries(data)
    } catch (error) {
        console.error("Error fetching data:")
    }
}
fetchData()
},[])
  return (
    <div style={{
       
        padding:"10px",
        display:"flex",
        flexWrap:"wrap",
        gap:"20px"
    }}>
        {countries.map((a)=>{
            return <div style={{
                height:"150px",
                width:"150px",
                border:"1px solid grey",
                borderRadius:"5%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                padding:"10px",
                textAlign:"center",
            }}>
                <img src={a.flag} alt={"flag of "+a.name} style={{
                    width:"100px",
                    height:"90px"
                }}/>
                <h4>{a.name}</h4>
            </div>
        })}
    </div>
  )
}
 export default CountiresFlags
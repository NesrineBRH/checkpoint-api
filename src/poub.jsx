import React, { useEffect, useState } from "react";
import axios from"axios";
//import user from './UserList';
function App(){
const [data, setData] = useState([])
//const [err, setErr] = useState(null)
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {console.log(res.data); setData(res.data)})
    //.catch(err =>console.error(err))
},[]);
 const tab=data.map((data)=>{
return(
    <tr> <td>{data.id}</td> 
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td> {data.address.street}<br/>{data.address.city}<br/>{data.address.zipcode}
    </td>
    </tr>)
 });
return (
<div>
<h1>Users</h1>
<div>{tab}</div>
</div>  
);
}
export default App;

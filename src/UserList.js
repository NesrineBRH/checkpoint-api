import React, { useEffect, useState } from "react";
import axios from"axios";
function user(){
const [data, setData] = useState([])
const [err, setErr] = useState(null)
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {console.log(res.data), setData(res.data)})
    .catch(err =>console.error(err))
},[]);
 const tab=data.map((data)=>{
return(
    <tr> <td>{data.id}</td> <td>{data.name}</td></tr>)
 });
return (
<div>
<h1>Users</h1>
<table>
<tr>
    <th>User ID</th>
    <th>User Name</th><th>User Name</th>
</tr>
</table>
{tab}
</div>  
);
}
export default user;

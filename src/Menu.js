import { useEffect, useState } from "react";





export default function Menu(){
    const [menu,setMenu] = useState(null)
useEffect(()=>{
    fetch('http://localhost:8000/api-menu/')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(data => {
        setMenu(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
},[])
    return(
        <main>
        <h1>Menu</h1>
        <div className="column">
        {menu==null?"loading":Object.keys(menu).length===0? "No data fetched":menu.map((item) => (
            <p key={item.id}>
                <a href={`menu-item/${item.id}`}>
                    {item.name}
                </a>
                <span className="menu-price">
                    ${item.price}.00
                </span>
            </p>
    ))} 
</div>
</main>
    )
}
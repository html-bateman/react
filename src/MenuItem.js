import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MenuItem(){
    const [item,setItem] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:8000/api-menu/${id}`,{
            // method:'GET',
            headers:{
                'Authorization':'Token eac048435ba5eedafd25fa10e97336cda801cf9f'
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>
            setItem(data)
        )
    },[])

         return (
    <section>
      <article>
        <h1>Menu item</h1>
        <span>
          <Link to="/">Home</Link> /
          <Link to="/menu">Menu</Link> /

          <span>{item && item.id}</span>
        </span>
        <div className="row">
          <div className="column">
            <h2>{item && item.name}</h2>
            <p>Price: ${item && item.price}.00</p>
            <p>{item && item.description}</p>
          </div>
          <div className="column">

            <img
              src={`/${item && item.name}.jpg`}
              alt={item && item.name}
            />
          </div>
        </div>
      </article>
    </section>
  );
}


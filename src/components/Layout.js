import React, { useEffect, useState } from 'react';
import CardData from './CardData';
import { Link } from 'react-router-dom';

const Layout = () => {

    const[allShows, setAllShows] = useState([]);
    useEffect(()=>{
        getShows();
    },[]);

    async function getShows(){
        const data = await fetch("https://api.tvmaze.com/search/shows?q=all");

        const json = await data.json();
        console.log(json);
        setAllShows(json);
    }
  return (
    <div className="cards">
            {   
                allShows.map((data)=>{
                    return <Link to={"showbook/"+ data.show.name}><CardData {...data.show} key={data.show.id}/></Link>
                })
            }
        </div>
  )
}

export default Layout

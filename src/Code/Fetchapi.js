import React, { useEffect } from "react";
import { useState } from "react";
const Fetchapi=()=>
    {
        const[apiData,setApiData]=useState([]);
        async function calFun()
        {
            const jsondata=await fetch('https://www.reddit.com/r/reactjs.json');
            const dataf=await jsondata.json();
            setApiData(dataf.data.children);
        }
        useEffect(()=>
        {
            calFun();
        },[])
        console.log(apiData);
        
        return(
            <>
                {apiData?.map(element=>{
                return(
                    <div id="card" key={element.data.title}>
                    <h3 align="center" id="inside" style={{color:'red'}}>{element.data.title}</h3>
                    <div align="center" id="inside" className="selfText" > {element.data.selftext_html}</div>
                    <div align="center" id="inside"><a className="selfText" href={element.data.url}>{element.data.url}</a></div>
                    <h3 align="center" id="inside" style={{color:'green'}}>score:{element.data.score}</h3>
                    </div>
                )})}
            </>
        )
    }
    export default Fetchapi;
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Heading from "../Heading";
import Filter from "./Filter";
import WorkshopList from "./WorkshopList";
import { useRouter } from "next/router";

const Workshops = () => {

  const router  =   useRouter()
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All");
  const [events, setEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])

  const getCategories = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
    );
    let val = await res.json();

    setCategories((cat) => {
      let arr   =   val.data.map((x) => ({ name: x.attributes.name, id: x.id }));
      return    [{name:'All',id:0},...arr]
    });
  };

  const formatEvents = (list) => list.map(x=>({name:x.attributes.name,id:x.id,category:x.attributes?.category?.data.attributes.name,coverImage:x.attributes.coverImage?.data?.attributes?.url,regEndDate:x.attributes.regEndDate,regPrice:x.attributes.regPrice,prizesWorth:x.attributes.prizesWorth}))

  const getEvents = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/workshops?populate=*`)
    let val = await res.json();
    // console.log(val.data);
    setAllEvents(formatEvents(val.data))
    if (selected!=='All') {
        setEvents(formatEvents(val.data).filter(x=>x.category===selected))
    }
    else{
        setEvents(formatEvents(val.data))
    }
  }

  useEffect(() => {
    if(router.isReady)
    {
        if(router.query.category)
        {
            setSelected(router.query.category)
            setEvents(allEvents.filter(x=>x.category===router.query.category))
        }
    }
  }, [router.isReady])
  

  useEffect(() => {
    getCategories();
    getEvents();
  }, []);

  useEffect(()=>{
    if (selected!=='All') {
        setEvents(allEvents.filter(x=>x.category===selected))
    }
    else{
        setEvents(allEvents)
    }
  },[selected])

  return (
    <>
      <Heading title={"Workshops 2023"} image={"/images/workshop_banner.jpeg"} />
      {/* <Filter categories={categories} selected={selected} select={setSelected} /> */}
      <WorkshopList list={events} />
    </>
  );
};

export default Workshops;

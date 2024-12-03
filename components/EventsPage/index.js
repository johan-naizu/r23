import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Heading from "../Heading";
import Filter from "./Filter";
import EventList from "./EventList";
import { useRouter } from "next/router";

const Events = () => {

  const router = useRouter()
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  // const [events, setEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])

  const getCategories = async () => {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
    );
    let val = await res.json();

    setCategories((cat) => {
      let arr = val.data.map((x) => ({ name: x.attributes.name, id: x.id }));
      return [{ name: 'All', id: 0 }, ...arr]
    });
  };

  const formatEvents = (list) => list.map(x => ({ name: x.attributes.name, id: x.id, category: x.attributes.category.data?.attributes.name, coverImage: x.attributes.coverImage?.data?.attributes?.url, regEndDate: x.attributes.regEndDate, regPrice: x.attributes.regPrice, prizesWorth: x.attributes.prizesWorth }))

  const getEvents = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events?populate=*`)
    let val = await res.json();
    // console.log(val.data);
    setAllEvents(formatEvents(val.data))
  }

  // useEffect(() => {

  //   const opts = ['Music','Dance','General','Sports','Ragnarok','Film Making','Pass']
  //   if(router.isReady && allEvents.length != 0)
  //   {
  //       if(opts.includes(router.query.category))
  //       {
  //           setSelected(router.query.category)
  //       }
  //       else{
  //         setSelected('All')
  //         router.push('?category=All')
  //       }
  //   }
  // }, [allEvents])

  useEffect(() => {
    if (router.query.category === selected)
      return
    else {
      const opts = ['Music', 'Dance', 'General', 'Sports', 'Ragnarok', 'Film Making', 'Pass']
      if (opts.includes(router.query.category)) {
        setSelected(router.query.category)
      }
      else setSelected("All")
    }
  }, [router.query.category])

  useEffect(() => {
    getCategories();
    getEvents();
  }, []);

  useEffect(() => {
    if (router.isReady && selected){
      router.push('?category=' + selected)
    }
    
  }, [selected, router.isReady])
  return (
    <>
      <Heading title={"Events 2023"} image={"/images/femaledancer.jpeg"} />
      <div className="done">
        <h2>Done and dusted. Now a part of the Ragam lore.</h2>
      </div>
      <Filter categories={categories} selected={selected} select={setSelected} />
      <EventList list={ selected==="All" ? allEvents : allEvents.filter(x => x.category === selected)} />
    </>
  );
};

export default Events;

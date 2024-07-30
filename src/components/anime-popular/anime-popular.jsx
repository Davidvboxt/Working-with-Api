import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { Card } from "../Card";
import { useParams } from "react-router-dom";

import useEmblaCarousel from 'embla-carousel-react'

const animePopular = (props) => {

  // CAROUSEL
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // ANIME API FETCH
  const [anime, setAnime] = useState([]);
  const { id } = useParams();

  const fetch = async () => {
    const data = await axios.get(
      `https://api.jikan.moe/v4/top/${id ? id : "anime"}`
    );
    setAnime(data.data.data);
  };

  useEffect(() => {
    fetch();
  }, [id]);

  return (
    <section className="section__popular">
      <h2>Popular Anime</h2>
      <div className="embla" ref={emblaRef}>

        <div className="embla__container">
          {anime?.map(naruto => (
            <Card all={naruto} key={naruto.mal_id} />
          ))}
        </div>

        <button
          className="embla__button embla__button--prev"
          type="button"
          onClick={scrollPrev}
        >
          <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
        <button
          className="embla__button embla__button--next"
          type="button"
          onClick={scrollNext}
        >
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>

      </div>
    </section>
  )
}

export default animePopular
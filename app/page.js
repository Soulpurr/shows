"use client"
import Header from "@/Components/Header";
import Nav from "@/Components/Nav";
import Results from "@/Components/Results";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
const API_URL = 'https://api.tvmaze.com/search/shows?q=all';
export default function Home() {
  let results=["1","2"]
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(API_URL);
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchShows();
  }, []);
  
  return (
    <div>
      <Head>
        <title>Hulu 3.0</title>
        <link rel="stylesheet" href="" />
      </Head>
      {/* Header */}

     
      <Nav />

      {/* Results */}
      <Results results={shows} />
    </div>
  );
}

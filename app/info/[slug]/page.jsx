"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";

function slug({ params }) {
  const router = useRouter();
  let id = params.slug;

  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowData(data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!showData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      <img
        className="h-96 block md:sticky top-24"
        src={showData && showData?.image?.original}
      />

      <div className="md:ml-4 ml-0 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
          {showData?.name}{" "}
          <span className="text-xl">({showData?.premiered})</span>
        </h1>

        <ReactStars
          size={20}
          half={true}
          value="{data.rating/data.rated}"
          edit={false}
        />

        <div
          className="mt-2 text-xl"
          dangerouslySetInnerHTML={{ __html: showData?.summary }}
        />

        <button
          onClick={() => router.push(showData?.url)}
          className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            View More
          </span>
        </button>
      </div>
    </div>
  );
}

export default slug;

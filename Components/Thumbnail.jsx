import { FaRegThumbsUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Thumbnail({ result }) {
  

  return (
    <Link className="group p-2 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50 " href={`/info/${result.show.id}`}>
      <img
        layout="responsive"
        src={`${
          result.show.image
            ? result.show.image?.original
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAe1BMVEUAAAD////V1dXm5ubY2NhQUFDR0dFxcXEsLCxeXl4QEBC0tLQdHR3t7e2Ojo6dnZ319fUYGBg/Pz8lJSW+vr7IyMh+fn4ICAj39/dKSkq3t7dpaWng4OBXV1fp6enDw8Orq6uFhYVDQ0MwMDBvb287OzuTk5NkZGSjo6OSuN7gAAAFE0lEQVR4nO2bi3KqMBRFTwQR0SCIPKqIqPXx/194kyAREanO2Clc95pWIBwzyZKEhAcRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPoy4gHbR1BndMf7r4r2ZVSTYBrVURxGTy3YBu8NsyS8YhGFoLX+zyG8nVbVa11ILBfYmZfMGB4OW/GwVkf1mkd+Oqco8rKUqB7QXe1514KgI4zeL/F6+t5HxyEFMIXvVwXRgWX1zYJa1uncQz1fpyw50bI8cDB47oG2x57W20DcHq2hkPHIQ+xvzVQeBFVp9c2BWalV3QNNyz/MO9pWIvjiwKmWuO9CNpHF80OxgWonohYNqQ2hwcN4sCjb75xzsKw2hLw7S21rdtYUrzlMO5rcRvXBg3pa57mAyuPKUg9rR0n0HemgUbhZeowOzXu1WB4FpFab4ahT1xIFuCIey93vcJz7loPLzBz1xoGv49Wi+8JqDuNzByzlTxx3oM8Jmsti/wYEeGvH1ad0TB7ohzNXmQwfe7iz3TOaFMWM+kYvzzqs5sMv80spmxx1UGwK1OaCIix/3eJGW0lFuRlR3oM+dxTWD7juoNITlXqW0OBA7EyLtgCiRF5BuHOzDsiEMx0Ue3XegG8JXmfLQQXI8kTujtcuLSrprmrl0cpOqAz000heOuu9An/fXtymNfeJCrp11T3iWm4vbPlE78MqUvjgIJ4vDbUqTg7VNS4uCQ6IikkNA1pLsdYMDbzjWTvviYNiaIpEO7NgxPcehiwNyHM90YrvBAa98sy8OqleRB7fdQyXVlz85i7QDNQpe+z846P411cJB7mq2WdHW5fpxr+Okg7MaECyOlxZ/VF1Bfm7qDwbmlcKYSgn/ooo/0j4XOum4Z8eJ89Y4r6kIf067g+s9NDiAA8n/7CBtLfN9fzC75c7BrjW/5C+q+COz5aRGMRLeyNXFTseVDmpfv3PgjOt8qwi+luv1O7ldpajtrjH1OBWrOedLWnLOvTFN3ZqDe/pyHanK43GiZ45o/SVnCGFx+3U7pJHp/eCg++PEex47sMRSVFc52OimYX2UA55PcvHhbrduXowmmUjhH+XgwohoXOvvP86BJ3rDT3fQABzAARz8nw7SRgftc6u2ZzSLp1F4S0T3mC0F10usF/KB9ZhB3pKfszoJ+jJTAAAAAAAAAID3MOG1uWXI+b45tMDn1m+W5y8Ia+//hWwXt3+joxPoHTcMI1sQDcVKtiT6lgl8RiOuFiWuSo7EHDoTy7E4CrKEcX61EBqMZdmeUhlHZBo+kWGQyl5eXRBfMzrq4IsZTrCSD5z5fjxikxML/cBl+YkJH0emJZzZbOov2feZuYEfsjHJz1Xg6IwC32BDm1J2sB1RV4/58mak+HPsOTOJe7596KyDVH5Y9OVlGWebFdsQjVg+YkmWeSwv42bMFccAi5Ysko/jrUge+7dvOadsL5/XFFoSRlw7kK/0cNUM/M46YJ6XmGI5IFqxkFy5LR1MKBbHRhmnHExaHRjywX9P3n0TDtSy5qCr/YE4Dhzbnop+QNW9eGYqEgKEiyTJddyZHaWDrah5kkgPDxyQ2J0wm6aeXBYOAlH3g0rvpoOhfqZ2KvAvL3JuLtvX5u7IdWcai3/BJen2NFAcNL7Mplz6VKz7eruTOLXzWaze7QYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzFP2YORryCighsAAAAAElFTkSuQmCC"
        }`}
        className="h-[25rem] w-[30rem]"
        height={1080}
        width={1920}
      />
      <div className="p-4">
        <h1 className="text-center text-2xl transition-all duration-100 ease-in-out group-hover:font-extrabold">
          {result?.show?.name}
        </h1>
        <div className="flex space-x-3 justify-center">
          {result.show.genres.map((item) => (
            <h1 className="truncate items-center text-red-600 text-xl border-2 rounded-xl p-2 ">
              {item}
            </h1>
          ))}
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-xl font-extrabold text-red-200">Score</p>
          <p className=" group-hover:opacity-100 text-green-300">{result?.score}</p>
        </div>
      </div>
    </Link>
  );
}

export default Thumbnail;

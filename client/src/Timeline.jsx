import DataTimeline from "./assets/data";
import icon from "./assets/icon.svg";
import { useState } from "react";
import TextEditor from "./TextEditor";

export default function Timeline({ defaultColor }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEdit = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      {selectedEvent ? (
        <TextEditor selectedEvent={selectedEvent} />
      ) : (
        DataTimeline.map((element, index) => {
          // console.log(element.color, "ini element");

          const color = defaultColor || `bg-${element.color}-500`;

          return (
            <div key={index} className="flex m-4 relative">
              <div
                className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
              ></div>
              <div
                className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
              ></div>
              <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                <div className="w-4/5 text-gray-500">{element.date}</div>
                <div
                  className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
                ></div>

                <img
                  src={icon}
                  alt="icon"
                  className={`${color} w-10 p-1 rounded-lg z-20`}
                />
                <div
                  className={`${color} h-px w-8 translate-y-5 opacity-30`}
                ></div>
              </div>

              <div className="flex flex-col">
                {element.events.map((event, index) => (
                  <div
                    key={index}
                    className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96 me-2 mb-2 cursor-pointer hover:shadow-lg"
                    onClick={() => handleEdit(event)}
                  >
                    <div className="">
                      <div className="text-white text-xl font-medium">
                        {event.title}
                      </div>
                      <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                        {event.location}
                        <span className="sm:hidden">| {event.date}</span>
                      </div>
                      <div className="text-white mb-4 text-left h-[50px]">
                        {event.description}
                      </div>
                      <img
                        src={icon}
                        alt="icon"
                        className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}

      <div className="mt-28">
        <div id="data"></div>
      </div>
    </div>
  );
}

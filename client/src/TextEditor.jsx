import { useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";

export default function TextEditor({ selectedEvent }) {
  const [quillInstance, setQuillInstance] = useState(null);

  useEffect(() => {
    const toolbarOptions = [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image", "video", "formula"],
    ];

    // console.log(selectedEvent);
    // console.log(quillInstance);

    if (selectedEvent && !quillInstance) {
      const data = document.getElementById("data");
      if (data) {
        const dataQuill = new Quill(data, {
          modules: {
            toolbar: toolbarOptions,
          },
          theme: "snow",
        });
        setQuillInstance(dataQuill);
        // console.log(selectedEvent);

        const { id, icon, ...eventData } = selectedEvent;
        const eventText = Object.entries(eventData)
          .map(([key, value]) => `${value}`)
          .join("\n");
        dataQuill.setText(eventText);
      }
    }
  }, [selectedEvent, quillInstance]);

  return (
    <div className="mt-28">
      <div id="data"></div>
    </div>
  );
}

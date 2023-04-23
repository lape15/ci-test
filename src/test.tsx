import { useState, useEffect } from "react";
/* Task */
// use hooks
// Get data from API: https://jsonplaceholder.typicode.com/photos
// Save 20 images
// Display image and title
// include url, open in new tab
// create toggle button above gallery to hide/show gallery

export const TextFile = () => {
  const [data, setData] = useState<any>([]);
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const result = await response.json();
        const splicedResult = result.slice(0, 20);
        console.log(splicedResult);
        setData(splicedResult);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  if (!showImages) return <div>No image too show</div>;
  return (
    <div>
      <button onClick={() => setShowImages((show) => !show)}>
        Set Display
      </button>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.id}>
            <div className="img_hold">
              <img src={item.thumbnailUrl} />
            </div>
            <div style={{ display: "flex" }}>
              <span>{item.title}</span>
              <a href={item.url} target="_blank">
                Link
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

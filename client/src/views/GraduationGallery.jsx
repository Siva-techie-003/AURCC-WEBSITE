import { useParams } from "react-router-dom";

const GraduationGallery = () => {
  const { year } = useParams();

  const images = {
    2023: [
      "/Gallery/Graduation/2023/img1.JPG",
      "/Gallery/Graduation/2023/img2.JPG",
      "/Gallery/Graduation/2023/img3.JPG",
      "/Gallery/Graduation/2023/img4.JPG",
      "/Gallery/Graduation/2023/img5.JPG",
      "/Gallery/Graduation/2023/img6.JPG",
      "/Gallery/Graduation/2023/img7.JPG",
      "/Gallery/Graduation/2023/img8.JPG",
      "/Gallery/Graduation/2023/img9.JPG",
      "/Gallery/Graduation/2023/img10.JPG",
      "/Gallery/Graduation/2023/img11.JPG",
      "/Gallery/Graduation/2023/img12.JPG",
      "/Gallery/Graduation/2023/img13.JPG",
      "/Gallery/Graduation/2023/img14.JPG",
      "/Gallery/Graduation/2023/img15.JPG",
      "/Gallery/Graduation/2023/img16.JPG",
      "/Gallery/Graduation/2023/img17.JPG",
      "/Gallery/Graduation/2023/img18.JPG",
      "/Gallery/Graduation/2023/img19.JPG",
      "/Gallery/Graduation/2023/img20.JPG",
      "/Gallery/Graduation/2023/img21.JPG",
      "/Gallery/Graduation/2023/img22.JPG",
      "/Gallery/Graduation/2023/img23.JPG",
      "/Gallery/Graduation/2023/img24.JPG",
      "/Gallery/Graduation/2023/img25.JPG",
      "/Gallery/Graduation/2023/img26.JPG",
      "/Gallery/Graduation/2023/img27.JPG",
      "/Gallery/Graduation/2023/img28.JPG",
      "/Gallery/Graduation/2023/img29.JPG",
      "/Gallery/Graduation/2023/img30.JPG",
      "/Gallery/Graduation/2023/img31.JPG",
      "/Gallery/Graduation/2023/img32.JPG",
      "/Gallery/Graduation/2023/img33.JPG",
      "/Gallery/Graduation/2023/img34.JPG",
      "/Gallery/Graduation/2023/img35.JPG",
      "/Gallery/Graduation/2023/img36.JPG",
      "/Gallery/Graduation/2023/img37.JPG",
      "/Gallery/Graduation/2023/img38.JPG",
      "/Gallery/Graduation/2023/img39.JPG",
      "/Gallery/Graduation/2023/img40.JPG",
      "/Gallery/Graduation/2023/img41.JPG",
      "/Gallery/Graduation/2023/img42.JPG",
      "/Gallery/Graduation/2023/img43.JPG",
      "/Gallery/Graduation/2023/img44.JPG",
      "/Gallery/Graduation/2023/img45.JPG",
      "/Gallery/Graduation/2023/img46.JPG",
      "/Gallery/Graduation/2023/img47.JPG",
      "/Gallery/Graduation/2023/img48.JPG",
      "/Gallery/Graduation/2023/img49.JPG",
      "/Gallery/Graduation/2023/img50.JPG",
      "/Gallery/Graduation/2023/img51.JPG",
      "/Gallery/Graduation/2023/img52.JPG",
      "/Gallery/Graduation/2023/img53.JPG",
      "/Gallery/Graduation/2023/img54.JPG",
      "/Gallery/Graduation/2023/img55.JPG",
      "/Gallery/Graduation/2023/img56.JPG",
      "/Gallery/Graduation/2023/img57.JPG",
      "/Gallery/Graduation/2023/img58.JPG",
      "/Gallery/Graduation/2023/img59.JPG",
      "/Gallery/Graduation/2023/img61.JPG",
      "/Gallery/Graduation/2023/img62.JPG",
      "/Gallery/Graduation/2023/img63.JPG",
    ],
    2024: [
      "/images/2024/img1.jpg",
      "/images/2024/img2.jpg",
      "/images/2024/img3.jpg",
    ],
    2025: [
      "/images/2025/img1.jpg",
      "/images/2025/img2.jpg",
      "/images/2025/img3.jpg",
    ],
  };

  return (
    <div className="p-10 mt-36">
      <div className="flex justify-center">
        <div className="h-18 w-[500px] bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] flex justify-center items-center rounded-lg">
          <h1 className="text-3xl font-bold text-white">
            Graduation {year} Gallery
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {images[year]?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="graduation"
            className="rounded-lg cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-3 hover:scale-105 hover:shadow-[0_25px_50px_rgba(115,25,25,0.35)] transition-all duration-500 ease-out hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default GraduationGallery;

import { Link } from "react-router-dom";
import { useEffect } from "react";

const CulturalsDayPage = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const years = [
    { year: "2025", name: "Kaluri Kazhai Thiruvizha", image: "/Gallery/Culturals/2025/img_12.JPG" },
    { year: "2021", name: "Independence Day", image:  "/Gallery/Culturals/2021/IMG_0007.JPG"},
  ];

  return (
    <div className="p-10 mt-36 mb-24 scroll-mt-24 lg:scroll-mt-32">

  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-14 text-[rgb(100,25,25)] relative inline-block">
      Culturals Gallery
      <span className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-20 lg:w-24 bg-yellow-500"></span>
    </h2>
  </div>

      <div className="grid mt-16 md:grid-cols-3 gap-12 ">
        {years.map((item) => (
          <Link key={item.year} to={`/culturalsday/${item.year}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
              <img
                src={item.image}
                alt={item.year}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center hover:bg-[rgb(110,35,35)] rounded-b-xl transition-colors duration-300 hover:text-white">
                <h2 className="text-lg font-bold">
                  {item.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CulturalsDayPage;
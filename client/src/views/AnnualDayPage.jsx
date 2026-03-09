import { Link } from "react-router-dom";

const AnnualDayPage = () => {
  const years = [
    { year: "2023", image: "/Gallery/Annualday/2023/img01.JPG" },
    { year: "2024", image: "/Gallery/Annualday/2024/img01.JPG" },
    { year: "2025", image: "/Gallery/Annualday/2025/img01.JPG" },
  ];

  return (
    <div className="p-10 mt-44 scroll-mt-24 lg:scroll-mt-32">
      <h1 className="text-3xl font-bold text-[rgb(115,63,63)] to-[rgb(115,25,25)] text-center mb-10">
        Annual Day Gallery
      </h1>

      <div className="grid mt-16 md:grid-cols-3 gap-12 ">
        {years.map((item) => (
          <Link key={item.year} to={`/annualday/${item.year}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
              <img
                src={item.image}
                alt={item.year}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center hover:bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] rounded-b-xl transition-colors duration-300 hover:text-white">
                <h2 className="text-lg font-bold">
                  Annual Day {item.year}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnnualDayPage;
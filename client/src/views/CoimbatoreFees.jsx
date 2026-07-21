import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CoimbatoreFees = () => {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      title: "Fee Structure - Anna University Regional Campus Coimbatore",
      academicTitle: "Collage Fees Structure",
      hostelTitle: "Hostel Fees Structure",
      academic: {
        headers: ["S.No", "Program Details", "One Time Admission Fee", "Caution Deposit", "Term Fee", "Grand Total"],
        sections: [
          {
            title: "B.E / B.Tech",
            rows: [
              ["1", "B.E / B.Tech - Full Time", "7,800", "7,000", "15,200", "30,000"]
            ]
          },
         ,
          {
            title: "M.B.A",
            rows: [
              ["2", "MBA - Full Time", "7,160", "7,000", "30,215", "44,375"],
            ]
          }
        ]
      },
      hostel: {
        headers: ["SL.No", "PARTICULARS", "Time of Collection", "AMOUNT (Rs.)", "Total"],
        rows: [
          {
            sl: "1",
            particulars: "Admission Fees",
            time: "At the time of admission to Hostel (Non-refundable)",
            amount: "500/-",
            total: "6,100/-\n(At the time of admission)",
            totalRowSpan: 3
          },
          {
            sl: "2",
            particulars: "Appliances and Amenities Fund",
            time: "At the time of Admission to Hostel (Non-refundable)",
            amount: "600/-"
          },
          {
            sl: "3",
            particulars: "Caution Deposit (Refundable)",
            time: "At the time of admission to Hostel (Refundable)",
            amount: "5000/-"
          },
          {
            sl: "4",
            particulars: "Room Rent (per year)",
            time: "Every year",
            amount: "600/-",
            total: "16,700/-\n(Every year)",
            totalRowSpan: 4
          },
          {
            sl: "5",
            particulars: "Electricity Charges (per year)",
            time: "Every year",
            amount: "600/-"
          },
          {
            sl: "6",
            particulars: "Water Charges (per year)",
            time: "Every year",
            amount: "500/-"
          },
          {
            sl: "7",
            particulars: "Establishment Charges (per year)",
            time: "Every year",
            amount: "15000/-"
          },
          {
            sl: "8",
            particulars: "Mess Advance",
            time: "Five Months",
            amount: "15000/-",
            total: "15,000/-\n(Every Sem)",
            totalRowSpan: 1
          }
        ],
        footer: {
          totalLabel: "Total",
          totalAmount: "37800/-",
          grandTotal: "37,800/-",
          note: "Mess fees: Dividing System, Approximately Rs.3000/- per month"
        }
      }
    },
    ta: {
      title: "கட்டண விவரங்கள் - அண்ணா பல்கலைக்கழகம் மண்டல வளாகம் கோயம்புத்தூர்",
      academicTitle: "திருத்தப்பட்ட கட்டண விவரங்கள் (பொது)",
      hostelTitle: "விடுதி கட்டண விவரங்கள்",
      academic: {
        headers: ["வ.எண்", "பாடத்திட்ட விவரங்கள்", "ஒரு முறை சேர்க்கை கட்டணம்", "காப்புத் தொகை", "பருவக் கட்டணம்", "பெருமொத்தம்"],
        sections: [
          {
            title: "பி.இ / பி.டெக்",
            rows: [
              ["1", "பி.இ / பி.டெக் - முழு நேரம்", "7,800", "7,000", "15,200", "30,000"]
            ]
          },
          {
            title: "எம்.பி.ஏ",
            rows: [
              ["2", "எம்.பி.ஏ - முழு நேரம்", "7,160", "7,000", "30,215", "44,375"],
            ]
          }
        ]
      },
      hostel: {
        headers: ["வ.எண்", "விவரங்கள்", "வசூலிக்கும் நேரம்", "தொகை (ரூ.)", "மொத்தம்"],
        rows: [
          {
            sl: "1",
            particulars: "சேர்க்கை கட்டணம்",
            time: "விடுதியில் சேரும் போது (திரும்பப் பெறப்பட மாட்டாது)",
            amount: "500/-",
            total: "6,100/-\n(சேர்க்கையின் போது)",
            totalRowSpan: 3
          },
          {
            sl: "2",
            particulars: "உபகரணங்கள் மற்றும் வசதிகள் நிதி",
            time: "விடுதியில் சேரும் போது (திரும்பப் பெறப்பட மாட்டாது)",
            amount: "600/-"
          },
          {
            sl: "3",
            particulars: "காப்புத் தொகை (திரும்பப் பெறத்தக்கது)",
            time: "விடுதியில் சேரும் போது (திரும்பப் பெறத்தக்கது)",
            amount: "5000/-"
          },
          {
            sl: "4",
            particulars: "அறை வாடகை (ஆண்டுக்கு)",
            time: "ஒவ்வொரு ஆண்டும்",
            amount: "600/-",
            total: "16,700/-\n(ஒவ்வொரு ஆண்டும்)",
            totalRowSpan: 4
          },
          {
            sl: "5",
            particulars: "மின்சார கட்டணம் (ஆண்டுக்கு)",
            time: "ஒவ்வொரு ஆண்டும்",
            amount: "600/-"
          },
          {
            sl: "6",
            particulars: "தண்ணீர் கட்டணம் (ஆண்டுக்கு)",
            time: "ஒவ்வொரு ஆண்டும்",
            amount: "500/-"
          },
          {
            sl: "7",
            particulars: "நிறுவன கட்டணம் (ஆண்டுக்கு)",
            time: "ஒவ்வொரு ஆண்டும்",
            amount: "15000/-"
          },
          {
            sl: "8",
            particulars: "உணவு விடுதி முன்பணம்",
            time: "ஐந்து மாதங்கள்",
            amount: "15000/-",
            total: "15,000/-\n(ஒவ்வொரு பருவத்திற்கும்)",
            totalRowSpan: 1
          }
        ],
        footer: {
          totalLabel: "மொத்தம்",
          totalAmount: "37800/-",
          grandTotal: "37,800/-",
          note: "உணவு விடுதி கட்டணம்: பகிர்வு முறை, தோராயமாக மாதம் ரூ.3000/-"
        }
      }
    }
  };

  const current = content[lang];

  return (
    <div className="min-h-screen bg-gray-50 pt-[160px] md:pt-[180px] pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[rgb(115,25,25)] text-center md:text-left flex-1 leading-snug">
            {current.title}
          </h1>
          <div className="flex items-center bg-white rounded-full shadow-md p-1 border border-gray-200 whitespace-nowrap">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${lang === 'en' ? 'bg-[rgb(115,25,25)] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              English
            </button>
            <button
              onClick={() => setLang('ta')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${lang === 'ta' ? 'bg-[rgb(115,25,25)] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              தமிழ்
            </button>
          </div>
        </div>

        {/* Academic Fees Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12 animate-fadeIn">
          <div className="bg-gradient-to-r from-[rgb(115,25,25)] to-[rgb(160,50,50)] p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              {current.academicTitle}
            </h2>
          </div>
          <div className="overflow-x-auto p-4 sm:p-6">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-sm uppercase tracking-wider">
                  {current.academic.headers.map((header, idx) => (
                    <th key={idx} className="p-4 font-bold border-b-2 border-gray-200">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {current.academic.sections.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-gray-50">
                      <td colSpan="6" className="p-3 font-bold text-[rgb(115,25,25)] border-b border-gray-200 text-base">
                        {section.title}
                      </td>
                    </tr>
                    {section.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 text-sm">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className={`p-4 text-gray-700 ${cIdx === 5 ? 'font-bold text-[rgb(115,25,25)]' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hostel Fees Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-fadeIn" style={{animationDelay: '100ms'}}>
          <div className="bg-gradient-to-r from-[rgb(115,25,25)] to-[rgb(160,50,50)] p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              {current.hostelTitle}
            </h2>
          </div>
          <div className="overflow-x-auto p-4 sm:p-6">
            <table className="w-full text-left border-collapse border border-gray-300 min-w-[800px]">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-sm uppercase tracking-wider border-b-2 border-gray-300">
                  {current.hostel.headers.map((header, idx) => (
                    <th key={idx} className="p-4 font-bold border border-gray-300 text-center">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {current.hostel.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors text-sm">
                    <td className="p-3 text-center border border-gray-300 font-medium text-gray-700">{row.sl}</td>
                    <td className="p-3 border border-gray-300 text-gray-800">{row.particulars}</td>
                    <td className="p-3 border border-gray-300 text-gray-600 text-center">{row.time}</td>
                    <td className="p-3 border border-gray-300 text-right font-medium text-gray-700">{row.amount}</td>
                    {row.totalRowSpan && (
                      <td rowSpan={row.totalRowSpan} className="p-3 border border-gray-300 text-center font-bold text-[rgb(115,25,25)] align-middle whitespace-pre-line">
                        {row.total}
                      </td>
                    )}
                  </tr>
                ))}
                {/* Total Row */}
                <tr className="bg-gray-100 font-bold text-sm">
                  <td colSpan="3" className="p-4 text-center border border-gray-300 uppercase">{current.hostel.footer.totalLabel}</td>
                  <td className="p-4 text-right border border-gray-300">{current.hostel.footer.totalAmount}</td>
                  <td className="p-4 text-center border border-gray-300 text-[rgb(115,25,25)]">{current.hostel.footer.grandTotal}</td>
                </tr>
                {/* Note Row */}
                <tr className="bg-yellow-50 text-sm">
                  <td colSpan="5" className="p-4 text-center border border-gray-300 font-semibold text-[rgb(130,80,20)]">
                    {current.hostel.footer.note}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoimbatoreFees;

import React, { useState } from 'react';

const HelpDesk = () => {
    const [formData, setFormData] = useState({
        role: '',
        name: '',
        identifier: '',
        mobile: '',
        email: '',
        address: '',
        query: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Help Desk Query Submitted:", formData);
        alert("Thank you! Your query has been submitted successfully.");
        setFormData({
            role: '',
            name: '',
            identifier: '',
            mobile: '',
            email: '',
            address: '',
            query: ''
        });
    };

    return (
        <main className="bg-gray-50 min-h-screen pt-[140px] sm:pt-[180px] px-4 pb-12 font-sans">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-[rgb(180,100,100)] p-6 sm:p-10">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[rgb(110,35,35)] text-center mb-8 uppercase tracking-wide">
                    Help Desk
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Select Role */}
                    <div>
                        <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
                            Select Role:
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(110,35,35)]/20 focus:border-[rgb(110,35,35)] text-gray-700 bg-white"
                        >
                            <option value="">Select Role</option>
                            <option value="Student">Student</option>
                            <option value="College Staff">College Staff</option>
                            <option value="Parent">Parent</option>
                            <option value="Alumni">Alumni</option>
                            <option value="Public">Public</option>
                        </select>
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(110,35,35)]/20 focus:border-[rgb(110,35,35)] text-gray-700"
                        />
                    </div>

                    {/* Identifier */}
                    <div>
                        <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2 leading-tight">
                            If Public/Parent/Alumni, give your Aadhar Number, if Student give your Register Number, if College Staff, give your Employee Id:
                        </label>
                        <input
                            type="text"
                            name="identifier"
                            value={formData.identifier}
                            onChange={handleChange}
                            required
                            placeholder="Enter Identification Number"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(110,35,35)]/20 focus:border-[rgb(110,35,35)] text-gray-700"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
                            Mobile Number:
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            placeholder="Enter Mobile Number"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(110,35,35)]/20 focus:border-[rgb(110,35,35)] text-gray-700"
                        />
                    </div>

                    {/* Email ID */}
                    <div>
                        <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
                            Email ID:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter Email ID"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(110,35,35)]/20 focus:border-[rgb(110,35,35)] text-gray-700"
                        />
                    </div>

                    {/* Address for communication */}
                    <div>
                        <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
                            Address for communication:
                        </label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            rows="3"
                            placeholder="Enter Address"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(110,35,35)]/20 focus:border-[rgb(110,35,35)] text-gray-700 resize-none"
                        ></textarea>
                    </div>

                    {/* Details of the Query */}
                    <div>
                        <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
                            Details of the Query:
                        </label>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Enter Details of Query"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(110,35,35)]/20 focus:border-[rgb(110,35,35)] text-gray-700 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-2">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-[rgb(110,35,35)] hover:bg-[rgb(90,15,15)] text-white font-extrabold uppercase rounded-lg shadow-md transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            
            {/* Bottom Slogan */}
            <div className="text-center mt-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[rgb(110,35,35)] tracking-wide">
                    Quickly Find What You Are Looking For
                </h3>
            </div>
        </main>
    );
};

export default HelpDesk;

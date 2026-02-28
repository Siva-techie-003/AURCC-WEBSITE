import React, { useState } from 'react';
import './Grievance.css';

const Grievance = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        grievanceType: '',
        description: '',
        captchaAnswer: '',
    });

    const [captcha, setCaptcha] = useState({
        num1: Math.floor(Math.random() * 10) + 1,
        num2: Math.floor(Math.random() * 10) + 1,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const isCaptchaValid = parseInt(form.captchaAnswer) === captcha.num1 + captcha.num2;

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (!isCaptchaValid) {
            alert('Please solve the CAPTCHA correctly.');
            return;
        }

        setIsSubmitting(true);

        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormSubmitted(true);
            setForm({
                name: '',
                email: '',
                phone: '',
                grievanceType: '',
                description: '',
                captchaAnswer: '',
            });
            setCaptcha({
                num1: Math.floor(Math.random() * 10) + 1,
                num2: Math.floor(Math.random() * 10) + 1,
            });
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-[rgb(115,63,63)] via-[rgb(115,45,45)] to-white py-12 px-4 flex justify-center items-center text-left">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-[rgb(200,120,120)] animate-fadeIn">
                <div className="bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] py-8 px-10 text-center text-white">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-2">Online Grievance Form</h1>
                    <p className="text-[rgb(200,120,120)] font-medium opacity-80">Submit your concerns directly to the administration</p>
                </div>

                <div className="p-8 sm:p-12">
                    {!formSubmitted ? (
                        <form onSubmit={submitForm} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-black text-[rgb(90,20,20)] uppercase tracking-widest">Full Name</label>
                                    <input
                                        value={form.name}
                                        onChange={handleChange}
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[rgb(200,120,120)] transition-all outline-none font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-black text-[rgb(90,20,20)] uppercase tracking-widest">Email Address</label>
                                    <input
                                        value={form.email}
                                        onChange={handleChange}
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[rgb(200,120,120)] transition-all outline-none font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-black text-[rgb(90,20,20)] uppercase tracking-widest">Phone Number</label>
                                    <input
                                        value={form.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        id="phone"
                                        required
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[rgb(200,120,120)] transition-all outline-none font-medium"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="grievanceType" className="text-sm font-black text-[rgb(90,20,20)] uppercase tracking-widest">Grievance Category</label>
                                    <select
                                        value={form.grievanceType}
                                        onChange={handleChange}
                                        id="grievanceType"
                                        required
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[rgb(200,120,120)] transition-all outline-none font-bold"
                                    >
                                        <option value="" disabled>Select category</option>
                                        <option value="Academic">Academic</option>
                                        <option value="Hostel">Hostel</option>
                                        <option value="Infrastructure">Infrastructure</option>
                                        <option value="Administrative">Administrative</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="description" className="text-sm font-black text-[rgb(90,20,20)] uppercase tracking-widest">Grievance Description</label>
                                <textarea
                                    value={form.description}
                                    onChange={handleChange}
                                    id="description"
                                    required
                                    rows="4"
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-[rgb(200,120,120)] transition-all outline-none font-medium resize-none"
                                    placeholder="Tell us about your concern in detail..."
                                ></textarea>
                            </div>

                            <div className="bg-[rgb(220,140,140)] p-6 rounded-3xl border border-[rgb(200,120,120)] flex flex-col sm:flex-row items-center gap-6">
                                <div className="shrink-0 flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl font-black text-[rgb(100,25,25)]">
                                        {captcha.num1} + {captcha.num2}
                                    </div>
                                    <span className="font-black text-gray-400">=</span>
                                </div>
                                <input
                                    value={form.captchaAnswer}
                                    onChange={handleChange}
                                    type="number"
                                    id="captchaAnswer"
                                    required
                                    className="flex-grow p-4 bg-white border border-gray-200 rounded-2xl shadow-inner outline-none focus:border-[rgb(120,45,45)] transition-all font-black text-center"
                                    placeholder="?"
                                />
                                <p className="text-xs font-bold text-[rgb(115,40,40)] uppercase tracking-widest max-w-[150px]">Human verification required</p>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || !isCaptchaValid}
                                className="w-full py-5 bg-gradient-to-r from-[rgb(115,63,63)] to-[rgb(115,25,25)] text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                            >
                                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT GRIEVANCE'}
                            </button>
                        </form>
                    ) : (
                        <div className="py-20 text-center animate-scale-in">
                            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">✓</div>
                            <h2 className="text-3xl font-black text-[rgb(90,20,20)] mb-4">Submission Successful!</h2>
                            <p className="text-lg text-gray-500 font-medium max-w-md mx-auto">Your grievance has been successfully submitted and will be reviewed by the administration soon.</p>
                            <button
                                onClick={() => setFormSubmitted(false)}
                                className="mt-10 px-8 py-3 bg-[rgb(220,140,140)] text-[rgb(115,40,40)] font-bold rounded-full hover:bg-[rgb(200,120,120)] transition-colors"
                            >
                                Submit another grievance
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Grievance;

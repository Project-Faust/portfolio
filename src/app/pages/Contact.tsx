'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState<{
        status: 'success' | 'error' | null;
        message: string;
    }>({
        status: null,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // For demo purposes - in a real app, you'd send this to your backend
        console.log('Form submitted:', formData);

        // Simulate a successful submission
        setFormStatus({
            status: 'success',
            message: 'Thank you! Your message has been received. I will get back to you soon.'
        });

        // Clear the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // In a real application, you would handle the form submission here
    };

    return (
        <div className="section-padding">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="card bg-base-100 shadow-lg p-8">
                        <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm opacity-70">Email</h3>
                                <a href="mailto:your.email@example.com" className="link link-primary">
                                    your.email@example.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-sm opacity-70">Location</h3>
                                <p>[Your Location]</p>
                            </div>

                            <div>
                                <h3 className="text-sm opacity-70">Social</h3>
                                <div className="flex space-x-4 mt-2">
                                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card bg-base-100 shadow-lg p-8 lg:col-span-2">
                        <h2 className="text-xl font-bold mb-6">Send me a message</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full sm:col-span-2">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control w-full sm:col-span-2">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="textarea textarea-bordered h-40"
                                        placeholder="Your message"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Send Message
                                </button>
                            </div>

                            {/* Form Status Messages */}
                            {formStatus.status && (
                                <div className={`alert mt-6 ${formStatus.status === 'success'
                                    ? 'alert-success'
                                    : 'alert-error'
                                    }`}>
                                    <div>
                                        {formStatus.status === 'success' ? (
                                            <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )}
                                        <span>{formStatus.message}</span>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
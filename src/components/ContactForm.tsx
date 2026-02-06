import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { useState } from "react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            );

            
            alert("Message sent successfully ✅");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            alert("Failed to send message ❌");
        }
    };
    return (
      <motion.form
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="text-sm text-gray-400">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full mt-2 px-4 py-3 bg-black border border-gray-800 rounded-xl focus:outline-none focus:border-white"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-2 px-4 py-3 bg-black border border-gray-800 rounded-xl focus:outline-none focus:border-white"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full mt-2 px-4 py-3 bg-black border border-gray-800 rounded-xl focus:outline-none focus:border-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          Send Message
        </button>
      </motion.form>
    );   
}
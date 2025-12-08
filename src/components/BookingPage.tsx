import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/Section';
import { Footer } from './Footer';
import { MapPin, Calendar, Users, MessageSquare, User, Mail, Compass, Loader2 } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const safariOptions = [
  "Jawai Leopard Safari",
  "Prime Safari",
  "Premium Safari",
  "Birds & Crocodile Safari",
  "Village & Temple Safari",
  "Jungle Maad Safari",
  "Wildlife Photography Safari",
  "Other / Custom Package"
];

export const BookingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      whatsapp: phoneNumber || "Not provided"
    };

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      if (!scriptUrl || scriptUrl === "YOUR_GOOGLE_SCRIPT_URL") {
        throw new Error("Google Script URL is not configured.");
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setPhoneNumber(undefined);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  return (
    <div className="min-h-screen bg-forest-green text-ivory font-sans selection:bg-desert selection:text-white flex flex-col">
      
      <div className="h-24 md:h-32"></div>

      <div className="flex-grow container mx-auto px-6 md:px-12 lg:px-20 pt-6 md:pt-10 pb-12 md:pb-20">
        
        <div className="text-center mb-16 md:mb-24">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-ivory">
              Book Your Jawai <br className="hidden md:block" /> Wildframe Experience
            </h1>
            <p className="font-light text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
              Send us your preferred dates and requirements, and our team will help you plan your perfect wilderness stay in Jawai.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          
          {/* LEFT FORM */}
          <FadeIn delay={0.2} className="w-full flex flex-col">
            <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8 border-b border-desert/30 pb-4 inline-block">
              Booking Details
            </h2>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-desert rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-ivory mb-4">Request Received</h3>
                <p className="text-ivory/80 font-light">
                  Thank you! Your booking request has been submitted. Our team will contact you shortly to confirm availability.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-desert hover:text-white text-sm uppercase tracking-widest font-bold transition-colors"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                
                {/* Name */}
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory"
                      placeholder="Your Full Name"
                    />
                  </div>
                </div>

                {/* PHONE + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">WhatsApp Number</label>
                    <PhoneInput
                      defaultCountry="IN"
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      placeholder="Enter phone number"
                      international
                      countryCallingCodeEditable={false}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Email (Optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                      <input 
                        type="email" 
                        name="email"
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* PEOPLE + DATE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Number of People</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                      <input 
                        type="number" 
                        name="people"
                        min="1"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                      <input 
                        type="date" 
                        name="date"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory [color-scheme:dark]"
                      />
                    </div>
                  </div>
                </div>

                {/* SAFARI OPTIONS */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Preferred Experience</label>
                  <div className="relative">
                    <Compass className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                    <select 
                      name="experience"
                      className="w-full bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>Select an experience...</option>
                      {safariOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-4 pointer-events-none">
                      <svg className="w-4 h-4 text-ivory/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="flex-grow">
                  <label className="block text-xs uppercase tracking-widest text-ivory/60 mb-2 ml-1">Message / Special Requests</label>
                  <div className="relative h-full">
                    <MessageSquare className="absolute left-4 top-3.5 text-ivory/40" size={18} />
                    <textarea 
                      name="message"
                      rows={4}
                      className="w-full min-h-[120px] bg-white/5 border border-white/10 rounded-md py-3 pl-12 pr-4 text-ivory resize-none"
                      placeholder="Tell us about your preferences..."
                    ></textarea>
                  </div>
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded border border-red-900/50">
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-desert to-[#d4b98c] text-charcoal font-bold uppercase tracking-widest py-4 rounded-md hover:scale-[1.02] transition-transform duration-300 shadow-lg mt-6 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Submit Booking Request"
                  )}
                </button>
              </form>
            )}
          </FadeIn>

          {/* RIGHT COLUMN — MAP */}
          <FadeIn delay={0.4} className="w-full h-full flex flex-col">
            <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8 border-b border-desert/30 pb-4 inline-block">
              Location
            </h2>

            <div className="flex-grow flex flex-col">
              
              <div className="w-full flex-grow rounded-lg border-4 border-white/10 shadow-2xl overflow-hidden relative group min-h-[300px]">

                {/* MAP EMBED */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.139139944385!2d73.2162884683368!3d25.084424835504013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394297001d182f65%3A0xd4c5700931665784!2sJawai%20Wildframe%20Safari!5e0!3m2!1sen!2sin!4v1765197904831!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full pointer-events-none"
                  title="Jawai Wildframe Safari Location"
                />

                {/* CLICK OVERLAY */}
                <a
                  href="https://maps.app.goo.gl/37UffoPZs5NvGXxd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                ></a>

                {/* OVERLAY TEXT */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                  <div className="flex items-center text-ivory">
                    <MapPin className="text-desert mr-2" size={20} />
                    <span className="font-light tracking-wide">
                      Jawai Bandh, Pali District, Rajasthan
                    </span>
                  </div>
                </div>
              </div>

              {/* BOTTOM INFO */}
              <div className="mt-auto pt-8 space-y-4 text-ivory/80 font-light">
                <p>
                  <strong className="text-desert font-bold uppercase text-xs tracking-widest block mb-1">
                    Getting Here
                  </strong>
                  Jawai is well connected by road from Udaipur (3 hrs) and Jodhpur (3 hrs). 
                  The nearest railway station is Falna (30 mins).
                </p>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>

      <div className="bg-charcoal text-white mt-auto border-t border-white/10">
        <Footer />
      </div>

    </div>
  );
};
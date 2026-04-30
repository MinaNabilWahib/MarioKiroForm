import React, { useState } from 'react';
import config from './config';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    names: '',
    instagram: '',
    date: '',
    eventType: '',
    venue: '',
    guests: '',
    help: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetPhoneNumber = config.whatsappNumber; // from config

    const message = `📸 *New Photography Inquiry for Mario Kiro!* 📸\n
*Bride & Groom:* ${formData.names}
*Instagram:* ${formData.instagram}
*Event Date:* ${formData.date}
*Event Type:* ${formData.eventType}
*Planned Venue:* ${formData.venue}
*Expected Guests:* ${formData.guests}
*Additional Notes:* ${formData.help ? formData.help : 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex justify-center py-8 px-4 sm:px-6 lg:px-8 font-sans" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="max-w-3xl w-full bg-white p-6 sm:p-12 rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif mb-2 tracking-wide" style={{ color: '#b89565' }}>
            Mario Kiro
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.3em] text-gray-400 uppercase">
            Photography
          </p>
        </div>

        <div className="mb-10 pb-8 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
            Tell Us About Your Special Day
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            This form is designed to give you a personalized experience.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7 text-sm sm:text-base">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <span className="text-red-500 mr-1">*</span>Bride and Groom's Names:
            </label>
            <input 
              type="text" 
              name="names" 
              required 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <span className="text-red-500 mr-1">*</span>Bride and Groom's Instagram Usernames:
            </label>
            <input 
              type="text" 
              name="instagram" 
              required 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <span className="text-red-500 mr-1">*</span>Event Date:
            </label>
            <input 
              type="date" 
              name="date" 
              required 
              onChange={handleChange} 
              className="w-full sm:w-1/2 border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-white" 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-3">
              <span className="text-red-500 mr-1">*</span>Event Type:
            </label>
            <div className="flex flex-wrap gap-4 sm:gap-8 text-gray-700">
              {['Wedding', 'Engagement', 'Katb Ketab', 'Other'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors">
                  <input 
                    type="radio" 
                    name="eventType" 
                    value={type} 
                    required 
                    onChange={handleChange} 
                    className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500 cursor-pointer" 
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <span className="text-red-500 mr-1">*</span>Planned Venue:
            </label>
            <input 
              type="text" 
              name="venue" 
              required 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              <span className="text-red-500 mr-1">*</span>Expected Number of Guests:
            </label>
            <input 
              type="number" 
              name="guests" 
              required 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Please let us know how we can help ✨
            </label>
            <input 
              type="text" 
              name="help" 
              onChange={handleChange} 
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" 
            />
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              style={{
                backgroundColor: '#25D366',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1FA855'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
              className="w-full sm:w-auto text-white font-medium py-3 sm:py-4 px-8 sm:px-10 rounded-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start your journey on WhatsApp
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default InquiryForm;

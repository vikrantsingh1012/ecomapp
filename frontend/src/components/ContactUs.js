import React from 'react';
import './ContactUs.css'; // Importing the CSS file

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-heading">Contact Us</h1>
      
      <p className="contact-us-description">
        We value your feedback and are here to assist you with any questions or concerns regarding our products. Feel free to reach out to us through the following channels:
      </p>
      
      <h3 className="contact-us-subheading">Customer Support:</h3>
      <p>Email: <a href="mailto:support@yourcompany.com" className="contact-link">support@yourcompany.com</a></p>
      <p>Phone: <a href="tel:+911234567890" className="contact-link">+91-123-456-7890</a></p>
      <p>Hours: Monday to Friday, 9 AM – 6 PM (IST)</p>
      
      <h3 className="contact-us-subheading">Sales Inquiries:</h3>
      <p>For information on our product offerings, bulk orders, or partnership opportunities, please contact:</p>
      <p>Email: <a href="mailto:sales@yourcompany.com" className="contact-link">sales@yourcompany.com</a></p>
      <p>Phone: <a href="tel:+919876543210" className="contact-link">+91-987-654-3210</a></p>
      
      <h3 className="contact-us-subheading">Technical Support:</h3>
      <p>Facing issues with our products or services? Our technical team is ready to help:</p>
      <p>Email: <a href="mailto:techsupport@yourcompany.com" className="contact-link">techsupport@yourcompany.com</a></p>
      <p>Phone: <a href="tel:+914567891230" className="contact-link">+91-456-789-1230</a></p>
      
      <h3 className="contact-us-subheading">Address:</h3>
      <p>[Your Company Name]</p>
      <p>123, Main Street,</p>
      <p>Business Park,</p>
      <p>Mumbai, India - 400001</p>
      
      <h3 className="contact-us-subheading">Connect With Us:</h3>
      <p>Follow us on our social media platforms for updates and announcements:</p>
      <p>Facebook: <a href="#" className="contact-link">facebook.com/yourcompany</a></p>
      <p>Twitter: <a href="#" className="contact-link">@yourcompany</a></p>
      <p>Instagram: <a href="#" className="contact-link">instagram.com/yourcompany</a></p>
      
      <p>We're here to help make your experience with our products as seamless as possible!</p>
    </div>
  )
}

export default ContactUs;

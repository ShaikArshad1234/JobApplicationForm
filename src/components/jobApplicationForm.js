import React, { useState } from 'react';
import './jobApplicationForm.css';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    highestEducation: '',
    resume: null,
    coverLetter: '',
    jobPosition: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle file change for resume upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.highestEducation) newErrors.highestEducation = 'Education level is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (!formData.terms) newErrors.terms = 'You must accept the terms';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted successfully:', formData);
      alert('Application Submitted Successfully!');
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        highestEducation: '',
        resume: null,
        coverLetter: '',
        jobPosition: '',
        terms: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        {/* Highest Education */}
        <div className="form-group">
          <label>Highest Education:</label>
          <select
            name="highestEducation"
            value={formData.highestEducation}
            onChange={handleChange}
          >
            <option value="">Select your education level</option>
            <option value="highschool">High School</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">Ph.D.</option>
            <option value="diploma">Diploma</option>
            <option value="other">Other</option>
          </select>
          {errors.highestEducation && (
            <span className="error">{errors.highestEducation}</span>
          )}
        </div>

        {/* Job Position */}
        <div className="form-group">
          <label>Job Position:</label>
          <select
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
          >
            <option value="">Select a position</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Full Stack Developer</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div className="form-group">
          <label>Resume:</label>
          <input type="file" name="resume" onChange={handleFileChange} />
          {errors.resume && <span className="error">{errors.resume}</span>}
        </div>

        {/* Cover Letter */}
        <div className="form-group">
          <label>Cover Letter:</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Write a brief cover letter"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            I accept the terms and conditions
          </label>
          {errors.terms && <span className="error">{errors.terms}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;

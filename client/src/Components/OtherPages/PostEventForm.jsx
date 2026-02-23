import React, { useState } from "react";
import { sendContactForm } from "../../api/email";

const PostEventForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryInput, setCountryInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Controlled form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState(false);

  const allCountries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina",
    "Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
    "Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina",
    "Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon",
    "Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia",
    "Comoros","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo",
    "Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
    "Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
    "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea",
    "Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia",
    "Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan",
    "Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho",
    "Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia",
    "Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia",
    "Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
    "Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
    "North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay",
    "Peru","Philippines","Poland","Portugal","Qatar","Republic of the Congo","Romania","Russia",
    "Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa",
    "San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles",
    "Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa",
    "South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland",
    "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
    "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
    "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
    "Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
  ];

  const filteredCountries = allCountries.filter(country =>
    country.toLowerCase().includes(countryInput.toLowerCase())
  );

  const handleSubmit = async () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const pageUrl = window.location.href;

    const payload = {
      formType: "Post Event Report",
      formHeading: "Post Event Report"
    };

    if (firstName) payload.firstName = firstName;
    if (lastName) payload.lastName = lastName;
    if (companyName) payload.companyName = companyName;
    if (jobTitle) payload.jobTitle = jobTitle;
    if (phone) payload.phone = phone;
    if (email) payload.email = email;
    if (countryInput) payload.country = countryInput;

    payload.date = date;
    payload.time = time;
    payload.pageUrl = pageUrl;

    try {
      await sendContactForm(payload);

      // Clear fields
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setJobTitle("");
      setPhone("");
      setEmail("");
      setCountryInput("");
      setCaptcha(false);
      setIsOpen(false);
      setShowSuccess(true);

    } catch (error) {
      alert("Failed to submit form. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    const previous = window._previousRoute || "/";
    window.history.pushState({}, "", previous);
  };

  // Inline styles
  const buttonStyle = {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    zIndex: "9999",
    backgroundColor: "#ffffff",
    color: "#A6223C",
    padding: "14px 24px",
    borderRadius: "50px",
    border: "2px solid #A6223C",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
    transition: "all 0.3s",
  };

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    padding: "20px",
  };

  const modalStyle = {
    background: "#fff",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "12px",
    padding: "25px",
    position: "relative",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.3)",
    color: "white",
    border: "none",
    fontSize: "25px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const formRow = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  };

  const formGroup = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    fontWeight: "600",
    marginBottom: "5px",
    fontSize: "14px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
  };

  const dropdownStyle = {
    position: "absolute",
    width: "100%",
    maxHeight: "200px",
    overflowY: "auto",
    backgroundColor: "#ffffff",
    border: "1px solid #ccc",
    borderTop: "none",
    borderRadius: "0 0 6px 6px",
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  };

  const dropdownItemStyle = {
    padding: "12px",
    cursor: "pointer",
    fontSize: "15px",
    color: "#333",
    transition: "background-color 0.2s ease"
  };

  const submitBtn = {
    width: "100%",
    padding: "14px",
    background: "#A6223C",
    border: "none",
    color: "white",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  };

  // Success Modal styles
  const successModalStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(45, 55, 72, 0.75)",
    backdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100000,
    padding: "20px",
    animation: "fadeIn 0.3s ease"
  };

  const successContainerStyle = {
    background: "#ffffff",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "12px",
    padding: "40px",
    border: "2px solid #A6223C",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    position: "relative",
    animation: "slideUp 0.4s ease"
  };

  const successTitleStyle = {
    fontSize: "22px",
    fontWeight: "900",
    color: "#2d3748",
    margin: "0 0 15px 0",
    letterSpacing: "-0.5px"
  };

  const successSubtitleStyle = {
    fontSize: "15px",
    color: "#64748b",
    margin: "0 0 10px 0",
    fontWeight: "500"
  };

  const successTextStyle = {
    fontSize: "14px",
    color: "#64748b",
    margin: "0 0 25px 0",
    fontWeight: "400"
  };

  const socialIconsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px"
  };

  const iconStyle = {
    fontSize: "28px",
    color: "#A6223C",
    cursor: "pointer",
    transition: "transform 0.3s ease"
  };

  const closeSuccessButtonStyle = {
    background: "#A6223C",
    color: "#ffffff",
    padding: "12px 30px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 4px 15px rgba(166, 34, 60, 0.3)"
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Floating Button */}
      <button
        style={buttonStyle}
        onClick={() => {
          window._previousRoute = window.location.pathname;
          window.history.pushState({}, "", "/post-event-report");
          setIsOpen(true);
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Download 2025 Post - Event Report
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button
              style={closeBtnStyle}
              onClick={() => {
                const previous = window._previousRoute || "/";
                window.history.pushState({}, "", previous);
                setIsOpen(false);
              }}
            >
              ×
            </button>

            <h2 style={{ textAlign: "center", fontWeight: "800", marginBottom: "20px" }}>
              Post Event Report
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              
              {/* FIRST / LAST NAME */}
              <div style={formRow}>
                <div style={formGroup}>
                  <label style={labelStyle}>First Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter First Name" 
                    style={inputStyle}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div style={formGroup}>
                  <label style={labelStyle}>Last Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter Last Name" 
                    style={inputStyle}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              {/* COMPANY / TITLE */}
              <div style={formRow}>
                <div style={formGroup}>
                  <label style={labelStyle}>Company Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter Company Name" 
                    style={inputStyle}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div style={formGroup}>
                  <label style={labelStyle}>Job Title *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter Job Title" 
                    style={inputStyle}
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
              </div>

              {/* PHONE / EMAIL */}
              <div style={formRow}>
                <div style={formGroup}>
                  <label style={labelStyle}>Phone *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Phone" 
                    style={inputStyle}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div style={formGroup}>
                  <label style={labelStyle}>Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="Email" 
                    style={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* COUNTRY */}
              <div style={formGroup}>
                <label style={labelStyle}>Country *</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    style={{
                      ...inputStyle,
                      borderRadius: showDropdown && filteredCountries.length > 0 ? "6px 6px 0 0" : "6px"
                    }}
                    placeholder="Type or select your country"
                    value={countryInput}
                    onChange={(e) => {
                      setCountryInput(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  />
                  {showDropdown && filteredCountries.length > 0 && (
                    <div style={dropdownStyle}>
                      {filteredCountries.map((country) => (
                        <div
                          key={country}
                          style={dropdownItemStyle}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f5f5f5";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#ffffff";
                          }}
                          onMouseDown={() => {
                            setCountryInput(country);
                            setShowDropdown(false);
                          }}
                        >
                          {country}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button type="button" style={submitBtn} onClick={handleSubmit}>
                Submit
              </button>

            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div style={successModalStyle} onClick={handleSuccessClose}>
          <div style={successContainerStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={successTitleStyle}>Thank you for requesting for our global Report.</h2>
            <p style={successSubtitleStyle}>Your download is on its way! Our team will be reaching out soon to share the report and walk you through the key takeaways.</p>
            <p style={successTextStyle}>Meanwhile, stay connected with us on LinkedIn, Facebook, X, Instagram for more updates.</p>

            <div style={socialIconsStyle}>
              <a href="https://www.linkedin.com/company/verve-management/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin" style={iconStyle}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}></i>
              </a>
              <a href="https://www.facebook.com/vervemanagementuae/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook" style={iconStyle}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}></i>
              </a>
              <a href="https://x.com/vervemgmtuae" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter" style={iconStyle}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}></i>
              </a>
              <a href="https://www.instagram.com/vervemanagement/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" style={iconStyle}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}></i>
              </a>
            </div>

            <button
              onClick={handleSuccessClose}
              style={closeSuccessButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 8px 25px rgba(166, 34, 60, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(166, 34, 60, 0.3)";
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostEventForm;
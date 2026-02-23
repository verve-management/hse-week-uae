import React, { useState, useEffect } from "react";
import { sendContactForm } from "../../api/email";

console.log("sendContactForm:", sendContactForm);

const SpeakingOpportunity = ({ open, setOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!open) {
      setShowSuccess(false);
    }
  }, [open]);

  if (!open && !showSuccess) return null;

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

const handleClose = () => {
  const previous = window._previousRoute || "/";
  window.history.pushState({}, "", previous);
  setOpen(false);
  setShowSuccess(false);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Get current date and time
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const pageUrl = window.location.href;

  // Build payload as per your backend format
  const payload = {
    formType: "Speaking Opportunity",
    formHeading: "Speaking Opportunity Request",
  };

  // Add only non-empty fields at the top
  if (firstName.trim()) payload.firstName = firstName.trim();
  if (lastName.trim()) payload.lastName = lastName.trim();
  if (companyName.trim()) payload.companyName = companyName.trim();
  if (jobTitle.trim()) payload.jobTitle = jobTitle.trim();
  if (phone.trim()) payload.phone = phone.trim();
  if (email.trim()) payload.email = email.trim();
  if (countryInput.trim()) payload.country = countryInput.trim();

  // Add date, time, URL at the END of the payload
  payload.date = date;
  payload.time = time;
  payload.pageUrl = pageUrl;

  try {
    const res = await sendContactForm(payload);

    if (res?.success) {
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setJobTitle("");
      setPhone("");
      setEmail("");
      setCountryInput("");
      setShowSuccess(true);
    } else {
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setJobTitle("");
      setPhone("");
      setEmail("");
      setCountryInput("");
      setShowSuccess(true);
    }

  } catch (error) {

    if (error.response?.status === 200) {
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setJobTitle("");
      setPhone("");
      setEmail("");
      setCountryInput("");
      setShowSuccess(true);
      return;
    }

    console.error("Submission error:", error);
    alert("Failed to submit. Please try again.");
  }
};

const handleSuccessClose = () => {
  setShowSuccess(false);
  const previous = window._previousRoute || "/";
  window.history.pushState({}, "", previous);
  setOpen(false);
};

  const modalStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(45, 55, 72, 0.75)",
    backdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "20px",
    animation: "fadeIn 0.3s ease"
  };

  const containerStyle = {
    background: "#ffffff",
    width: "100%",
    maxWidth: "750px",
    borderRadius: "12px",
    padding: "40px",
    border: "2px solid #A6223C",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    overflowY: "auto",
    maxHeight: "90vh",
    position: "relative",
    animation: "slideUp 0.4s ease"
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "transparent",
    border: "none",
    fontSize: "28px",
    color: "#2d3748",
    cursor: "pointer",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    transition: "all 0.3s ease"
  };

  const headerStyle = {
    marginBottom: "35px",
    textAlign: "center",
    borderBottom: "3px solid #A6223C",
    paddingBottom: "20px"
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "900",
    color: "#2d3748",
    margin: "0 0 8px 0",
    letterSpacing: "-0.5px"
  };

  const highlightStyle = {
    background: "linear-gradient(135deg, #A6223C 0%, #ff985c 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  };

  const subtitleStyle = {
    fontSize: "14px",
    color: "#64748b",
    margin: 0,
    fontWeight: "500"
  };

  const labelStyle = {
    fontWeight: "700",
    marginBottom: "8px",
    display: "block",
    fontSize: "14px",
    color: "#2d3748",
    letterSpacing: "0.3px"
  };

  const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "8px",
    border: "2px solid #e2e8f0",
    marginBottom: "20px",
    fontSize: "15px",
    color: "#2d3748",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    backgroundColor: "#ffffff"
  };

  const dropdownStyle = {
    position: "absolute",
    width: "100%",
    maxHeight: "200px",
    overflowY: "auto",
    backgroundColor: "#ffffff",
    border: "2px solid #A6223C",
    borderTop: "none",
    borderRadius: "0 0 8px 8px",
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  };

  const dropdownItemStyle = {
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: "15px",
    color: "#2d3748",
    transition: "background-color 0.2s ease"
  };

  const rowStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  };

  const colStyle = {
    flex: "1 1 calc(50% - 10px)",
    minWidth: "250px"
  };

  const buttonStyle = {
    background: "#A6223C",
    color: "#ffffff",
    padding: "16px 40px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
    width: "100%",
    marginTop: "10px",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 4px 15px rgba(255, 107, 53, 0.3)"
  };

  const successModalStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(45, 55, 72, 0.75)",
    backdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000,
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
    fontSize: "24px",
    fontWeight: "900",
    color: "#2d3748",
    margin: "0 0 15px 0",
    letterSpacing: "-0.5px"
  };

  const successSubtitleStyle = {
    fontSize: "16px",
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

      {showSuccess ? (
        <div style={successModalStyle} onClick={handleSuccessClose}>
          <div style={successContainerStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={successTitleStyle}>Thank you for submitting your enquiry.</h2>
            <p style={successSubtitleStyle}>Our account manager will be in touch with you soon.</p>
            <p style={successTextStyle}>Meanwhile, stay connected with us on LinkedIn, Facebook, X, Instagram for more updates.</p>

            <div style={socialIconsStyle}>
              <a
                href="https://www.linkedin.com/company/verve-management/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={iconStyle}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                ></i>
              </a>

              <a
                href="https://www.facebook.com/vervemanagementuae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-facebook"
                  style={iconStyle}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                ></i>
              </a>

              <a
                href="https://x.com/vervemgmtuae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-x-twitter"
                  style={iconStyle}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                ></i>
              </a>

              <a
                href="https://www.instagram.com/vervemanagement/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-instagram"
                  style={iconStyle}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                ></i>
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
      ) : (
        <div style={modalStyle} onClick={handleClose}>
          <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
            <button
              style={closeButtonStyle}
              onClick={handleClose}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f1f5f9";
                e.target.style.color = "#A6223C";
                e.target.style.transform = "rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#2d3748";
                e.target.style.transform = "rotate(0deg)";
              }}
            >
              ×
            </button>

            <div style={headerStyle}>
              <h2 style={titleStyle}>
                Speaking <span style={highlightStyle}>Opportunity</span>
              </h2>
              <p style={subtitleStyle}>Share your expertise and inspire our audience</p>
            </div>

            <div>
              <div style={rowStyle}>
                <div style={colStyle}>
                  <label style={labelStyle}>First Name *</label>
                  <input
                    style={inputStyle}
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#A6223C";
                      e.target.style.boxShadow = "0 0 0 4px rgba(255, 107, 53, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div style={colStyle}>
                  <label style={labelStyle}>Last Name *</label>
                  <input
                    style={inputStyle}
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#A6223C";
                      e.target.style.boxShadow = "0 0 0 4px rgba(255, 107, 53, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div style={rowStyle}>
                <div style={colStyle}>
                  <label style={labelStyle}>Company Name *</label>
                  <input
                    style={inputStyle}
                    placeholder="Enter Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#A6223C";
                      e.target.style.boxShadow = "0 0 0 4px rgba(255, 107, 53, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div style={colStyle}>
                  <label style={labelStyle}>Job Title *</label>
                  <input
                    style={inputStyle}
                    placeholder="Enter Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#A6223C";
                      e.target.style.boxShadow = "0 0 0 4px rgba(255, 107, 53, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div style={rowStyle}>
                <div style={colStyle}>
                  <label style={labelStyle}>Phone *</label>
                  <input
                    style={inputStyle}
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#A6223C";
                      e.target.style.boxShadow = "0 0 0 4px rgba(255, 107, 53, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div style={colStyle}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    style={inputStyle}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#A6223C";
                      e.target.style.boxShadow = "0 0 0 4px rgba(255, 107, 53, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <label style={labelStyle}>Country *</label>
              <div style={{ position: "relative", marginBottom: "20px" }}>
                <input
                  type="text"
                  style={{
                    ...inputStyle,
                    marginBottom: 0,
                    borderRadius: showDropdown && filteredCountries.length > 0 ? "8px 8px 0 0" : "8px"
                  }}
                  placeholder="Type or select your country"
                  value={countryInput}
                  onChange={(e) => {
                    setCountryInput(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#A6223C";
                    e.target.style.boxShadow = "0 0 0 4px rgba(255, 107, 53, 0.1)";
                    setShowDropdown(true);
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.boxShadow = "none";
                    setTimeout(() => setShowDropdown(false), 200);
                  }}
                />
                {showDropdown && filteredCountries.length > 0 && (
                  <div style={dropdownStyle}>
                    {filteredCountries.map((country) => (
                      <div
                        key={country}
                        style={dropdownItemStyle}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#fff5f2";
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

              <button
                onClick={handleSubmit}
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow = "0 8px 25px rgba(255, 107, 53, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(255, 107, 53, 0.3)";
                }}
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpeakingOpportunity;
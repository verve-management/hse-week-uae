import React, { useState } from "react";
import {sendContactForm} from "../../api/email"

const Booth = ({ open, setOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [interest, setInterest] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  if (!open) return null;

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
};


const handleSubmit = async (e) => {
  e.preventDefault();

  // Capture date & time
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  const timeFormatted = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  // Build payload with only form fields first
  const payload = {
    formType: "Booth Booking",
  };

  if (firstName.trim()) payload.firstName = firstName.trim();
  if (lastName.trim()) payload.lastName = lastName.trim();
  if (companyName.trim()) payload.companyName = companyName.trim();
  if (jobTitle.trim()) payload.jobTitle = jobTitle.trim();
  if (phone.trim()) payload.phone = phone.trim();
  if (email.trim()) payload.email = email.trim();
  if (countryInput.trim()) payload.country = countryInput.trim();
  if (interest.trim()) payload.interest = interest.trim();

  // Append date, time, page URL at the bottom (last)
  payload.date = dateFormatted;
  payload.time = timeFormatted;
  payload.pageUrl = window.location.href;

  // Send form
  await sendContactForm(payload);


  // Reset fields
  setFirstName("");
  setLastName("");
  setCompanyName("");
  setJobTitle("");
  setPhone("");
  setEmail("");
  setCountryInput("");
  setInterest("");
alert("Booth booking submitted!");

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
    border: "2px solid #ff6b35",
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
    borderBottom: "3px solid #ff6b35",
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
    background: "linear-gradient(135deg, #ff6b35 0%, #ff985c 100%)",
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
    border: "2px solid #ff6b35",
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

  const radioContainerStyle = {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  };

  const radioLabelStyle = {
    display: "flex",
    alignItems: "center",
    padding: "14px 18px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "15px",
    color: "#2d3748",
    fontWeight: "500",
    backgroundColor: "#ffffff"
  };

  const radioInputStyle = {
    marginRight: "12px",
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#ff6b35"
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
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

  return (
    <>
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
   <div style={modalStyle} onClick={handleClose}>

        <div style={containerStyle} onClick={(e) => e.stopPropagation()}>
          <button 
            style={closeButtonStyle}
          onClick={handleClose}

            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f1f5f9";
              e.target.style.color = "#ff6b35";
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
              Book a <span style={highlightStyle}>Booth</span>
            </h2>
            <p style={subtitleStyle}>Fill out the form below to reserve your exhibition space</p>
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
                    e.target.style.borderColor = "#ff6b35";
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
                    e.target.style.borderColor = "#ff6b35";
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
                    e.target.style.borderColor = "#ff6b35";
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
                    e.target.style.borderColor = "#ff6b35";
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
                    e.target.style.borderColor = "#ff6b35";
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
                    e.target.style.borderColor = "#ff6b35";
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
                  e.target.style.borderColor = "#ff6b35";
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

            <label style={labelStyle}>I'm interested in: *</label>
            <div style={radioContainerStyle}>
              <label 
                style={radioLabelStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff6b35";
                  e.currentTarget.style.backgroundColor = "#fff5f2";
                }}
                onMouseLeave={(e) => {
                  if (interest !== "Exhibition Space") {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.backgroundColor = "#ffffff";
                  }
                }}
              >
                <input 
                  type="radio" 
                  name="interest" 
                  style={radioInputStyle}
                  checked={interest === "Exhibition Space"}
                  onChange={() => setInterest("Exhibition Space")}
                />
                Exhibition Space
              </label>
              <label 
                style={radioLabelStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff6b35";
                  e.currentTarget.style.backgroundColor = "#fff5f2";
                }}
                onMouseLeave={(e) => {
                  if (interest !== "Speaking Slot") {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.backgroundColor = "#ffffff";
                  }
                }}
              >
                <input 
                  type="radio" 
                  name="interest" 
                  style={radioInputStyle}
                  checked={interest === "Speaking Slot"}
                  onChange={() => setInterest("Speaking Slot")}
                />
                Speaking Slot
              </label>
              <label 
                style={radioLabelStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff6b35";
                  e.currentTarget.style.backgroundColor = "#fff5f2";
                }}
                onMouseLeave={(e) => {
                  if (interest !== "Branding & Visibility") {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.backgroundColor = "#ffffff";
                  }
                }}
              >
                <input 
                  type="radio" 
                  name="interest" 
                  style={radioInputStyle}
                  checked={interest === "Branding & Visibility"}
                  onChange={() => setInterest("Branding & Visibility")}
                />
                Branding & Visibility
              </label>
              <label 
                style={radioLabelStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff6b35";
                  e.currentTarget.style.backgroundColor = "#fff5f2";
                }}
                onMouseLeave={(e) => {
                  if (interest !== "Delegate List") {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.backgroundColor = "#ffffff";
                  }
                }}
              >
                <input 
                  type="radio" 
                  name="interest" 
                  style={radioInputStyle}
                  checked={interest === "Delegate List"}
                  onChange={() => setInterest("Delegate List")}
                />
                Delegate List
              </label>
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
              Submit Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booth;
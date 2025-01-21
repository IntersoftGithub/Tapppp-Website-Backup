import React, { useState, useEffect } from "react";
import img1 from "../assets/delights.jpg";
import img2 from "../assets/file1.png";
import img3 from "../assets/kiswalogo.png";
import logo from "../assets/TappppNewLogo.png";
import { useNavigate } from "react-router-dom";
import { addStore, checkDomainAvailability } from "../ApiHandler/Handler";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for toast

const BusinessStoreForm = () => {
  const [step, setStep] = useState(1); // State to track the current step
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const [alert, setAlert] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Tracks button state

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
    cnic: "",
    email: "",
    domainName: "",
    businessName: "",
    pickupAddress: "",
  }); // State to hold form data
  const [errors, setErrors] = useState({}); // State to track validation errors
  const [cities, setCities] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [selectedCity, setSelectedCity] = useState(""); // State for the selected city
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      try {
        // Check if cities data is already in localStorage
        const cachedCities = localStorage.getItem("cities");

        if (cachedCities) {
          // Parse and set the cached data
          setCities(JSON.parse(cachedCities));
        } else {
          // Fetch data from the API if not available in localStorage
          const response = await fetch("https://oms.getorio.com/api/cities", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
            },
            body: JSON.stringify({ country_id: 1 }),
          });

          const data = await response.json();

          // Filter valid cities
          const validCities = data.filter(
            (city) =>
              city?.city_name &&
              city?.id &&
              city?.country_id &&
              city?.province_id
          );

          // Save the valid cities to localStorage
          localStorage.setItem("cities", JSON.stringify(validCities));

          // Update the state
          setCities(validCities);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const validateFields = () => {
    let validationErrors = {};

    if (step === 1) {
      const requiredFields = [
        "name",
        "address",
        "city",
        "phone",
        "cnic",
        "email",
      ];
      requiredFields.forEach((field) => {
        if (!formData[field]?.trim()) {
          validationErrors[field] = "This field is required";
        }
      });

      // Validate phone number
      if (formData.phone && !/^\d{1,11}$/.test(formData.phone)) {
        validationErrors.phone =
          "Phone number must be numeric and not exceed 11 digits";
      }

      // Validate CNIC
      if (formData.cnic && !/^\d{1,14}$/.test(formData.cnic)) {
        validationErrors.cnic = "CNIC must be numeric and not exceed 14 digits";
      }
    }

    if (step === 2) {
      const requiredFields = ["domainName", "businessName", "pickupAddress"];
      requiredFields.forEach((field) => {
        if (!formData[field]?.trim()) {
          validationErrors[field] = "This field is required";
        }
      });

      // Validate image input
      const imageInput = document.getElementById("imageInput");
      if (!imageInput || imageInput.files.length === 0) {
        validationErrors.imageInput = "Image is required";
      }
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // const handleDomainChecker = async (event) => {
  //   let value = event.target.value;

  //   // Convert the domain name to lowercase by default
  //   value = value.toLowerCase();

  //   // Regex to allow only alphabetic characters and dots
  //   const regex = /^[a-z.]*$/;

  //   // If the input matches the regex, update the form data
  //   if (regex.test(value) || value === "") {
  //     setFormData({ ...formData, domainName: value });

  //     if (value.trim()) {
  //       const domainName = `${value}.tapppp.com`;
  //       const data = await checkDomainAvailability(domainName);
  //       setAlert(data.alert);
  //     } else {
  //       setAlert(null);
  //     }
  //   } else {
  //     // If the input doesn't match, set the domain name to the previous valid value
  //     setFormData({ ...formData, domainName: formData.domainName });
  //   }
  // };
  const handleDomainChecker = async (event) => {
    let value = event.target.value.toLowerCase();

    // Allow only alphabetic characters and dots
    const regex = /^[a-z.]*$/;
    if (regex.test(value) || value === "") {
      setFormData({ ...formData, domainName: value });

      if (value.trim()) {
        const domainName = `${value}.tapppp.com`;

        try {
          const data = await checkDomainAvailability(domainName);

          if (data.alert === "Exist") {
            setErrors((prevErrors) => ({
              ...prevErrors,
              domainName: "Domain already exists",
            }));
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              domainName: "",
            }));
          }

          setAlert(data.alert);
        } catch (error) {
          console.error("Error checking domain availability:", error);
        }
      } else {
        setAlert(null);
        setErrors((prevErrors) => ({
          ...prevErrors,
          domainName: "",
        }));
      }
    } else {
      // Revert to the previous valid domain name
      setFormData({ ...formData, domainName: formData.domainName });
    }
  };

  const handleSubmit = async () => {
    if (validateFields()) {
      if (alert === "Exist") {
        setErrors((prev) => ({ ...prev, domainName: "Domain already exists" }));
        return;
      }

      const imageInput = document.getElementById("imageInput");
      if (imageInput && imageInput.files.length > 0) {
        const file = imageInput.files[0];
        try {
          setIsSubmitting(true); // Disable button
          const base64Image = await convertToBase64(file);

          // Find the selected city details
          const cityDetails = cities.find(
            (city) => city.city_name === formData.city
          );

          if (!cityDetails) {
            toast.error("Selected city is invalid.");
            return;
          }

          const transformedData = {
            OwnerName: formData.name,
            StoreLocation: formData.address,
            StoreCity: cityDetails.city_name,
            cityid: cityDetails.id,
            countryid: cityDetails.country_id,
            provinceid: cityDetails.province_id,
            StoreContact: formData.phone,
            OwnerCnic: formData.cnic,
            OwnerEmail: formData.email,
            StoreLink: formData.domainName
              ? `${formData.domainName}.tapppp.com`
              : "",
            StoreName: formData.businessName,
            PickupAddress: formData.pickupAddress,
            StoreImg: base64Image,
          };
          console.log(transformedData);
          const response = await addStore(transformedData);

          if (response) {
            const { userName, userPassword, StoreLink } = response;
            const formattedResponse = {
              userName,
              userPassword,
              StoreLink: StoreLink || transformedData.StoreLink,
            };

            toast.success("Store created successfully!");
            setIsSubmitted(true);

            const responseText = JSON.stringify(formattedResponse, null, 2);
            downloadAsTextFile("store_creation_response.txt", responseText);
          }
        } catch (error) {
          toast.error("Error submitting form. Please try again.");
          console.error("Error submitting form:", error);
        } finally {
          setIsSubmitting(false); // Re-enable button
        }
      }
    }
  };

  // Utility to download text as a file
  const downloadAsTextFile = (filename, textContent) => {
    const element = document.createElement("a");
    const file = new Blob([textContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element);
  };

  const filteredCities = cities.filter((city) =>
    city.city_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Prevent numbers in the city field
    if (id === "city" && /\d/.test(value)) {
      return; // Prevent invalid input
    }

    // Validate CNIC input for numeric characters and maximum length
    if (id === "cnic" && (!/^\d*$/.test(value) || value.length > 14)) {
      return; // Prevent invalid input
    }

    // Validate phone: numeric and not exceeding 11 characters
    if (id === "phone" && (!/^\d*$/.test(value) || value.length > 11)) {
      return; // Prevent invalid input
    }

    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear errors for the current field
  };

  const handleNext = () => {
    if (validateFields()) {
      if (step === 2 && alert === "Exist") {
        setErrors((prev) => ({ ...prev, domainName: "Domain already exists" }));
        return;
      }
      setStep(step + 1);
    } else {
      console.log("Validation Errors:", errors);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      // Navigate to the previous route
      navigate("/"); // Go back to the previous page in history
    }
  };

  // const handleDomainChecker = (event) => {
  //   const value = event.target.value;
  //   setFormData({ ...formData, domainName: value });

  //   // Only check domain if value is not empty
  //   if (value.trim()) {
  //     const domainName = `${value}.tapppp.com`; // Append ".tapppp.com"

  //     // Fetch API to check domain existence
  //     fetch(
  //       `http://192.168.100.166:201/api/Stores/domain_check?domain_name=${domainName}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "*/*",
  //         },
  //         body: "", // Empty body as specified
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setAlert(data.alert); // Store response in alert state
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   } else {
  //     // Clear alert if domainName is empty
  //     setAlert(null);
  //   }
  // };

  // Function to convert an image file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result); // Resolve with Base64 string
      reader.onerror = (error) => reject(error); // Reject on error
      reader.readAsDataURL(file); // Start reading the file
    });
  };

  // const handleSubmit = async () => {
  //   if (validateFields()) {
  //     if (alert === "Exist") {
  //       setErrors((prev) => ({ ...prev, domainName: "Domain already exists" }));
  //       return;
  //     }

  //     const imageInput = document.getElementById("imageInput");
  //     if (imageInput && imageInput.files.length > 0) {
  //       const file = imageInput.files[0];
  //       try {
  //         const base64Image = await convertToBase64(file);
  //         const transformedData = {
  //           OwnerName: formData.name,
  //           StoreLocation: formData.address,
  //           StoreCity: formData.city,
  //           StoreContact: formData.phone,
  //           OwnerCnic: formData.cnic,
  //           OwnerEmail: formData.email,
  //           StoreLink: formData.domainName
  //             ? `${formData.domainName}.tapppp.com`
  //             : "",
  //           StoreName: formData.businessName,
  //           PickupAddress: formData.pickupAddress,
  //           StoreImg: base64Image,
  //         };

  //         const response = await fetch(
  //           "http://192.168.100.166:201/api/Stores/Add_Store",
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(transformedData),
  //           }
  //         );

  //         if (response.ok) {
  //           const responseBody = await response.json();
  //           console.log("Store created successfully:", responseBody);
  //           setIsSubmitted(true);
  //         } else {
  //           console.error("Failed to add store:", await response.json());
  //         }
  //       } catch (error) {
  //         console.error("Error converting image to Base64:", error);
  //       }
  //     } else {
  //       console.error("Please select an image file.");
  //     }
  //   }
  // };

  if (isSubmitted) {
    // Render the "Waiting Approval" template
    return (
      <div className="flex xsmall:justify-between flex-row min-h-screen w-full">
        {/* Left Section */}
        <div className="bg-[#f9fafc] xsmall:w-[65%] flex flex-col small:relative">
          {/* Heading Section */}
          <div className=" mb-10 small:p-10 small:[4rem] xsmall:pl-[4.4rem] xsmall:pt-[2.8rem] ">
            {" "}
            <h1 className="xsmall:text-[24px] small:text-[20px] font-bold text-blue-900">
              Tapppp<span className="text-[#c0e226]">.</span>
            </h1>
          </div>

          {/* Content Section */}
          <div className="flex flex-col small:justify-center small:items-center xsmall:items-start xsmall:justify-center flex-grow">
            <div className="xsmall:w-[60%] xsmall:text-left small:w-full small:text-center md:w-[60%] md:text-left">
              <div className="xsmall:pl-[4.4rem] small:p-10 xsmall:text-left xsmall:pt-0 small:pt-0">
                <h2 className="text-[22px] font-bold mb-2">Waiting Approval</h2>
                <p className="text-gray-500 text-[13px] mb-6 ">
                  You will receive an email and WhatsApp/SMS for your sign-in
                  credentials within 1-3 hours.
                </p>
                <button className="bg-[#ccff00] text-[12px] text-black px-6 py-2 rounded-lg hover:bg-lime-600">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center bg-[#222244] content-center small:hidden xsmall:block xsmall:w-[35%] justify-center min-h-screen ">
          <div className=" text-white p-10 pb-14 flex flex-col ">
            {/* Logo Image */}
            <div>
              <img
                src={logo}
                alt="Logo"
                className="mb-6 w-14 h-14 object-contain"
              />
            </div>

            <h3 className="text-[24px] leading-[1.r4em] font-semibold">
              Start Your
            </h3>
            <h3 className="text-[24px] leading-[1.4rem] font-semibold mb-4">
              Journey With Us
            </h3>

            <p className="text-[12px] text-gray-300">
              Your all-in-one platform for business success. We handle the
              complexities of your business, so you can focus on growing your
              sales.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex  xsmall:justify-between xsmall:flex-row min-h-screen">
      {/* Left Section */}
      <div className="bg-[#f9fafc] content-center  small:p-10 xsmall:p-20 xsmall:pb-0 xsmall:pt-8 w-full xsmall:w-[70%]">
        <div className="xsmall:mb-6 ">
          <h1 className="xsmall:text-[24px] small:text-[20px] font-bold text-blue-900">
            Tapppp<span className="text-[#c0e226]">.</span>
          </h1>
        </div>
        <h2 className="xsmall:text-[20px] small:text-[16px] font-semibold mt-3">
          {step === 1
            ? "Create Your Online Business Store"
            : "Business Details"}
        </h2>
        <p className="text-gray-500 w-full xsmall:w-[60%] mt-[1px] small:text-[11px] xsmall:text-[13px]">
          {step === 1
            ? "Easily add your store details and start selling instantly with seamlessly integrated business operations."
            : "Add your business details to complete the setup."}
        </p>

        <form className="mt-7 space-y-5">
          {step === 1 && (
            <div className="space-y-4 w-full xsmall:w-[80%]">
              {["name", "address"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-[13px] mb-1 font-medium"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                    {errors[field] && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="text"
                    id={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder="Input text"
                    className={`w-full text-[16px] bg-[#ffffff] border ${
                      errors[field] ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-[10px] py-[7px] focus:outline-none focus:ring-2 ${
                      errors[field]
                        ? "focus:ring-red-500"
                        : "focus:ring-blue-500"
                    }`}
                  />
                </div>
              ))}

              {/* Flex Row for Phone and City */}
              {/* Flex Row for Phone and City */}
              {/* Flex Row for Phone and City */}
              <div className="flex flex-col xsmall:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="block text-[13px] mb-1 font-medium"
                  >
                    Phone
                    {errors.phone && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className={`w-full text-[16px] bg-[#ffffff] border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-[10px] py-[7px] focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "focus:ring-red-500"
                        : "focus:ring-blue-500"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="city"
                    className="block text-[13px] mb-1 font-medium"
                  >
                    City
                    {errors.city && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="city"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-[16px] px-[10px] py-[7px]"
                      placeholder="Type or select a city"
                      value={searchTerm} // Always show the current search term
                      onChange={(e) => {
                        setSearchTerm(e.target.value); // Update the search term
                        setIsAccordionOpen(true); // Open the dropdown when typing
                      }}
                      onFocus={() => setIsAccordionOpen(true)} // Open the dropdown on focus
                      onBlur={() => {
                        // Delay closing to allow city selection
                        setTimeout(() => setIsAccordionOpen(false), 150);
                      }}
                    />
                    {isAccordionOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-[150px] overflow-y-auto">
                        {filteredCities.length > 0 ? (
                          <ul>
                            {filteredCities.map((city) => (
                              <li
                                key={city.id}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[12px]"
                                onMouseDown={() => {
                                  // Use onMouseDown to ensure the blur event doesn't override the selection
                                  setSearchTerm(city.city_name); // Set the selected city
                                  setSelectedCity(city.city_name); // Store the selected city
                                  setFormData((prev) => ({
                                    ...prev,
                                    city: city.city_name,
                                  })); // Update form data
                                }}
                              >
                                {city.city_name}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="px-4 py-2 text-gray-500 text-[12px]">
                            No cities found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Flex Row for CNIC and Email */}
              <div className="flex flex-col xsmall:flex-row gap-4">
                {["cnic", "email"].map((field) => (
                  <div key={field} className="flex-1 ">
                    <label
                      htmlFor={field}
                      className="block text-[16px] mb-1 font-medium"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                      {errors[field] && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder="Input text"
                      className={`w-full text-[16px] bg-[#ffffff] border ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      } rounded-lg px-[10px] py-[7px] focus:outline-none focus:ring-2 ${
                        errors[field]
                          ? "focus:ring-red-500"
                          : "focus:ring-blue-500"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 xsmall:w-[80%]">
              <div>
                <label
                  htmlFor="imageInput"
                  className="block mb-1 text-[16px] font-medium"
                >
                  Upload Image
                  {errors.imageInput && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  className={`w-full bg-[#ffffff] text-[16px] border ${
                    errors.imageInput ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-[10px] focus:outline-none focus:ring-2 ${
                    errors.imageInput
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="domainName"
                  className="block text-[13px] mb-1 font-medium"
                >
                  Domain Name
                  {errors.domainName && <span className="text-red-500">*</span>}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="domainName"
                    value={formData.domainName}
                    onChange={handleDomainChecker}
                    placeholder="Input text"
                    className={`w-full bg-[#ffffff] text-[16px] border ${
                      errors.domainName ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-[10px] py-[7px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <span className="bg-gray-200 flex items-center justify-center px-3 py-[7px] text-[12px] rounded-r-lg text-gray-500">
                    .tapppp.com
                  </span>
                </div>

                {alert && (
                  <p
                    className={`mt-0.5 text-[9px] ${
                      alert === "Exist" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {alert === "Exist"
                      ? "This domain exists."
                      : "Domain available"}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="businessName"
                  className="block mb-1 text-[13px] font-medium"
                >
                  Business Name
                  {errors.businessName && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Input text"
                  className={`w-full bg-[#ffffff] text-[16px] border ${
                    errors.businessName ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-[10px] py-[7px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <div>
                <label
                  htmlFor="pickupAddress"
                  className="block mb-1 text-[13px] font-medium"
                >
                  Pickup Address
                  {errors.pickupAddress && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <textarea
                  id="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleInputChange}
                  placeholder="Input text"
                  className={`w-full bg-[#ffffff] text-[16px] border ${
                    errors.pickupAddress ? "border-red-500" : "border-gray-300"
                  } rounded-lg px-[10px] py-[7px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>
          )}

          <div className="flex xsmall:gap-6 small:gap-3 items-center">
            <button
              type="button"
              onClick={handleBack}
              className="bg-[#f0f4f7] small:text-[12px] xsmall:text-[14px] text-gray-400 px-8 py-2 rounded-lg hover:bg-gray-300"
              // disabled={step === 1}
            >
              Back
            </button>
            <button
              type="button"
              onClick={step === 2 ? handleSubmit : handleNext}
              disabled={isSubmitting} // Disable when submitting
              className={`bg-[#ccff00] small:text-[12px] xsmall:text-[14px] text-black px-8 py-2 rounded-lg hover:bg-lime-600 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : step === 1 ? "Next" : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-[#222244] small:hidden xsmall:block w-[35%] text-white p-10 ">
        <h3 className="text-[14px] mt-12 font-semibold">Step {step}</h3>
        <h4 className="text-[16px]  text-[#acd02d] font-medium mt-2">
          {step === 1 ? "Personal Details" : "Business Details"}
        </h4>
        <div className="flex space-x-2 mt-1">
          <div
            className={`h-1 w-20 ${
              step === 1 ? "bg-[#0c7ee5]" : "bg-[#b7bbc9]"
            }`}
          ></div>
          <div
            className={`h-1 w-20 ${
              step === 2 ? "bg-[#0c7ee5]" : "bg-[#b7bbc9]"
            }`}
          ></div>
        </div>

        <p className="text-sm text-gray-300 mt-4">
          {step === 1
            ? "Please provide your personal details to continue."
            : "Add your business details to complete the setup."}
        </p>

        {step === 1 && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3 bg-white p-3 rounded-[5px]">
              <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                N
              </div>
              <p className="text-[14px] text-[#b9bbbc]">Name</p>
            </div>
            <div className="flex items-center space-x-3 bg-white p-3 rounded-[5px]">
              <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                A
              </div>
              <p className="text-[14px] text-[#b9bbbc]">Address</p>
            </div>
            <div className="flex items-center space-x-3 bg-white p-3 rounded-[5px]">
              <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                C
              </div>
              <p className="text-[14px] text-[#b9bbbc]">City</p>
            </div>
          </div>
        )}

        {/* Placeholder Layout for Step 2 */}
        {step === 2 && (
          <div className="mt-6 space-y-4">
            {/* Item 1 */}
            <div className="flex items-center space-x-4 p-3 rounded-sm bg-white">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={img3}
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-4 p-3 rounded-sm bg-white">
              {/* <div className="w-12 h-12 rounded-full bg-gray-200">
                
              </div> */}
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={img1}
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-4 p-3 rounded-sm bg-white">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={img2}
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default BusinessStoreForm;

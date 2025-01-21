const BASE_URL = "https://api.tapppp.com/api";

export const checkDomainAvailability = async (domainName) => {
  try {
    const response = await fetch(
      `${BASE_URL}/Stores/domain_check?domain_name=${domainName}`,
      {
        method: "POST",
        headers: {
          Accept: "*/*",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to check domain availability");
    }
    return await response.json();
  } catch (error) {
    console.error("Error checking domain:", error);
    return { alert: null };
  }
};

export const addStore = async (storeData) => {
  try {
    const response = await fetch(`${BASE_URL}/Stores/Add_Store`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storeData),
    });
    if (!response.ok) {
      throw new Error("Failed to add store");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding store:", error);
    return null;
  }
};

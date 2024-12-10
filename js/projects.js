const arrayOfData = async () => {
  try {
    const response = await fetch("../imagesDataListing/imagesList.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const gallery = document.getElementById("projectBody");

    if (!gallery) {
      console.error("No element found with ID 'projectBody'");
      return;
    }

    // Loop through each item in the JSON
    data.forEach((item) => {
      // Create an image card
      const card = document.createElement("div");
      card.style.border = "1px solid red";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.display = "inline-block";
      card.style.textAlign = "center";

      // Create and append an image
      const img = document.createElement("img");
      img.src = item.url;
      img.alt = item.name;
      img.style.width = "150px";
      img.style.height = "auto";
      card.appendChild(img);

      // Create and append a title
      const title = document.createElement("h3");
      title.textContent = item.name;
      card.appendChild(title);

      // Create and append a description
      const desc = document.createElement("p");
      desc.textContent = item?.description || "No description available.";
      card.appendChild(desc);

      // Append the card to the gallery
      gallery.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading the JSON:", error);
  }
};

arrayOfData();

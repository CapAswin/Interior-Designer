import data from "../imagesDataListing/imagesList.json";
let arrayOfData = async () => {
  console.log(data);
  const gallery = document.getElementById("projectBody");
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
    desc.textContent = item?.description;
    card.appendChild(desc);

    // Append the card to the gallery
    console.log(gallery);
    gallery.appendChild(card);
  });
};
arrayOfData();

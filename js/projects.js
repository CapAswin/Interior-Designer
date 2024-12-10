const data = [
  {
    category: "stair",
    imgs: [
      {
        name: "",
        path: "../images/projects/stair/stair-1.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-2.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-3.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-4.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-5.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-6.webp",
        discription: "",
      },
    ],
  },
  {
    category: "chair",
    imgs: [
      {
        name: "",
        path: "../images/projects/chair/sittingArea.jpg",
        discription: "",
      },
    ],
    name: "Sofa",
  },
];

let arrayOfData = async () => {
  const gallery = document.getElementById("projectBody");
  // Loop through each item in the JSON
  data.forEach((item) => {
    // Create an image card
    item.imgs.map((e) => {
      const card = document.createElement("div");
      card.style.border = "1px solid red";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.display = "inline-block";
      card.style.textAlign = "center";

      // Create and append an image
      const img = document.createElement("img");
      console.log(e);
      img.src = e.path;
      img.alt = e.name;
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
      gallery.appendChild(card);
    });
  });
};
arrayOfData();

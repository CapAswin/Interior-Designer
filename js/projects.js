const data = [
  {
    category: "Stair",
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
        path: "../images/projects/stair/stair-4.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-3.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-5.jpeg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-6.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-7.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-8.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-9.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/stair/stair-10.jpg",
        discription: "",
      },
    ],
  },
  {
    category: "Chair",
    imgs: [
      {
        name: "",
        path: "../images/projects/chair/sittingArea.jpg",
        discription: "",
      },
    ],
  },
];
let eachImg = (item, gallery) => {
  item.imgs.forEach((e) => {
    const card = document.createElement("li");

    // Create and append an image
    const img = document.createElement("img");
    img.className = "hover-effect";
    img.src = e.path;
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
};

let arrayOfData = async () => {
  const parentGallery = document.getElementById("bodyForProject");
  data.forEach((item) => {
    const listUl = document.createElement("ul");
    if (item.imgs.length !== 0) {
      // Create a container for each category
      const categoryContainer = document.createElement("div");
      categoryContainer.style.display = "flex";
      categoryContainer.style.flexWrap = "wrap";
      categoryContainer.style.flexDirection = "column";
      categoryContainer.style.marginBottom = "5px";
      categoryContainer.style.padding = "10px";
      categoryContainer.style.justifyContent = "center";
      categoryContainer.style.alignItems = "center";

      // Add category heading
      const categoryHead = document.createElement("h1");
      categoryHead.textContent = item.category;
      categoryContainer.appendChild(categoryHead);

      // Add a gallery for the images
      const gallery = document.createElement("div");
      gallery.style.display = "flex";
      gallery.style.flexWrap = "wrap";
      gallery.style.justifyContent = "center";
      gallery.style.alignItems = "center";
      gallery.style.padding = "10px";
      categoryContainer.appendChild(gallery);

      // Populate the gallery with images
      eachImg(item, listUl);

      // Append the category container to the parent gallery
      parentGallery.appendChild(categoryContainer);
      parentGallery.appendChild(listUl);
    }
  });
};

arrayOfData();

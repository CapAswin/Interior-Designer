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
  {
    category: "Bed Room",
    imgs: [
      {
        name: "",
        path: "../images/projects/bedRoom/bed-1.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/bedRoom/bed-2.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/bedRoom/bed-3.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/bedRoom/bed-4.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/bedRoom/bed-5.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/bedRoom/bed-6.jpg",
        discription: "",
      },
    ],
  },
  {
    category: "Living Room",
    imgs: [
      {
        name: "",
        path: "../images/projects/hall/hall-1.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/hall/hall-2.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/hall/hall-3.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/hall/hall-4.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/hall/hall-5.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/hall/hall-6.webp",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/hall/hall-7.jpg",
        discription: "",
      },
    ],
  },
];
const parentGallery = document.getElementById("bodyForProject");
let eachImg = (item, gallery) => {
  item.imgs.forEach((e) => {
    const card = document.createElement("li");
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "flex";
    const modalImg = document.createElement("img");
    modalImg.src = e.path;
    const closeModalBtn = document.createElement("a");
    closeModalBtn.className = "closeModalBtn";
    closeModalBtn.innerHTML = "&times;";
    modal.append(modalImg, closeModalBtn);
    modal?.addEventListener("wheel", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    card.onclick = () => {
      parentGallery.appendChild(modal);
    };
    closeModalBtn.onclick = () => {
      parentGallery.removeChild(modal);
    };
    // Create and append an image
    const img = document.createElement("img");
    img.className = "hover-effect";
    img.src = e.path;
    card.appendChild(img);

    // Create and append a description
    const desc = document.createElement("p");
    desc.textContent = item?.description;
    card.appendChild(desc);

    // Append the card to the gallery
    gallery.appendChild(card);
  });
};
let imageInitial = (click, item) => {
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  const imgTop = document.createElement("img");
  imgTop.className = "img-top";
  imgTop.src = item.imgs[0].path;
  const imgBottomLeft = document.createElement("img");
  imgBottomLeft.className = "img-bottom-left";
  imgBottomLeft.src = item.imgs[1].path;
  const imgBottomRight = document.createElement("img");
  imgBottomRight.className = "img-bottom-right";
  imgBottomRight.src = item.imgs[2].path;

  imageContainer.onclick = () => {
    if (item.category !== imageContainer.id) {
      click();
      imageContainer.id = item.category;
    }
  };
  imageContainer.textContent = item.category;
  parentGallery.appendChild(imageContainer);
  imageContainer.append(imgTop, imgBottomLeft, imgBottomRight);
};
let arrayOfData = async () => {
  data.forEach((item) => {
    const listUl = document.createElement("ul");
    if (item.imgs.length !== 0) {
      // Create a container for each category
      const categoryContainer = document.createElement("div");
      categoryContainer.className = "categoryContainer";

      // Add category heading
      const categoryHead = document.createElement("h1");
      categoryHead.textContent = item.category;
      categoryContainer.appendChild(categoryHead);

      // Add a gallery for the images
      const gallery = document.createElement("div");
      gallery.className = "galleryImg";

      categoryContainer.appendChild(gallery);

      // Populate the gallery with images
      if (item.imgs.length < 4) {
        eachImg(item, listUl);
      } else {
        const abc = () => eachImg(item, listUl);
        imageInitial(abc, item);
      }

      // Append the category container to the parent gallery
      parentGallery.append(categoryContainer, listUl);
    }
  });
};

arrayOfData();

const data = [
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
  {
    category: "Kitchen",
    imgs: [
      {
        name: "",
        path: "../images/projects/kitchen/kitchen1.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/kitchen/kitchen2.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/kitchen/kitchen3.jpg",
        discription: "",
      },
      {
        name: "",
        path: "../images/projects/kitchen/kitchen4.jpg",
        discription: "",
      },
    ],
  },
];
const parentGallery = document.getElementById("bodyForProject");
const eachImg = (item, gallery) => {
  item.imgs.forEach((e) => {
    const card = document.createElement("li");
    card.className = "cards";
    // Modal creation
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "none"; // Initially hidden

    const modalImg = document.createElement("img");
    modalImg.src = e.path;
    modalImg.className = "modal-img";

    const closeModalBtn = document.createElement("a");
    closeModalBtn.className = "closeModalBtn";
    closeModalBtn.innerHTML = "&times;";

    modal.append(modalImg, closeModalBtn);

    // Prevent scrolling when modal is open
    modal.addEventListener("wheel", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    // Add modal open and close animations
    card.onclick = () => {
      parentGallery.appendChild(modal);
      modal.style.display = "flex";
      modal.classList.add("fade-in");
      modal.classList.remove("fade-out");
    };

    closeModalBtn.onclick = () => {
      modal.classList.add("fade-out");
      modal.classList.remove("fade-in");
      setTimeout(() => {
        modal.style.display = "none";
        parentGallery.removeChild(modal);
      }, 300); // Matches the animation duration
    };

    // Create and append an image
    const img = document.createElement("img");
    img.className = "hover-effect";
    img.src = e.path;
    img.loading = "lazy";
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
      listUl.className = "list-ul";
      // Append the category container to the parent gallery
      parentGallery.append(categoryContainer, listUl);
    }
  });
};

arrayOfData();

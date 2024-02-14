import React, { useState, useEffect } from "react";

const Components = [
  {
    categories: [
      { name: "all" },
      { name: "mountains" },
      { name: "the sea" },
      { name: "architecture" },
      { name: "the city" },
    ],
    collections: [
      {
        category: 1,
        name: "mountain hiking",

        photo: [
          "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s",
          "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/414122/pexels-photo-414122.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 2,
        name: "sea",
        photo: [
          "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4035587/pexels-photo-4035587.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "wolk by city",
        photo: [
          "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/8155/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 2,
        name: "sea",
        photo: [
          "https://images.pexels.com/photos/1072842/pexels-photo-1072842.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "somewhere in Europe.",
        photo: [
          "https://images.pexels.com/photos/842948/pexels-photo-842948.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/631008/pexels-photo-631008.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/3889873/pexels-photo-3889873.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 2,
        name: "travel/leisure",
        photo: [
          "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1802268/pexels-photo-1802268.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1586795/pexels-photo-1586795.jpeg?auto=compress&cs=tinysrgb&w=600 ",
          "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "where it's always beautiful.",
        photo: [
          "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 1,
        name: "mountain sport",
        photo: [
          "https://images.pexels.com/photos/11303446/pexels-photo-11303446.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1635086/pexels-photo-1635086.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2071654/pexels-photo-2071654.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 1,
        name: "snow sports",
        photo: [
          "https://images.pexels.com/photos/848593/pexels-photo-848593.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/848607/pexels-photo-848607.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2433363/pexels-photo-2433363.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 3,
        name: "trip to Europe",
        photo: [
          "https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/534247/pexels-photo-534247.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "night city ",
        photo: [
          "https://images.pexels.com/photos/887845/pexels-photo-887845.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/139303/pexels-photo-139303.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/707667/pexels-photo-707667.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 3,
        name: "Architecture in Eroupe",
        photo: [
          "https://images.pexels.com/photos/11422451/pexels-photo-11422451.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/11422451/pexels-photo-11422451.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/11422451/pexels-photo-11422451.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/11422451/pexels-photo-11422451.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 3,
        name: "Architecture in Eroupe",
        photo: [
          "https://images.pexels.com/photos/11653323/pexels-photo-11653323.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/6033981/pexels-photo-6033981.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/6033981/pexels-photo-6033981.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2220278/pexels-photo-2220278.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 2,
        name: "sea",
        photo: [
          "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "America",
        photo: [
          "https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2058911/pexels-photo-2058911.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "dream streets",
        photo: [
          "https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "where you want to fly",
        photo: [
          "https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1604141/pexels-photo-1604141.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "view",
        photo: [
          "https://images.pexels.com/photos/7613/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
      {
        category: 4,
        name: "stroll",
        photo: [
          "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/548084/pexels-photo-548084.jpeg?auto=compress&cs=tinysrgb&w=600",
        ],
      },
    ],
  },
];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Collections({ name, images }) {
  const [activeImage, setActiveImage] = useState(null);

  const handleClose = (e) => {
    if (e.target.classList.contains("window")) {
      setActiveImage(null);
    }
  };
  const toggleImage = (imageUrl) => {
    setActiveImage(activeImage === imageUrl ? null : imageUrl);
  };
  return (
    <>
      <div className="gallery">
        <div className="colection_big">
          <img
            src={images[0]}
            alt={name}
            onClick={() => toggleImage(images[0])}
            className={activeImage === images[0] ? "showFull" : ""}
          />
        </div>
        <div className="colection_mini">
          {images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${name} ${index}`}
              onClick={() => toggleImage(img)}
              className={activeImage === img ? "showFull" : ""}
            />
          ))}
        </div>
        <h1 className="name">{name}</h1>
      </div>

      {activeImage && (
        <div className="window" onClick={handleClose}>
          <div className="modal">
            <img src={activeImage} alt="Full size" />
            <button className="modal_btn" onClick={() => setActiveImage(null)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Galere(photo) {
  const [cotegoriId, setCotegoriId] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");

  const [photos, setPhotos] = useState([]);

  const categoryToId = {
    all: 0,
    mountains: 1,
    "the sea": 2,
    architecture: 3,
    "the city": 4,
  };
  const setActiveCategoryHandler = (categoryName) => {
    setActiveCategory(categoryName);
  };
  const categories = Components[0].categories.map((category) => (
    <li
      className={activeCategory === category.name ? "active" : ""}
      key={category.name}
      onClick={() => setActiveCategoryHandler(category.name)}
    >
      {category.name}
    </li>
  ));

  return (
    <div className="galere">
      <h1>My photo collection </h1>
      <div className="top">
        <ul className="tahs">
          {categories}
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            placeholder="find"
          />
        </ul>
      </div>
      <div className="elements">
        {Components[0].collections
          .filter(
            (obj) =>
              (activeCategory === "all" ||
                categoryToId[activeCategory] === obj.category) &&
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, index) => (
            <Collections key={index} name={obj.name} images={obj.photo} />
          ))}
      </div>
    </div>
  );
}

export default Galere;

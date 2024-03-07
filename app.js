const places = [
  {
    id: 1,
    city: "Red Fort",
    cityState: "delhi",
    img: "./images/red-fort-delhi.jpg",
    desc: `The Red Fort, also known as Lal Qila, is a historic fort in Delhi, India. It was built by the Mughal Emperor Shah Jahan in the 17th century.`,
  },
  {
    id: 2,
    city: "Vishakapatnam",
    cityState: "andra",
    img: "./images/vizag-ap.jpg",
    desc: `Visakhapatnam, also known as Vizag, is the largest and most populous metropolitan city in the Indian state of Andhra Pradesh`,
  },
  {
    id: 3,
    city: "Qutub Minar",
    cityState: "delhi",
    img: "./images/qutub-minar-delhi.jpg",
    desc: `Qutab Minar stands as a majestic minaret in the Mehrauli area of South Delhi, India. It is a UNESCO World Heritage Site`,
  },

  {
    id: 4,
    city: "Charminar",
    cityState: "telangana",
    img: "./images/charminar.jpeg",
    desc: `The Charminar, also known as the “Four Minarets”, is a historic monument located in Hyderabad, Telangana, India. Constructed in 1591.`,
  },
  {
    id: 5,
    city: "Kuntala waterfalls",
    cityState: "telangana",
    img: "./images/kuntala-ts.jpeg",
    desc: `Kuntala Waterfall, located in the Adilabad district of Telangana, India, stands as the tallest waterfall in the state, with a majestic height of 150 meters.`,
  },
  {
    id: 6,
    city: "Araku",
    cityState: "andra",
    img: "./images/araku-ap-1.jpg",
    desc: `Araku Valley, nestled amid the Eastern Ghats, is a scenic hill station located approximately 115 kilometers from the city of Visakhapatnam in Andhra Pradesh.`,
  },
  {
    id: 7,
    city: "India Gate",
    cityState: "delhi",
    img: "./images/india-gate-delhi.jpg",
    desc: `The India Gate, formerly known as the All India War Memorial, stands as a majestic war memorial located near the Kartavya path on the eastern edge of New Delhi’s ceremonial axis.`,
  },
  {
    id: 8,
    city: "Ramappa Temple",
    cityState: "telangana",
    img: "./images/ramappa-ts.jpg",
    desc: `The Ramappa Temple, also known as the Rudreswara temple, is a Kakatiya style Hindu temple dedicated to the Hindu god Shiva`,
  },
  {
    id: 9,
    city: "Tirumala",
    cityState: "andra",
    img: "./images/tirupathi-ap.jpeg",
    desc: `Tirumala is a spiritual place in Tirupati district of the Indian state of Andhra Pradesh. It is a hill town where Tirumala Venkateswara Temple is located, a popular shrine of Vishnu.`,
  },
];

const famousPlacesContainer = document.querySelector(".famous-places");
const cityButtons = document.querySelector(".state-btns");
const toTop = document.querySelector(".to-top");
window.addEventListener("DOMContentLoaded", () => {
  displayFamousPlaces(places);
  displayButtons();
});
window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    // console.log("we are in");
    toTop.classList.add("show-top-btn");
  } else {
    toTop.classList.remove("show-top-btn");
  }
});
//FOR MAIN CONTAINER //

function displayFamousPlaces(places) {
  let displayPlaces = places.map((place) => {
    return `<article class="place">
                <figure><img src="${place.img}" src="famous place image" /></figure>
               <div class="content">
                <h2 class="place-title">${place.city}</h2>
                <div class="title-underline"></div>
                <p class="place-description">
                    ${place.desc}
                </p>
                </div>
            </article>`;
  });
  displayPlaces = displayPlaces.join("");
  famousPlacesContainer.innerHTML = displayPlaces;
}

// FOR BUTTONS//

function displayButtons() {
  const cities = places.reduce(
    function (values, place) {
      if (!values.includes(place.cityState)) {
        values.push(place.cityState);
      }
      //   console.log(values, place.cityState);
      return values;
    },
    ["all"]
  );

  let cityBtns = cities.map((city) => {
    return `<button class="btn" data-cityState="${city}">${city}</button>`;
  });
  cityBtns = cityBtns.join("");
  cityButtons.innerHTML = cityBtns;

  const filterBtn = document.querySelectorAll(".btn");
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetCity = e.target.dataset.citystate; // Places that we want to get
      const statePlace = places.filter((place) => {
        if (targetCity == place.cityState) {
          return place;
        }
      });

      if (targetCity === "all") {
        displayFamousPlaces(places);
      } else {
        displayFamousPlaces(statePlace);
      }
    });
  });
}

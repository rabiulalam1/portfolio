// function getWebDevs(pics) {
axios
    .get(`https://ironrest.herokuapp.com/mia-aug2020-webdevs`)
    .then((res) => {
      for (let i of res.data) {
        if (i.first_name === "Rabiul"){}
        else{
        let row = document.createElement("div");
        row.classList.add("card");
        row.innerHTML =
          `<div class="imgBx">
          <img src="https://ui-avatars.com/api/?name=${i.first_name}+${i.last_name}&size=260&background=16213e&color=00b7c2">
        </div>
        <div class="content">
          <h2>` +
          i.first_name +` `+i.last_name+
          `</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <a href="`+i.website+`">`+i.first_name+`'s Portfolio</a>

        </div>
      </div>`;

        document.querySelector(".container").appendChild(row);
      }}
    });
//}

// axios.get("https://picsum.photos/v2/list").then((res) => {
//   let pics = res.data;
//   getWebDevs(pics);
// });

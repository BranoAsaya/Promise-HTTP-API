// function callback(arg){
//     const num = arg();
//     console.log(num);
// };
// callback(()=>{
//     return 10+2;
// });

// axios.get('https://jsonplaceholder.typicode.com/todos')
//   .then(function (response) {

//     console.log(response);
//   })
//   .catch(function (error) {

//     console.log(error);
//   })

// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then((res)=>{console.log(res);})
// .catch((err)=>{console.log(err);})

// const promise = new Promise(

//   (resolve,reject)=> {
//     const random = Math.floor(Math.random()*100);
//     if(random >= 50){
//       resolve("you get the money")
//     }
//     else{
//       reject("sorry you lost")
//     }
//   }
// );

// promise
// .then(answer =>{
//   console.log(answer);
// })
// .catch(negative => { console.log((negative));})

//     axios.get("https://jsonplaceholder.typicode.com/todos")
//   .then((res)=>{console.log(res);})
//   .catch((err)=>{console.log(err);})

//  fetch("https://jsonplaceholder.typicode.com/todos",{method:"GET"})
//    .then((res)=>{console.log(res);})

//    .catch((err)=>{console.log(err);})

// const API_KEY = "d0fc5e688a4ea82806ba711076772d03";
// let city = "London";
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

// const API_KEY = "d0fc5e688a4ea82806ba711076772d03";
// let input = document.getElementById("in");
// let btn = document.getElementById("btn");
// input.addEventListener("keyup", function(event) {

//   if (event.keyCode === 13) {

//     event.preventDefault();

//     document.getElementById("btn").click();
//   }
// });

// btn.addEventListener("click",findCityTemp)

// function findCityTemp(){
//   let city = input.value;
//   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

//   fetch(url, { method: "GET" })
//     .then((res) => {
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {

//       console.log(data);
//       document.getElementById("p").innerText = `
//     city: ${data.name}
//     Temp c: ${data.main.temp}°K
//     Max Temp: ${data.main.temp_max}°K
//     Min Temp: ${data.main.temp_min}°K
//     `;
//     })

//     .catch((err) => {
//       document.getElementById("p").innerText = `
//   "not found"
//     `;
//     });
// }

// let btn = document.getElementById("find")
//  btn.addEventListener("click",tempByCoordinates)

// function tempByCoordinates(){
// const API_KEY = 'd0fc5e688a4ea82806ba711076772d03';
// let lat = document.getElementById("lat").value;
// let lon = document.getElementById("lon").value;
// let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

// fetch(url,{method:"GET"})
// .then((res)=>{
//   console.log(res);
//   return res.json();
// })
// .then((data)=>{
//   console.log(data);
//         document.getElementById("div").innerText = `
//     city: ${data.name}
//     Temp : ${data.main.temp}°K
//     Max Temp: ${data.main.temp_max}°K
//     Min Temp: ${data.main.temp_min}°K
//     `;
// })
// .catch((err) =>{
//   document.getElementById("div").innerText="not found";
// })

// };

// function findUserLocation(){
//   const url = 'https://extreme-ip-lookup.com/json/'

//   fetch(url,{method:"GET"})
//   .then((res)=>{return res.json();})
//   .then((data)=>{console.log(data);
//     document.getElementById("loc").innerText=`
//     City: ${data.city}
//     Country: ${data.country}
//     IP: ${data.query}
//     isp:: ${data.isp}
//     lat:${data.lat}
//     lon:${data.lon}

//     `;

//   })
//   .catch((err)=>{
//   document.getElementById("loc").innerText="not found";})
// }
// findUserLocation()

// function getUserLocation() {
//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position.coords.latitude, position.coords.longitude);
//     const API_KEY = "d0fc5e688a4ea82806ba711076772d03";
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

//     fetch(url, { method: "GET" })
//       .then((res) => {
//         console.log(res);
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         document.getElementById("loc").innerText = `
//     city: ${data.name}
//     Temp : ${data.main.temp}°K
//     Max Temp: ${data.main.temp_max}°K
//     Min Temp: ${data.main.temp_min}°K
//     `;
//       })
//       .catch((err) => {
//         document.getElementById("loc").innerText = "not found";
//       });
//   });
// }
// getUserLocation();

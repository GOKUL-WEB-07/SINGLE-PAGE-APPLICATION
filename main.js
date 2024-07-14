function changeCon(page) {
  let content = document.getElementById("content");

  switch (page) {
    case "Home":
      content.innerHTML = `
            <div class = "images">
            <img src = 'img/netflixlogo.0.0.1466448626-removebg-preview.png'>
            <h2>Home</h2>
            <h1>ENJOY ON YOUR TV</h1>
            </div>
            <div class = "Contant">
            <p></p>
            </div>
            `;
      break;
    case "Movies":
      content.innerHTML = `
            <div class = "Movies">
            <img class = "movie" src = 'img/netflixlogo.0.0.1466448626-removebg-preview.png'>
            <h2>Movies</h2>
            <div class = "box">
            <div class = "row">
            <img src="img/movie (1).jfif">
            <img src="img/movie (2).jfif">
            </div>
            <div class = "row2">
            <img src="img/movie (3).jfif">
            <img src="img/movie (4).jfif">
            </div>
           </div>
            </div>
            `;
      break;
    case "Subscribe":
      content.innerHTML = `
           <div class = "images">
            <img src = 'img/netflixlogo.0.0.1466448626-removebg-preview.png'>
            <h2>Subscription</h2>
            <input type"text" placeholder = "Enter your Email address" id = "check">
            <button onclick = "showSub()" >Show Subscriptios</button>
            </div>
            `;
      break;
    case "Series":
      content.innerHTML = `
           <div class = "Series">
            <img src = 'img/netflixlogo.0.0.1466448626-removebg-preview.png'>
            <h2>Series</h2>
           <div class = "box">
            <div class = "row">
            <img src="img/movie (5).jfif">
            <img src="img/movie (6).jfif">
            </div>
            <div class = "row2">
            <img src="img/movie (8).jfif">
            <img src="img/movie (7).jfif">
            </div>
           </div>
            </div>
            `;
      break;
    case "icon":
      content.innerHTML = `
           <div class = "icon">
            <h2>Netflix</h2>
            </div>
            `;
      break;
  }
}

function showSub() {
  let check = document.getElementById("check").value;
  if (check == "") {
    alert("enter a email address");
  } else {
    content.innerHTML = `
        <div class = "sub">
        <div class = "yearly" onclick = "payMent()">
        <h2>Yearly</h2>
        <p>$1999</p>
        <p>Basic HD, 4K</p>
        </div>
        <div class = "Monthly" onclick = "payMent()">
        <h2>Monthly</h2>
        <p>$299</p>
        <p>Basic HD</p>
        </div>  
        </div> 
        `;
  }
}

function payMent(){
    content.innerHTML = `<h1>Your Payment is Success</h1>`
}


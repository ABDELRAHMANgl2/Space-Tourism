let aheader = document.querySelectorAll(".aheader");
let litabs = document.querySelectorAll(".litabs")

aheader.forEach(function (ele) {
    ele.onclick = function () {
        aheader.forEach(function (ele) {
            ele.classList.remove("active")
        });
        this.classList.add("active");
    };
});

let pointslidespan = document.querySelectorAll(".ulheader li a");
let titlesection = document.querySelectorAll(".headName")
function removeactive() {
    pointslidespan.forEach((element) => {
      element.classList.remove("active");
    });
}

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 0) {
      removeactive();
      pointslidespan[0].classList.add("active");
    }
  
    if (window.scrollY >= titlesection[0].offsetTop) {
      removeactive();
      pointslidespan[1].classList.add("active");
    }
  
    if (window.scrollY >= titlesection[1].offsetTop) {
      removeactive();
      pointslidespan[2].classList.add("active");
    }
  
    if (window.scrollY >= titlesection[2].offsetTop) {
      removeactive();
      pointslidespan[3].classList.add("active");
    }
  });
  

litabs.forEach(function (ele) {
    ele.onclick = function () {
        litabs.forEach(function (ele) {
        ele.classList.remove("active")
        });
        this.classList.add("active");
    };
});    

let openhed = document.querySelector(".openhed");
let closehed = document.querySelector(".closehed");
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".ulheader");

openhed.addEventListener("click", () => {
    closehed.classList.add("active")
    openhed.classList.add("active")
    navMenu.classList.add("active");
})    

closehed.addEventListener("click", () => {
    closehed.classList.remove("active")
    openhed.classList.remove("active")
    navMenu.classList.remove("active");
})    

document.querySelectorAll(".ulheader").forEach((n) =>
    n.addEventListener("click", () => {
        openhed.classList.remove("active");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

let header = document.querySelector(".header")
let upto = document.querySelector(".upto");
window.onscroll = () => {
    if(scrollY >= 100) {
        header.classList.add("active")
        upto.classList.add("active")
        
    } else{
        header.classList.remove("active")
        upto.classList.remove("active")
    }
}


upto.addEventListener("click", function () {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

let nameplant = document.querySelector(".nameplant")
let litravelspeed1 = document.querySelector(".litravelspeed1")
let litravelspeed2 = document.querySelector(".litravelspeed2")
let infoplant = document.querySelector(".infoplant")
let imgplant =  document.querySelector(".imgplant")
let litabs1 = document.querySelector(".litabs1")
let litabs2 = document.querySelector(".litabs2")
let litabs3 = document.querySelector(".litabs3")
let litabs4 = document.querySelector(".litabs4")
litabs1.addEventListener("click", () => {
    function getRepos() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nameplant.innerHTML = `${data.destinations[0].name}`
            infoplant.innerHTML = `${data.destinations[0].description}`
            imgplant.setAttribute('src',`${data.destinations[0].images.png}`);
            litravelspeed1.innerHTML = `${data.destinations[0].distance}`
            litravelspeed2.innerHTML = `${data.destinations[0].travel}`
        })
    }
    getRepos()
}) 

litabs2.addEventListener("click", () => {
    function getRepos2() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nameplant.innerHTML = `${data.destinations[1].name}`
            infoplant.innerHTML = `${data.destinations[1].description}`
            imgplant.setAttribute('src',`${data.destinations[1].images.png}`);
            litravelspeed1.innerHTML = `${data.destinations[1].distance}`
            litravelspeed2.innerHTML = `${data.destinations[1].travel}`
        })
    }
    getRepos2()
}) 

litabs3.addEventListener("click", () => {
    function getRepos3() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nameplant.innerHTML = `${data.destinations[2].name}`
            infoplant.innerHTML = `${data.destinations[2].description}`
            imgplant.setAttribute('src',`${data.destinations[2].images.png}`);
            litravelspeed1.innerHTML = `${data.destinations[2].distance}`
            litravelspeed2.innerHTML = `${data.destinations[2].travel}`
        })
    }
    getRepos3()
}) 

litabs4.addEventListener("click", () => {
    function getRepos4() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nameplant.innerHTML = `${data.destinations[3].name}`
            infoplant.innerHTML = `${data.destinations[3].description}`
            imgplant.setAttribute('src',`${data.destinations[3].images.png}`);
            litravelspeed1.innerHTML = `${data.destinations[3].distance}`
            litravelspeed2.innerHTML = `${data.destinations[3].travel}`
        })
    }
    getRepos4()
}) 

let imgcray = document.querySelector(".imgcray")
let pcary = document.querySelector(".pcary")
let ppcray = document.querySelector(".ppcray")
let namecray =  document.querySelector(".namecray")
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let span4 = document.querySelector(".span4")
let spancray = document.querySelectorAll(".spancray")

spancray.forEach(function (ele) {
    ele.onclick = function () {
        spancray.forEach(function (ele) {
        ele.classList.remove("active")
        });
        this.classList.add("active");
    };
});  


let changpoint = document.querySelectorAll(".changpoint span");

// changpoint.forEach(() => {
//     setInterval(() => {
//         for (let i = 0; i < changpoint.length; i++) {
//             console.log(changpoint[i].click())
//         }
//     }, 70000)
// })


span1.addEventListener("click", () => {
    function getRepos() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            namecray.innerHTML = `${data.crew[0].name}`
            ppcray.innerHTML = `${data.crew[0].role}`
            pcary.innerHTML = `${data.crew[0].bio}`
            imgcray.setAttribute('src',`${data.crew[0].images.png}`);
        })
    }
    getRepos()
}) 

span2.addEventListener("click", () => {
    function getRepos2() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            namecray.innerHTML = `${data.crew[1].name}`
            ppcray.innerHTML = `${data.crew[1].role}`
            pcary.innerHTML = `${data.crew[1].bio}`
            imgcray.setAttribute('src',`${data.crew[1].images.png}`);
        })
    }
    getRepos2()
}) 

span3.addEventListener("click", () => {
    function getRepos3() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            namecray.innerHTML = `${data.crew[2].name}`
            ppcray.innerHTML = `${data.crew[2].role}`
            pcary.innerHTML = `${data.crew[2].bio}`
            imgcray.setAttribute('src',`${data.crew[2].images.png}`);
        })
    }
    getRepos3()
}) 

span4.addEventListener("click", () => {
    function getRepos4() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            namecray.innerHTML = `${data.crew[3].name}`
            ppcray.innerHTML = `${data.crew[3].role}`
            pcary.innerHTML = `${data.crew[3].bio}`
            imgcray.setAttribute('src',`${data.crew[3].images.png}`);
        })
    }
    getRepos4()
}) 

let imgtech = document.querySelector(".imgtech")
let ptech = document.querySelector(".ptech")
let nametech =  document.querySelector(".nametech")
let spanslid1 = document.querySelector(".spanslid1")
let spanslid2 = document.querySelector(".spanslid2")
let spanslid3 = document.querySelector(".spanslid3")
let spanslid = document.querySelectorAll(".spanslid")
spanslid.forEach(function (ele) {
    ele.onclick = function () {
        spanslid.forEach(function (ele) {
        ele.classList.remove("active")
        });
        this.classList.add("active");
    };
});  

spanslid1.addEventListener("click", () => {
    function getRepos() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nametech.innerHTML = `${data.technology[0].name}`
            ptech.innerHTML = `${data.technology[0].description}`
            imgtech.setAttribute('src',`${data.technology[0].images.portrait}`);
        })
    }
    getRepos()
}) 

spanslid2.addEventListener("click", () => {
    function getRepos2() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nametech.innerHTML = `${data.technology[1].name}`
            ptech.innerHTML = `${data.technology[1].description}`
            imgtech.setAttribute('src',`${data.technology[1].images.portrait}`);
        })
    }
    getRepos2()
}) 

spanslid3.addEventListener("click", () => {
    function getRepos3() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nametech.innerHTML = `${data.technology[2].name}`
            ptech.innerHTML = `${data.technology[2].description}`
            imgtech.setAttribute('src',`${data.technology[2].images.portrait}`);
        })
    }
    getRepos3()
}) 
let spanslid10 = document.querySelector(".spanslid10")
let spanslid20 = document.querySelector(".spanslid20")
let spanslid30 = document.querySelector(".spanslid30")
spanslid10.addEventListener("click", () => {
    function getRepos() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nametech.innerHTML = `${data.technology[0].name}`
            ptech.innerHTML = `${data.technology[0].description}`
            imgtech.setAttribute('src',`${data.technology[0].images.portrait}`);
        })
    }
    getRepos()
}) 

spanslid20.addEventListener("click", () => {
    function getRepos2() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nametech.innerHTML = `${data.technology[1].name}`
            ptech.innerHTML = `${data.technology[1].description}`
            imgtech.setAttribute('src',`${data.technology[1].images.portrait}`);
        })
    }
    getRepos2()
}) 

spanslid30.addEventListener("click", () => {
    function getRepos3() {
        fetch(`../addves/data.json`)
        .then((repos) => repos.json())
        .then((data) => {
            nametech.innerHTML = `${data.technology[2].name}`
            ptech.innerHTML = `${data.technology[2].description}`
            imgtech.setAttribute('src',`${data.technology[2].images.portrait}`);
        })
    }
    getRepos3()
}) 



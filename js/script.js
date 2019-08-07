const url_github = "https://api.github.com/users";
let result_img = document.querySelector('.result_img');



function getUser() {
    fetch(url_github)
        .then(res => res.json())
        .then(user => {
            // console.log(user)
            let result = "";
            user.map(eachuser =>
                // console.log(eachuser.avatar_url)
                result = `<img src="${eachuser.avatar_url} class="img-fluid img-thumbnail w-100 d-block">`
            )
            return result_img.innerHTML = result;
        })
}

// function random(image) {
//     return Math.floor(Math.random() * image.length)

// }


window.addEventListener('load', getUser)
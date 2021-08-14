class Blog{
    constructor(title, description) {
        this.title = title
        this.description = description
    }

    addTitle() {

        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        title_card.innerHTML += this.title;
        document.getElementById('card-text').appendChild(title_card);
        console.log(title_card);
    }

    addDescription() {

        let descriptionCard = document.createElement("p");
        descriptionCard.setAttribute("id", "blog-description");
        let text = document.createTextNode(`${this.description}`)
        descriptionCard.appendChild(text);
        document.querySelector("#card-text").appendChild(descriptionCard)
        console.log(descriptionCard);
    }
}


var $addBlog = document.querySelector("#addBlog")
var $close = document.querySelector("#close")
var $popup = document.querySelector("#popupContact")

$addBlog.addEventListener("click", () => {
    $popup.style.display = "block"
})

$close.addEventListener("click", () => {
    $popup.style.display = "none"
})



document.querySelector("#post").addEventListener("click", addPost);

function addPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("detail").value;

    if (title && description) {
        let blog = new Blog(title, description)

        blog.addTitle()
        blog.addDescription()

        $popup.style.display = "none"
    } else {
        document.querySelector("#message").style.display = "inline-block"
    }
}

document.querySelector("#post").addEventListener("click",function(){
    document.querySelector("#popupContact").style.display="none";
    var $img=document.createElement("img");
    $img.setAttribute("src","./assets/javascript.png");
    document.querySelector("#card-text").appendChild($img);
})

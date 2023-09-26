let about = document.querySelector(".aboutMe");
let iCanDo = document.querySelector(".iCanDo");
let profilePic = document.querySelector(".profilePic");
let cardMain = document.querySelector(".card-main");

about.onclick = function () {
    cardMain.innerHTML = `<p>18-year-old student at IT Hub College who studies front-end development. For myself, I do design, animation, editing and photography.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus distinctio iure unde laudantium corporis nobis repellendus, harum perspiciatis? Sed veritatis, vero expedita porro impedit suscipit nobis saepe magnam ea aperiam?</p>`;
};
iCanDo.onclick = function () {
    cardMain.innerHTML = `
    <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color: rgb(44,44,44); color: whitesmoke; border: none">
        <h3>What I can</h3>
        <ul>
            <li>Layout the website</li>
            <li>Work in Figma</li>
            <li>Work with React</li>
            <li>Write JavaScript Code</li>
            <li>Read and understand someone else's code</li>
            <li>Work with Bootstrap</li>
            <li>Work with SCSS/SASS</li>
            <li>Work in Adobe Photoshop and Adobe Illustrator</li>
        </ul>
    </li>
    <li class="list-group-item" style="background-color: rgb(44,44,44); color: whitesmoke;">
        <h3>What I know</h3>
        <ul>
            <li>HTML/CSS/JS</li>
            <li>Figma</li>
            <li>Bootstrap</li>
            <li>SCSS/SASS</li>
            <li>Adobe Photoshop and Adobe Illustrator</li>
        </ul>
    </li>
</ul>
`
};
profilePic.onclick = function () {
    cardMain.innerHTML = `<img src="./img/uncaption-1.png" class="card-img-top" alt="my photo">`
};


console.log(cardMain)
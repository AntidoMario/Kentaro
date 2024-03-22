
const info = (title, para, contactBtn) => {
    let div = document.createElement("div")
    div.className = "ClassZ"
    div.innerHTML = `
    <nav class="Navc1">
        <ul class="ul1">
            <li><a href="https://antidomario.github.io/myport/">Back</a></li>
        </ul>
    </nav>
    <h1>${title}: <small><i>Kentaro Miura</i></small></h1>
                    <hr>
                     <p class="para">${para}</p>
                     <a href="https://en.wikipedia.org/wiki/Kentaro_Miura"><button class="button">${contactBtn}</button></a>
                     ` 
    return div
}

export {info}

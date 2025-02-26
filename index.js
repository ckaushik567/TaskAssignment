const boxes = document.querySelectorAll(".main-section");
const radioButtons = document.querySelectorAll("input[type='radio']");
const boxContainers = [
    document.getElementById("boxContainer"),
    document.getElementById("boxContainer1"),
    document.getElementById("boxContainer2")
];

function expandBoxFunc(index) {
    boxes.forEach((box, i) => {
        box.style.border = "";
        box.style.background = "";
        radioButtons[i].checked = false;
        boxContainers[i].innerHTML = "";
    });

    boxes[index].style.border = "2px solid rgba(255, 107, 130, 1)";
    boxes[index].style.background = "rgba(255, 249, 250, 1)";
    radioButtons[index].checked = true;

    boxContainers[index].innerHTML = `
        <div class="size-color-section">
            <div class="size">
                <div class="first-section">
                    <p id="common-style">Size</p>
                    <div class="left">
                        <p>#1</p>
                        <select>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                    </div>
                    <div class="left">
                        <p>#2</p>
                        <select>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="color">
                <div class="first-section">
                    <p>Color</p>
                    <div class="left">
                        <select>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                        </select>
                    </div>
                    <div class="left">
                        <select>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>`;
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => expandBoxFunc(index));
});

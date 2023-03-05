const api_key = "3a8618534466f9b2ab413f67d2a6b316";
const units = "metric";
const lang = "vi";

function search() {
    let search = document.getElementById("search").value;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=${units}&lang=${lang}&appid=${api_key}`
    ).then(function (resp) {
        return resp.json();
    }).then(data => {
        document.getElementById("name").innerText = data.name || "--";
        document.getElementById("temp").innerText = data.temp || "Độ C";
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("icon").scr = "`http://openweathermap.org/img/wn${data.weather[0].icon}@2x.png`"
        document.getElementById("temp_min_max").innerText = `L:${data.main.temp_min} - H:${data.main.temp_max}`;
    })
}


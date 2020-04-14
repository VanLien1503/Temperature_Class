function Temperature(c) {
    this.c = c;
    this.setC = function () {
        this.c = c;
    };
    this.getF = function () {
        return (9 / 5) * c;
    };
    this.getKenvin = function () {
        return c + 273.15;
    }
}

function Change() {
    let temperatureC = parseInt(prompt("Nhập Độ C"));
    let change = new Temperature(temperatureC);
    let temperatureF = change.getF();
    let temperatureKenvin = change.getKenvin();
    document.getElementById('result').innerHTML = "Nhiệt Độ C = " + temperatureC + '<br>'
        + "Nhiệt Độ F = " + temperatureF + '<br>'
        + "Nhiệt Độ kenven = " + temperatureKenvin;
}
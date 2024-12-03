let count = 0;

document.getElementById("decrease").addEventListener("click", function() {
    count--;
    document.getElementById("count").innerText = count;
});

document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    document.getElementById("count").innerText = count;
});

document.getElementById("increase").addEventListener("click", function() {
    count++;
    document.getElementById("count").innerText = count;
});

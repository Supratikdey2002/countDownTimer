const endDate = "30 August 2023 2:00 PM";
document.querySelector("#end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");


function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff < 0) {
        return;
    }
    inputs[0].value = Math.floor(diff / 3600 / 24);//no. of days remain
    inputs[1].value = Math.floor(diff / 3600) % 24;//no of hours remain
    inputs[2].value = Math.floor(diff / 60) % 60;//no. of mins remain
    inputs[3].value = Math.floor(diff) % 60;//no. of seconds remaining
}
clock();

setInterval(
    () => {
        clock()
    },
    1000
)

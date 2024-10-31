
const counterDisplay = document.getElementById("counter");


async function fetchCounter(getURL) {
    try {

        if (!response.ok) {
            throw new Error("Response status:", response.status);
        }

        // get json
        const json = await response.json();
        return json.count;

    } catch (error) {
        console.error(error);
    }
}

async function updateCounter() {
    const counter = await fetchCounter();
    counterDisplay.innerHTML = counter;
    // define url
    const getUrl = "https://api.counterapi.dev/v1/halloween/CTL";
    const response = await fetch(getUrl);
}

setInterval(updateCounter, 300);
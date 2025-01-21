const url = "https://jxc-updates.onrender.com";
// const url = "http://localhost:3000";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getSkiReport() {
  const reportEl = document.querySelector(".main__text");
  const body = document.querySelector("body");
  const loadingWrapper = document.querySelector(".main__loading-wrapper");
  const loadingBar = document.querySelector(".main__loading-bar");
  try {
    const response = await fetch(`${url}/ski-report`);
    const { data } = await response.json();
    const paragraphs = data.split("\n\n");
    loadingBar.classList.add("no-animation");
    await sleep(300);
    body.style.padding = "1rem";
    reportEl.innerHTML = "";
    paragraphs.forEach((p) => {
      const el = document.createElement("p");
      el.textContent = p;
      reportEl.appendChild(el);
      loadingWrapper.remove();
    });
  } catch (error) {
    loadingWrapper.remove();
    reportEl.innerHTML = "";
    const el = document.createElement("p");
    el.textContent =
      "Oh no! Looks like we had some trouble fetching the report. Please try again later!";
    reportEl.appendChild(el);
    console.error(error);
  }
}

getSkiReport();

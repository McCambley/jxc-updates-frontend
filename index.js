const url = "https://jxc-updates.onrender.com";
async function getSkiReport() {
  const reportEl = document.querySelector(".main__text");
  try {
    const response = await fetch(`${url}/ski-report`);
    const { data } = await response.json();
    const paragraphs = data.split("\n\n");
    reportEl.innerHTML = "";
    paragraphs.forEach((p) => {
      const el = document.createElement("p");
      el.textContent = p;
      reportEl.appendChild(el);
    });
  } catch (error) {
    reportEl.textContent =
      "Oh no! Looks like we had some trouble fetching the report. Please try again later!";
    console.error(error);
  }
}

getSkiReport();

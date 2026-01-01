function showData() {
  document.getElementById("consent-box").style.display = "none";
  document.getElementById("data-box").classList.remove("hidden");

  const info = document.getElementById("info");

  const data = {
    "Browser": navigator.userAgent,
    "Operating System": navigator.platform,
    "Device Type": /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
    "Screen Resolution": `${screen.width} x ${screen.height}`,
    "Language": navigator.language
  };

  for (let key in data) {
    let li = document.createElement("li");
    li.textContent = `${key}: ${data[key]}`;
    info.appendChild(li);
  }
}

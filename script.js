function getById(id) {
  return document.getElementById(id)
}

const serviceContainer = getById("service-container");
const heartNumber = getById("heartNumber");
const pointNumber = getById("pointNumber");
const copyNumber = getById("copyNumber");

serviceContainer.addEventListener("click", (e) => {
  //favourite number
  if (e.target.className.includes("fa-heart")) {
    if (e.target.className.includes("fa-regular")) {
      e.target.classList.remove("fa-regular")
      e.target.classList.add("fa-solid")
      e.target.classList.add("text-red-500")
      getById("heartNumber").textContent = Number(heartNumber.textContent) + 1;
    } else {
      e.target.classList.add("fa-regular")
      e.target.classList.remove("fa-solid")
      e.target.classList.remove("text-red-500")
      getById("heartNumber").textContent = Number(heartNumber.textContent) - 1;
    }
  }
  //call 
  if (e.target.className.includes("callBtn")) {
      const serviceName = e.target.parentNode.parentNode.children[1].textContent;
      const serviceNumber = e.target.parentNode.parentNode.children[3].textContent;
      let currentPointNumber = Number(pointNumber.textContent);
      const time = new Date();
      const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12:true
      })
      if (currentPointNumber >= 20) {
        getById("pointNumber").textContent = currentPointNumber - 20;
        alert(`📞 Calling ${serviceName} ${serviceNumber}...`)
         const item = document.createElement("div")
         item.innerHTML = ` <div class="flex justify-between p-3 bg-gray-100 rounded-md shadow ">
         <div class="flex flex-col gap-4">
         <h2 class="font-bold">${serviceName}</h2>
         <p class="font-bold ">${serviceNumber}</p>
         </div>
         <p class="flex justify-center items-center content-center">${formattedTime}</p>
         </div>`
         getById("item-container").appendChild(item)
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে। ")
    }  
  }
})

const historyContainer = getById("historyContainer");

historyContainer.addEventListener("click", (e) => {
  // clear button 
  if (e.target.className.includes("clearBtn")) {
    heartNumber.textContent = 0;
    pointNumber.textContent = 100;
    copyNumber.textContent = 0;
    getById("item-container").innerHTML = ''
  }
});

document.addEventListener("click", async (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const targetSelector = btn.dataset.target || ".copy-me";
  let ancestor = btn.parentElement;
  let sourceEl = null;
  while (ancestor) {
    if (ancestor.querySelector) {
      sourceEl = ancestor.querySelector(targetSelector);
      if (sourceEl) break;
    }
    ancestor = ancestor.parentElement
  }
  if (!sourceEl) return alert("Nothing to copy");
  const textToCopy = sourceEl.textContent.trim();
  if (!textToCopy) return alert("Nothing to copy");

  const serviceNumber = e.target.parentNode.parentNode.children[3].textContent;
  try {
    await navigator.clipboard.writeText(textToCopy);
    const currentCopyNumber = Number(copyNumber.innerText);
    copyNumber.innerText = currentCopyNumber + 1;
    alert("নম্বর কপি হয়েছে " + serviceNumber);
  } catch (error) {
    console.error("copy failed", error)
    alert("Copy failed")
  }
});








var targetNode = document.body;
let yuan_usd = 0.14;

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    var strongElements = mutation.target.getElementsByTagName("strong");
    for (var i = 0; i < strongElements.length; i++) {
      var element = strongElements[i];
      if (element.classList.contains("f_Strong")) {
        if(element.innerHTML.includes("¥")) {
            const yuanPrice = element.innerHTML
          ?.trim()
          ?.split(" ")[1]
          ?.replace(/[^\d.]/g, "");

        const usdPrice = (yuanPrice * yuan_usd).toFixed(2);

        element.innerHTML = `${usdPrice}$`;
        }
      }
    }
  });
});

var config = { attributes: true, childList: true, subtree: true };

observer.observe(targetNode, config);

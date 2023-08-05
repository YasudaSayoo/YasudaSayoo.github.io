window.onload = () => {
  const resizeIframe = () => {
    const parentContainers = document.querySelectorAll(".video-container");
    parentContainers.forEach(c => {
      // console.log(parentContainer.offsetWidth);
      const parentWidth = c.offsetWidth;
      const iframe = c.querySelector("iframe");
      // console.log(iframe);
      iframe.style.width = parentWidth + "px";
      iframe.style.height = parentWidth / 2 + "px";
    })
   
  };

  window.addEventListener("resize", resizeIframe);

  resizeIframe();
};

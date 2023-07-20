window.onload = () => {
  const resizeIframe = () => {
    const parentContainer = document.querySelector(".video-container");
    // console.log(parentContainer.offsetWidth);
    const parentWidth = parentContainer.offsetWidth;
    const iframe = parentContainer.querySelector("iframe");
    // console.log(iframe);
    iframe.style.width = parentWidth + "px";
    iframe.style.height = parentWidth / 2 + "px";
  };

  window.addEventListener("resize", resizeIframe);

  resizeIframe();
};

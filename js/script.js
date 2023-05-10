let intIndex = 0;

function showImage(i) {
  intIndex += i;

  const images = document.getElementsByClassName("image");
  const dots = document.getElementsByClassName("dot");

  for (let n = 0; n < images.length; n++) {
    images[n].style.display = "none";
    dots[n].className = dots[n].className.replace(" active", "");
  }

  if (intIndex >= images.length) {
    intIndex = 0;
  } else if (intIndex < 0) {
    intIndex = images.length - 1;
  }

  images[intIndex].style.display = "block";
  dots[intIndex].className += " active";
}

function setCurrentYear() {
  const year = new Date().getFullYear();
  const footer = document.querySelector("footer");
  footer.textContent = `Copyright © ${year}`;
}

window.onload = function() {
  setCurrentYear();

  showImage(intIndex);

  setInterval(() => showImage(intIndex + 1), 3000);
};

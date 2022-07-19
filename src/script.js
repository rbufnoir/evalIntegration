let index = 0;

function showNElem(shift) {
  const slider = document.getElementsByClassName("slider1");
  const carouselLength = slider.length;
  const shiftAbs = Math.abs(shift);

  for (i = 0; i < carouselLength; i++) {
    slider[i].style.order = "";
    slider[i].style.display = "none";
  }
  if (shift < 0)
    index += shift*2;
  for (i = 0; i < shiftAbs; i++) {
    if (index >= carouselLength)
      index = 0;
    else if (index < 0)
      index = carouselLength - Math.abs(index);
    slider[index].style.order = i;
    slider[index].style.display = "block";
    index++;
  }
}

showNElem(1)
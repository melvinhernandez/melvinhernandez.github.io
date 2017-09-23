
var aboutMe = document.getElementById('about-link');
var aboutInfo = document.getElementById('about-info');

aboutMe.addEventListener('mouseover', toggleAbout);
aboutMe.addEventListener('mouseout', toggleAbout);

function toggleAbout(event) {
  if (aboutInfo.classList.contains('about-toggled')){
    aboutInfo.classList.remove('about-toggled');
    console.log("removed");
  } else {
    aboutInfo.classList.add('about-toggled');
  }
}

console.log("hello world");

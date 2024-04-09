const europeWord = document.getElementById("europeWord");
const londonDiv = document.getElementById("londonDiv");

europeWord.addEventListener("mouseover", function() {
  londonDiv.style.display = "block";
});

europeWord.addEventListener("mouseout", function() {
  londonDiv.style.display = "none";
});

// Africa
const africaWord = document.getElementById("africaWord");
const lagosDiv = document.getElementById("lagosDiv");

africaWord.addEventListener("mouseover", function() {
  lagosDiv.style.display = "block";
});

africaWord.addEventListener("mouseout", function() {
  lagosDiv.style.display = "none";
});
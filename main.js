function filter(type) {
  console.log(type);

  // Get all elements with the specified class name
  let nodes = document.getElementsByClassName(type);
  let btn = document.getElementById(type);
  console.log(nodes);

  // If no elements with the specified class name, exit
  if (nodes.length === 0) {
    return;
  }

  // Check if the first element is currently hidden
  let isHidden = nodes[0].style.display === "none" || nodes[0].style.display === "";  

  // Loop through all nodes and toggle their display
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.display = isHidden ? "flex" : "none";  // Toggle display between 'flex' and 'none'
  }

  // Toggle the background color of the button
  btn.style.background = isHidden ? "skyblue" : "transparent";
}

function copy(name) {
  navigator.clipboard.writeText(name);
  alert("Copied the text: " + name);
}
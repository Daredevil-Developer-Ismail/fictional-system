function filter(type) {

  let nodes = document.getElementsByClassName(type);
  let btn = document.getElementById(type);

  if (nodes.length === 0) {
    return;
  }

  let isHidden = nodes[0].style.display === "none" || nodes[0].style.display === "";  

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.display = isHidden ? "flex" : "none";
  }

  btn.style.background = isHidden ? "skyblue" : "transparent";
}

function copy(name) {
  navigator.clipboard.writeText(name);
}

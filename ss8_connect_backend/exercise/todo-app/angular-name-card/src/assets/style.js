let check = true;
function displayEdit(id) {
  let obj = document.getElementById('input-' + id);
  if (check) {
    obj.style.display = "block";
    check = false;
  } else {
    obj.style.display = "none";
    check = true;
  }
}

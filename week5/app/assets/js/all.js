$(function() {
  // console.log('Hello Bootstrap5');
  const item = document.querySelectorAll(".nav-item");
  let new_ary = [...item];
  let location_url = window.location.href;
  let url = location_url.split("?type=")[1];

  console.log(url);
  // console.log(item);
  // console.log(new_ary);

  if(url == undefined){
    new_ary[2].classList.add("nav-active");
  }
  
  new_ary.forEach(item=>{
    // console.log(item.getAttribute("data-type"));
    if (item.getAttribute("data-type") == url){
      item.classList.add("nav-active");
    }
  })
});
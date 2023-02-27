/**
 * This method checks if the email is valid or not
 * @param {string} email email address to be validated
 * @return {boolean}
 */
function validateEmail(email) {
  
  if (!email) {
    return false;
  }
  if (email.includes("@")) {
    return true;
  }
}

document.querySelectorAll("nav .nav-item").forEach(function (item) {
  
  item.addEventListener("click", function (e) {
    
    e.preventDefault();
    const id = e.target.getAttribute("href");
    
    if (id.includes("html")) {
      
      window.open(id, "_blank");
      return;
    }
    
    const element = document.querySelector(id);
    
    scrollToView(element);
  });
});

function scrollToView(element) {
  
  const navBarHeight = document.querySelector("nav").scrollHeight + 10;
  
  const bodyTop = document.body.getBoundingClientRect().top;
  
  const elementTop = element.getBoundingClientRect().top;
  
  const elementPosition = elementTop - bodyTop;
  
  const scrollToPosition = elementPosition - navBarHeight;

  
  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  });
}


window.onscroll = function () {
  const nav = document.querySelector("nav");
  const navheight = nav.scrollHeight + 10;
  
  const bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (bodyTop >= navheight) {
    nav.classList.add("nav-color");
  } else {
    
    nav.classList.remove("nav-color");
  }
};

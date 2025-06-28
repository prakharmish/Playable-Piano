// console.log("script running");

//throttling- kisi particular code ke number of executions ko kam kar dena

// const btn = document.querySelector("throttle");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    //your less repeatation code
var div =document.createElement("div") //screen par nhi hai sirf bana hai
    div.classList.add('imagediv'); //abhi bhi nhi dikhega
    div.style.left = dets.clientX+'px';
    div.style.top = dets.clientY+'px';

    var img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1750611441962-9cc5e1cc4542?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D")

    //image ko div ke ander dalo
    div.appendChild(img);

    document.body.appendChild(div);
    gsap.fromTo(
      img,
      { y: "100%" },
      { y: "0%", ease: "power1.out", duration: 0.4 }
    );

    gsap.to(img, {
      y: "-100%",
      ease: "power2.in",
      delay: 0.6,
      duration: 0.6,
    });

   
    setTimeout(function(){
      div.remove();
    },2000)
  }, 400)
);


//har bar ke div banao
// div ko absolute banao ek width and height do overflow hidden karo and div ke ander image bnao and us image ko neeche push kardo image ko animated way mein upar laao


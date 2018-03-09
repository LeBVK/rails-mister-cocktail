import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Have a drink with me"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };

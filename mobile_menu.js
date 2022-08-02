export default function createMobileMenu(page, url) {
  const mobileMenu = `<div class="mobile-menu-wrapper">
<div class="mobile-menu-option-wrapper exeption">
   <img src="./img/x.svg" id="close-mobile-menu" alt="">
</div>
<div class="mobile-menu-option-wrapper">
    <a href="#" class="mobile-menu-option-text">CC Capmaign</a>
</div>
<div class="mobile-menu-option-wrapper">
    <a href="#" class="mobile-menu-option-text">News</a>
</div>
<div class="mobile-menu-option-wrapper">
    <a href="#" class="mobile-menu-option-text">Sponser</a>
</div>
<div class="mobile-menu-option-wrapper">
    <a href="#" class="mobile-menu-option-text">Join</a>
</div>
<div class="mobile-menu-option-wrapper">
    <a href="#" class="mobile-menu-option-text">Program</a>
</div>
<div class="mobile-menu-option-wrapper">
    <a href="${url}" class="mobile-menu-option-text">${page}</a>
</div>
</div>`;
  document.getElementById('show-mobile-menu').onclick = () => {
    document.getElementById('mobile-menue').innerHTML = mobileMenu;
    document.body.style.overflow = 'hidden';
    document.getElementById('close-mobile-menu').onclick = () => {
      document.getElementById('mobile-menue').innerHTML = '';
      document.body.style.overflow = 'unset';
    };
  };
}
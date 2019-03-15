// Info Slide Event Constructor

class InfoTab {
    constructor(tab){
      this.tab = tab;
      this.tabData = this.tab.dataset.slide;
      this.slideElement = document.querySelector(`.slide[data-slide='${this.tabData}']`);
      this.newSlide = new Slide(this.slideElement);

      this.tab.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
      const tabs = document.querySelectorAll('.tab');
      
      Array.from(tabs).forEach(function(tab) {
        tab.classList.remove('tab-selected');
      })
  
      this.tab.classList.add('tab-selected');
      
      this.newSlide.shuffleSlide();
    }
}
  
class Slide {
    constructor(slide){
      this.slide = slide;
    }

    shuffleSlide(){
      const slideImgs = document.querySelectorAll('.slide');

      Array.from(slideImgs).forEach(function(img) {
        img.classList.remove('active-slide');
      });

      this.slide.classList.add('active-slide');
    }
  
}
  
let tabs = document.querySelectorAll('.tab');

tabs.forEach(function(tab) {
    return new InfoTab(tab);
});

// Tab Events On Window Resize

window.addEventListener('resize', function() {
  let count = 0;
  let tabStrings = ['Search Results', 'Business Page', 'Bookmarks'];

  if (window.matchMedia('(max-width: 500px)').matches) {
    tabs.forEach(tab => {
      count++;
      tab.textContent = `${count}`;
      tab.style.textAlign = 'center';
    });
  } else {
      tabs.forEach((tab, i) => {
        tab.textContent = tabStrings[i];
      });
    }
});
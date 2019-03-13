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
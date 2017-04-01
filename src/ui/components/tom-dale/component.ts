import Component, { tracked } from "@glimmer/component";

export default class TomDale extends Component {
  didInsertElement() {
    const randomPercentage = () => {
      return Math.floor(Math.random() * 105) - 5;
    };
    const generateTranslate = () => {
      let percentage = randomPercentage();
      return 'translate3d(' + randomPercentage() + '%, ' + randomPercentage() + '%, ' + randomPercentage() + 'px)';
    };
    const edgeTranslate = () => {
      let percentage = randomPercentage();
      return 'translate3d(' + randomPercentage() + '%, ' + '100%, ' + randomPercentage() + 'px)';
    };
    var keyframes = [
      {transform: edgeTranslate(), opacity: '0', offset: 0}, 
      {transform: generateTranslate(), opacity: '1', offset: 0.6},
      {transform: generateTranslate(), offset: 0.75},
      {transform: generateTranslate(), offset: 0.9},
      {transform: edgeTranslate(), opacity: '1', offset: 1}];
    var timing = {duration: 3600, iterations: Infinity, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'};
    return this.element.animate(keyframes, timing);
  }
}
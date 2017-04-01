import Component, { tracked } from "@glimmer/component";

export default class GlimmerButton extends Component {
  @tracked toms = [];

  @tracked('toms')
  get tomsters() {
    return this.toms;
  }

  @tracked('toms')
  get tomstersCount() {
    return this.toms.length;
  }

  createTom() {
    this.toms.push(1);
    this.toms = this.toms;
  }
}

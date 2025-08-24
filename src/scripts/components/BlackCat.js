import { GameObject } from './GameObject';

export class BlackCat extends Object {
  static instance;
  constructor(name, role) {
    super(name);
    BlackCat.instance = this;
    this.role = role;
  }

  static getInstance() {
    if (!BlackCat.instance) {
      BlackCat.instance = new BlackCat('Kate', 'chef');
    }

    return BlackCat.instance;
  }

  sayHey() {
    // console.log('her');
  }
}

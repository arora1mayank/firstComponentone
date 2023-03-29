import { LightningElement } from 'lwc';

export default class ChildComponent1 extends LightningElement {
    // inputValue;
    // handleClick(event){
    //     this.inputValue = this.template.querySelector('lightning-input').label;
    //     console.log(this.inputValue);
    // }
    isVisible=false;
    show(){
        this.isVisible=true;
    }
}
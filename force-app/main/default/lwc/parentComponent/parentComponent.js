import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    resetParent(){
        console.log('chal gya parent tk');
        this.template.querySelector('c-child-component').reset();
    }
}
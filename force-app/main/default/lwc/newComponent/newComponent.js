import { LightningElement, track } from 'lwc';

export default class NewComponent extends LightningElement {
    // message = 'this is js in action'
    @track n1;
    @track n2;
    result;
    change(event){
        const fieldName=event.target.name;
        if(fieldName==='text1')
            this.n1=event.target.value;
        else{
            this.n2=event.target.value;
        }
    }
    calculate(){
        this.result=Number(this.n1)+Number(this.n2);
    }
}
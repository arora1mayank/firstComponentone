import {api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api myMessage='this is from child';
   
    buttonVariant='success';
    buttonStatus='select1';
   
    @api reset(){
        console.log('child m ghus gya');
        this.buttonVariant='success';
        this.buttonStatus='select1';
    }
    
    handelChange(){
        console.log('hello');
        if(this.buttonStatus ==='select1'){
            this.buttonVariant='destructive';
            this.buttonStatus='deselect';
        }
        else{
            this.buttonVariant='success';
            this.buttonStatus='select1';
        }
    }
}
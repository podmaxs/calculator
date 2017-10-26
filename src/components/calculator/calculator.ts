import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Calculator component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calculator',
  templateUrl: 'calculator.html'
})
export class Calculator {

  public display:string = "";
  public query:string   = "";
  constructor(public alert:AlertController) {
    console.log('Hello Calculator Component');
  }

  public addToQuery(operator:string = ""){
  	if(operator != '=' && operator!='CE'){
	  	this.query += operator;
	  	this.display = this.query;
  	}else{
  		if(operator == "="){
  			this.evalQuery();
  		}else{
  			this.display = "";
  			this.query   = "";
  		}
  	}
  }

  private evalQuery(){
  	try{
	  	let result:number = eval(this.query);
	  	if(result != null){
	  		this.display+=" = "+result;
	  	}else{
	  		this.alert.create({message: 'Error de sintaxis',buttons:['ok']}).present();
	  	}
  	}catch(err){
  		this.alert.create({message: 'Error de sintaxis',buttons:['ok']}).present();
  	}
  }

}

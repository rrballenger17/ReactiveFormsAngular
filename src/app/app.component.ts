import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveFormsAngular';

  myFormModel: FormGroup;                    

  constructor() {
    this.myFormModel = new FormGroup({       
       username: new FormControl(),
        fullName: new FormControl(),
      
        passwordsGroup: new FormGroup({        
           password: new FormControl(),
            pconfirm: new FormControl()
        }),
      emails: new FormArray([                  
        new FormControl()                      
      ])

    });
  }

  addEmail() {
    this.emailsFormArray.push(new FormControl());
  
  }


  get emailsFormArray() {
    return this.myFormModel.get('emails') as FormArray;
  }


  onSubmit() {
    console.log(this.myFormModel.value);     
   }


}





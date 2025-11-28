
import { Component, OnInit } from '@angular/core';  
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})

export class SecondComponentComponent implements OnInit {
  
  bookid:number = 1;
  bookname:string = "Angular";
  bookauthor:string = "Raja";
  bookstatus:string = "Available";

  btnToggle:boolean=true;
  btnAutoFocus:boolean=true;
  btnValue:string="Ha Ha";

  isValid: boolean = true;

  /*property binding(from ts to html)*/
  ngOnInit():void {  

    setTimeout(() =>{  
      this.btnToggle=false;
      this.btnAutoFocus=false;
      this.btnValue="Sa Sa";
    }, 5000); 
    
  }  


  constructor(public _math:MathsService){
  }  
  
/*event binding (from html to ts)*/
  onToggleMethod()
  {
    if(this.bookstatus=="Available")
    {
      this.bookstatus="NOT Available"
    }
    else
    {
      this.bookstatus= "Available"
    }

  }
/*ngif*/
  ChangeData(valid: boolean) {
    this.isValid = valid;
}

/*ngfor*/
students: any[] = [
  {
      ID: 'std101', FirstName: 'Preety', LastName: 'Tiwary',
      Branch: 'CSE', DOB: '29/02/1988', Gender: 'Female'
  },
  {
      ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty', 
      Branch: 'ETC', DOB: '23/05/1989', Gender: 'Male'
  },
  {
      ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', 
      Branch: 'CSE', DOB: '24/07/1992', Gender: 'Female'
  },
  {
      ID: 'std104', FirstName: 'Hina', LastName: 'Sharma', 
      Branch: 'ETC', DOB: '19/08/1990', Gender: 'Female'
  },
  {
      ID: 'std105', FirstName: 'Sambit', LastName: 'Satapathy', 
      Branch: 'CSE', DOB: '12/94/1991', Gender: 'Male'
  }
];

/*ngSwitch*/
public dropDownValue = "";

      SetDropDownValue(drpValue : any) {
        this.dropDownValue = drpValue.target.value;
    }


 /*ngStyle*/   
 AddButtonCSSStyles() {
  let CssStyles = {        
      'color':'green',
      'font-weight': 'bold',
      'font-size.px': 20
  };
  return CssStyles;
}


/*ngClass*/ 
AddCSSClasses(flag:string) {
  let Cssclasses;
  if(flag == "type1")
  {
    Cssclasses = {
      'one' : true,
      'two' : true
    }
  }
  else
  {
    Cssclasses = {
      'four' : true,
      'five' : true
    }
  }
  return Cssclasses;
}

}

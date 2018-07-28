
class Some {

  constructor() { 
      this.a = "Hello there!"; 
  }
  
  hello() { 
      setInterval(() => console.log(this.a), 1000); 
  }      
}

let ins = new Some();
ins.hello();

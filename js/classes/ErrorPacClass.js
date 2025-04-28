export class ErrorPac extends Error {
//name //SyntaxError RefernceError EvalErr
//messag
// //stack
    #code; // codi privat

    constructor(code, message) {
    super(message);
    this.#code = code;
  }

  //Getter (Setter no fiquem ja que no volem que es pugui canviar)
  get code() {
    return this.#code;
  }

 toString() {
    console.log(
        `S'ha produït un error:\nCodi: 
        ${this.#code}\nMissatge: ${this.message}\nPila: ${this.stack}`
    );
}

}
/*
* Error 1_ Tecla no reconegudadd*/

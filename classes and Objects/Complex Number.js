// complex Number is used for handling  getter and detter

class ComplexNumber {
    #real;
    #imag;
    constructor(r,i){
        this.#real = r;
        this.#imag = i;
    }
    display (){
        console.log(this.#real, " + i" , this.#imag)
    }
    // Adding data
    get real(){
        return this.#real
    }
    get imag(){
        return this.#imag
    }
    // Adding Complex Number
    addComplexNumber(c){
        this.#real += c.real;
        this.#imag += c.imag;
    }
}
const c1 = new ComplexNumber(2,4)
c1.display();
const c2 = new ComplexNumber(5,8);
c1.addComplexNumber(c2);
c1.display();
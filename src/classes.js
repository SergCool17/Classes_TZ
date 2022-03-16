class Aclass {
  constructor(n) {
    this.Numbers = Array;
    this.#fill(n);
  }
  #fill(n) {
    let arr = [];
    //функция проверки на простоту
    let isSimple = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    //простые числа генерируются по формуле 6 * Х +1
    // и дополнительно перепроверяются формулой isSimple
    while (arr.length < n) {
      let rndNum = Math.ceil(Math.random() * 10) * 6 + 1;
      if (isSimple(rndNum)) {
        arr.push(rndNum);
      }
    }
    this.Numbers = [...arr];
    console.log(`Start Numbers: ${this.Numbers}`);
  }
  fillArray(n) {
    return this.#fill(n);
  }
  factorial() {
    const fact = (n, a = 1) => {
      if (n === 0) return a;
      return fact(n - 1, n * a);
    };

    let factorialArray = this.Numbers.map((n) => fact(n));
    console.log(`Factorial: ${factorialArray}`);
    return factorialArray;
  }
  sort() {
    let sorted = [...this.Numbers.sort()];
    return this.factorial(sorted);
  }

  /*isPrime(z) {
    //дополнительная проверка на простоту
    let simple;
    z == 1 || 2 ? (simple = "true") : (simple = "false");
    let sq = Math.sqrt(z);
    for (let i = 2; i <= sq; i++) {
      z % i === 0
        ? (simple = "false")
        : simple == "false" || simple == ""
        ? (simple = "false")
        : (simple = "true");
    }
    return console.log(simple);
  }*/
}

export let Class1 = new Aclass(8);
//Class1.factorial();
//Class1.sort();

class Bclass extends Aclass {
  sort() {
    {
      let sorted = [...this.Numbers.sort((a, b) => b - a)];
      return this.factorial(sorted);
    }
  }
}
export let Class2 = new Bclass(8);
//Class2.factorial();
//Class2.sort();

//console.log(Class1.Numbers);
//Class1.fillArray(4);
//console.log(Class1.Numbers);
//Class1.isPrime(4); //метод доп проверки числа на простоту

//console.log(Class1.Numbers);
//console.log(Class1.sort());

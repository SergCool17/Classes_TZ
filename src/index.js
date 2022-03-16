import { Class1, Class2 } from "./classes";
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Classes:</h1>
<h2> CLASS1</h2>
<h3>Class1.Numbers:</h3>
<div> ${Class1.Numbers.map((x) => ` ${x} `)}
</div>
<h3>Class1.factorial:</h3>
<div> ${Class1.factorial().map((x) => ` ${x} `)}
</div>
<h3>Class1.sort:</h3>
<div> ${Class1.sort().map((x) => ` ${x} `)}
</div>
<h2> CLASS2</h2>
<h3>Class2.Numbers:</h3>
<div> ${Class2.Numbers.map((x) => ` ${x} `)}
</div>
<h3>Class2.factorial:</h3>
<div> ${Class2.factorial().map((x) => ` ${x} `)}
</div>
<h3>Class2.sort:</h3>
<div> ${Class2.sort().map((x) => ` ${x} `)}
</div>
`;

//let Bclass = new Aclass();

//Bclass.fill(3);

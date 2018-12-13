let stringg: string = "1234567890-=!@#$%^&*()_+qwertyuiop[]asdfghjkl;'zxcvbnm,.QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM><?";

let inp = document.createElement("input");
let ta = document.createElement("textarea");
let but = document.createElement("button");
document.body.appendChild(inp);
document.body.appendChild(ta);
document.body.appendChild(but);
but.innerText = "start";
ta.setAttribute("readonly", "true");

function onepwd(x: number): string {
    let res: string = ""
    for (let i = 0; i < Number(x); i++){
        res += stringg[Math.floor(Math.random() * stringg.length) + 1  ];
    }
    return res;
}

function out(): void {
    for (let i = 0; i < 50000; i++) {
        ta.value += onepwd(Number(inp.value)) + "\n"
    }
}




but.addEventListener("click", (e:Event) => this.out())

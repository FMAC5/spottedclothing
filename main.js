const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const inp3 = document.getElementById('inp3');
const inp4 = document.getElementById('inp4');
const inp5 = document.getElementById('inp5');
const inp6 = document.getElementById('inp6');

const hdn1 = document.getElementById('hdn1');
const hdn2 = document.getElementById('hdn2');
const hdn3 = document.getElementById('hdn3');
const hdn4 = document.getElementById('hdn4');
const hdn5 = document.getElementById('hdn5');
const hdn6 = document.getElementById('hdn6');
const hdn7 = document.getElementById('hdn7');
const hdn8 = document.getElementById('hdn8');
const hdn9 = document.getElementById('hdn9');
const hdn10 = document.getElementById('hdn10');
const hdn11 = document.getElementById('hdn11');

const btn1 = document.getElementById('btn1');

const out1 = document.getElementById('output1')
const out2 = document.getElementById('output2')
const out3 = document.getElementById('output3')
const out4 = document.getElementById('output4')
const out5 = document.getElementById('output5')
const out6 = document.getElementById('output6')
const out7 = document.getElementById('output7')
const out8 = document.getElementById('output8')
const out9 = document.getElementById('output9')
const out10 = document.getElementById('output10')
const out11 = document.getElementById('output11')
const out12 = document.getElementById('output12')
const out13 = document.getElementById('output13')
const out14 = document.getElementById('output14')
const out15 = document.getElementById('output15')
const out16 = document.getElementById('output16')
const out17 = document.getElementById('output17')
const out18 = document.getElementById('output18')
const out19 = document.getElementById('output19')
const out20 = document.getElementById('output20')
const out21 = document.getElementById('output21')

function fun1 () {
    out1.innerHTML = hdn1.innerHTML;
}

function fun2 () {
    out2.innerHTML = inp1.value;
}

function fun3 () {
    out3.innerHTML = hdn2.innerHTML;
}

function fun4 () {
    out4.innerHTML = inp2.value;
}

function fun5 () {
    out5.innerHTML = hdn3.innerHTML;
}

function fun6 () {
    out6.innerHTML = inp3.value;
}

function fun7 () {
    out7.innerHTML = hdn4.innerHTML;
}

function fun8 () {
    out8.innerHTML = inp3.value;
}

function fun9 () {
    out9.innerHTML = hdn5.innerHTML;
}

function fun10 () {
    out10.innerHTML = inp4.value;
}

function fun11 () {
    out11.innerHTML = hdn6.innerHTML;
}

function fun12 () {
    out12.innerHTML = inp4.value;
}

function fun13 () {
    out13.innerHTML = hdn7.innerHTML;
}

function fun14 () {
    out14.innerHTML = inp5.value;
}

function fun15 () {
    out15.innerHTML = hdn8.innerHTML;
}

function fun16 () {
    out16.innerHTML = inp5.value;
}

function fun17 () {
    out17.innerHTML = hdn9.innerHTML;
}

function fun18 () {
    out18.innerHTML = inp6.value;
}

function fun19 () {
    out19.innerHTML = hdn10.innerHTML;
}

function fun20 () {
    out20.innerHTML = inp6.value;
}

function fun21 () {
    out21.innerHTML = hdn11.innerHTML;
}

btn1.addEventListener('click', fun1);
btn1.addEventListener('click', fun2);
btn1.addEventListener('click', fun3);
btn1.addEventListener('click', fun4);
btn1.addEventListener('click', fun5);
btn1.addEventListener('click', fun6);
btn1.addEventListener('click', fun7);
btn1.addEventListener('click', fun8);
btn1.addEventListener('click', fun9);
btn1.addEventListener('click', fun10);
btn1.addEventListener('click', fun11);
btn1.addEventListener('click', fun12);
btn1.addEventListener('click', fun13);
btn1.addEventListener('click', fun14);
btn1.addEventListener('click', fun15);
btn1.addEventListener('click', fun16);
btn1.addEventListener('click', fun17);
btn1.addEventListener('click', fun18);
btn1.addEventListener('click', fun19);
btn1.addEventListener('click', fun20);
btn1.addEventListener('click', fun21);

document.addEventListener("DOMContentLoaded", () => {
    let inp2 = document.getElementById("inp2");
  
    inp2.addEventListener("input", inp2Selected);
  });
  
  function inp2Selected(ev) {
    console.log(ev.target.value);
    let inp2Name = ev.target.value.toLowerCase();
    if (!document.getElementById(inp2Name)) return;
    // document.getElementById(inp2Name).tagName == 'DATALIST'
  
    let inp1 = document.getElementById("inp1");
    inp1.setAttribute("list", inp2Name);
  
    inp1.focus();
    inp1.value = "";
  }


  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  })

function myButton() {
    location.reload();
}

function RNG (minNum, maxNum) {
  var rng = minNum+(Math.random()*(maxNum-minNum));
  return Math.round(rng);
};

var p = RNG(100,997),
    q = RNG(100,997),
    e = RNG(10,35);

function iterator(pq) {
  for (pq; pq<=997; pq++) {
    var Prime = true
        _pq = [];
    for (i = 2; i <= pq; i++) {
      if (pq % i === 0 && i !== pq)  {
        Prime = false;
      }
    }
    if (Prime === true) {
      _pq.push(pq);
      break;
    }
  }
  pq = +_pq;
  return pq;
};

p = iterator(bigInt(p));
q = iterator(bigInt(q));

var Yn = (p-1)*(q-1),
    n = p * q,
    d = Number(),
    gcd;

gcd = function (e, Yn) {
  if (!Yn) {
    return e;
  }
  return gcd(Yn, e%Yn)
};
for (e; e<Yn; e++) {
  gcd(e, Yn);
  if (gcd(e, Yn) == 1) break;
}

for (d; d < Yn; d++) {
  (e*d)%Yn;
  if ((e*d)%Yn == 1) break;
}

console.log(`Public_key: ${e}, ${n} \nPrivate_key: ${d} `);

function encrypt (M, n, e) {
  return bigInt(M).modPow(e, n);
}

function decrypt (C, d, n) {
  return bigInt(C).modPow(d, n);
}

function encode() {
  var M = document.getElementById('message')
          .value
          .split(',')
          .map(Number),
      C = [],
      _M = [];
  if (M.length > 10) {
    alert ("You can not encode more then 10 numbers");
  } else {
  for (let item of M) {
    if (item >= n) {
      alert ("Not all numbers have permited length!");
    } else {
    C.push(+encrypt(item, n, e));
    }
  }
  for (let item of C) {
    _M.push(+decrypt(item, d, n));
  }
  document.getElementById('encoded1').innerHTML = (C);
  document.getElementById('decoded1').innerHTML = (_M);
  }
};

function decode() {
  var C = document.getElementById('crypted_message')
          .value
          .split(',')
          .map(Number),
      M = [],
      _C = [];
  if (C.length > 10) {
    alert ("You can not encode more then 10 numbers");
  } else {
  for (let item of C) {
    if (item >= d) {
      alert ("Not all numbers have permited length!");
    } else {
    M.push(+decrypt(item, d, n));
    }
  }
  for (let item of M) {
    _C.push(+encrypt(item, n, e));
  }
  document.getElementById('decoded2').innerHTML = (_C);
  document.getElementById('encoded2').innerHTML = (M);
  }
};

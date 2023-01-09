const cardHolder = document.getElementById('cardHolder');
const cardNum = document.getElementById('cardNum');
const expMonth = document.getElementById('expMonth');
const expYear = document.getElementById('expYear');
const cvc = document.getElementById('cvc');
const confirm = document.getElementById('confirm');
const btn = document.getElementById('btnContinue');

cardHolder.addEventListener('keyup', CARDNAME);
cardNum.addEventListener('keyup', CARDNUM);
expMonth.addEventListener('keyup', CARDMONTH);
expYear.addEventListener('keyup', CARDYEAR);
cvc.addEventListener('keyup', CARDCVC);


function CARDNAME(e) {
  const detail = e.target.value
  document.querySelector('.cardName').innerHTML = detail

};

function CARDNUM(e) {
  const detail = e.target.value
  document.querySelector('.cardNumber').innerHTML = detail
};

function CARDMONTH(e) {
  const detail = e.target.value
  document.querySelector('.expiryMonth').innerHTML = detail
};

function CARDYEAR(e) {
  const detail = e.target.value
  document.querySelector('.expiryYear').innerHTML = detail
};

function CARDCVC(e) {
  const detail = e.target.value
  document.querySelector('.cardCvc').innerHTML = detail
} 



cardHolder.addEventListener('blur', checkName);
cardNum.addEventListener('blur', checkNum);
expMonth.addEventListener('blur', checkMonth);
expYear.addEventListener('blur', checkYear);
cvc.addEventListener('blur', checkCvc);
confirm.addEventListener('click', Confirm);
btn.addEventListener('click', reload);


function checkName(e) {
  
  const re = /^[a-zA-Z\W]+\s[a-zA-Z]+[\s[a-zA-Z]+]?$/;
  // in the first combination \W is for a name like A.Walker instead of Alone Walker
  // the last combination is optional for a name like Alone Walker John
  if (!re.test(cardHolder.value)) {
    document.querySelector('.errCardHolder').style.display = 'unset'
    cardHolder.classList.add('errBorder')
    setTimeout(
      function () {
        document.querySelector('.errCardHolder').style.display = 'none'
        cardHolder.classList.remove('errBorder')
      },
      "3000")
     }
}
function checkNum(e) {
  
  const re = /^\d+$/;

  if (!re.test(cardNum.value)) {
    document.querySelector('.errCardNum').style.display = 'unset'
    cardNum.classList.add('errBorder')
    setTimeout(
      function () {
        document.querySelector('.errCardNum').style.display = 'none'
        cardNum.classList.remove('errBorder')
      },
      "3000")
  }
}
function checkMonth(e) {
  
  const re = /^\d+$/;

  if (!re.test(expMonth.value)) {
    document.querySelector('.errExpDate').style.display = 'unset'
    expMonth.classList.add('errBorder')
    setTimeout(
      function () {
        document.querySelector('.errExpDate').style.display = 'none'
        expMonth.classList.remove('errBorder')
      },
      "3000")
  }
}

function checkYear(e) {
  
  const re = /^\d+$/;

  if (!re.test(expYear.value)) {
    document.querySelector('.errExpDate').style.display = 'unset'
    expYear.classList.add('errBorder')
    setTimeout(
      function () {
        document.querySelector('.errExpDate').style.display = 'none'
        expYear.classList.remove('errBorder')
      },
      "3000")
  }
}
function checkCvc(e) {
  
  const re = /^\d+$/;

  if (!re.test(cvc.value)) {
    document.querySelector('.errCvc').style.display = 'unset'
    cvc.classList.add('errBorder')
    setTimeout(
      function () {
        document.querySelector('.errCvc').style.display = 'none'
        cvc.classList.remove('errBorder')
      },
      "3000")
  }
}

function Confirm(e) {
  const form = document.querySelector('.formContainer');
  form.style.display = 'none'
  const done = document.querySelector('.doneContainer');
  done.style.display = 'flex'
  e.preventDefault()
}

function reload(e) {
  window.location.reload();
}
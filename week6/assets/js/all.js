"use strict";

$(function () {
  $('.courseSlider-btn').on('click', function () {
    $('.courseSlider-btn').removeClass('info-primary');
    $(this).toggleClass('info-primary');
  });
}); //program

var program_swiper = new Swiper(".program-swiper", {
  slidesPerView: 9,
  spaceBetween: 16,
  autoplay: true,
  loop: true
}); //join

var join_swiper = new Swiper(".join-swiper", {
  autoplay: true,
  loop: true,
  pagination: {
    el: ".join-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
}); // aos

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

}); // date

var elem = document.querySelector('input[name="date"]');
var dateDatepicker = new Datepicker(elem, {
  autohide: true,
  language: 'zh-TW',
  buttonClass: 'btn',
  format: "yyyy/mm/dd",
  defaultViewDate: 'today'
}); // validate

var dateInput = document.querySelector('input[name="date"]');
var date = new Date().toLocaleDateString();
dateInput.value = date; // index

var user_form = document.querySelector('.user-form');
var user_inputs = document.querySelectorAll('input[name="userEmail"], input[name="userPass"]');
var user_constraints = {
  'userEmail': {
    presence: {
      message: '必填'
    },
    email: {
      message: '請填寫正確信箱格式'
    }
  },
  'userPass': {
    presence: {
      message: '必填'
    }
  }
}; // register

var register_form = document.querySelector('.register-form');
var register_inputs = document.querySelectorAll('input[name="name"], input[name="phone"], input[name="email"], input[name="date"], input[name="place"]');
var register_constraints = {
  'name': {
    presence: {
      message: '必填'
    }
  },
  'phone': {
    presence: {
      message: '必填'
    },
    length: {
      is: 10,
      wrongLength: "請填寫正確電話格式"
    }
  },
  'email': {
    presence: {
      message: '必填'
    },
    email: {
      message: '請填寫正確信箱格式'
    }
  },
  'date': {
    presence: {
      message: '必填'
    }
  },
  'place': {
    presence: {
      message: '必填'
    }
  }
}; // pay

var credit_form = document.querySelector('.credit-form');
var credit_inputs = document.querySelectorAll('input[name="creditUser"], input[name="creditPass"],input[name="date"]');
var credit_constraints = {
  'creditUser': {
    presence: {
      message: '必填'
    },
    length: {
      is: 16,
      wrongLength: "請填寫有效帳號"
    }
  },
  'creditPass': {
    presence: {
      message: '必填'
    },
    length: {
      is: 3,
      wrongLength: "請填寫有效安全碼"
    }
  },
  'date': {
    presence: {
      message: '必填'
    }
  }
}; // 確認是否有空值

var errorCheck = true; // 確認驗證是否全部通過

var errorArr = 0;

function check(error, item) {
  item.previousElementSibling.children[0].textContent = "";
  errorCheck = true;
  errorArr = 0;

  if (error) {
    Object.keys(error).forEach(function (keys) {
      var temp = error[keys][0].split(' ');
      document.querySelector(".".concat(keys)).textContent = temp[temp.length - 1];
      errorCheck = false;
      errorArr += 1;
    });
  } //驗證數字


  var att = item.getAttribute('name');

  if (att === "phone" || att === "creditUser" || att === "creditPass") {
    var num = Number(item.value);

    if (isNaN(num)) {
      document.querySelector(".".concat(att)).textContent = "請輸入數字格式";
      errorArr = 1;
    }
  }
} // index


user_inputs.forEach(function (item) {
  item.value === "" ? errorArr += 1 : errorArr -= 1;
  item.addEventListener('change', function () {
    var error = validate(user_form, user_constraints);
    check(error, item);
  });
}); // register

register_inputs.forEach(function (item) {
  item.value === "" ? errorArr += 1 : errorArr -= 1;
  item.addEventListener('change', function () {
    var error = validate(register_form, register_constraints);
    check(error, item);
  });
}); // pay

credit_inputs.forEach(function (item) {
  item.value === "" ? errorArr += 1 : errorArr -= 1; // console.log(item)

  item.addEventListener('change', function () {
    var error = validate(credit_form, credit_constraints);
    check(error, item);
  });
});
document.querySelector('.check-btn').addEventListener('click', function (e) {
  if (errorArr !== 0 || !errorCheck) {
    e.preventDefault();
    alert("請填寫完整表單");
    return;
  } else if (e.target.textContent === "登入") {
    alert("登入成功");
    return;
  }
});
//# sourceMappingURL=all.js.map

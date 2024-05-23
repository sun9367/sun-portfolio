// 메인텍스트 <선아's 프론트엔드개발자 포트폴리오>
const Text = document.querySelectorAll('.maintext span');


window.onload = () => {
  let timer = 50;
  Text.forEach((a) => {
    a.style.animation = `mianSpan 500ms ${(timer += 50)}ms forwards`;
  });

};


//스킬로고 애니메이션
const skillLogo = document.querySelectorAll('.skill-logo li');

const animateSkillLogo = (e) => {
  e.forEach(a => {
    if (a.isIntersecting) {
      a.target.style.animation = 'bounce-in-fwd 1s forwards';
    }
  });
};

const skillLogoObserver = new IntersectionObserver(animateSkillLogo, {
  threshold: 0.5
});

skillLogo.forEach((logo) => {
  skillLogoObserver.observe(logo);
});

// 스킬로고 보일때마다 애니메이션 실행
window.addEventListener('scroll', () => {
  skillLogo.forEach((logo) => {
    const bounding = logo.getBoundingClientRect();
    if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
      logo.style.animation = 'bounce-in-fwd 1s forwards';
    } else {
      logo.style.animation = 'none'; // 뷰포트에 없을때 애니메이션 중지
    }
  });
});

// 프로젝트명 텍스트 효과
const proTextH1 = document.querySelectorAll('.proText div h1');

const animateH1 = (e) => {
  e.forEach(a => {
    if (a.isIntersecting) {
      a.target.style.animation = 'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both';
    }
  });
};

const proTextH1Observer = new IntersectionObserver(animateH1, {
  threshold: 0.5
});

skillLogo.forEach((h1) => {
  proTextH1Observer.observe(h1);
});

// 프로젝트명 보일때마다 애니메이션 실행
window.addEventListener('scroll', () => {
  proTextH1.forEach((h1) => {
    const bounding = h1.getBoundingClientRect();
    if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
      h1.style.animation = 'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both';
    } else {
      h1.style.animation = 'none'; // 뷰포트에 없을때 애니메이션 중지
    }
  });
});


//proText > 기간, 기술, 소개
const period = document.querySelectorAll('.proText div h2');
const infor = document.querySelectorAll('.proText div p');

const animatePeriod = (e) => {
  e.forEach(a => {
    if (a.isIntersecting) {
      a.target.style.animation = 'slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    }
  })
}

const animateInfor = (e) => {
  e.forEach(a => {
    if (a.isIntersecting) {
      a.target.style.animation = 'slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    }
  })
}

const periodObserver = new IntersectionObserver(animatePeriod, {
  threshold : 0.5
})

const inforObserver = new IntersectionObserver(animateInfor, {
  threshold : 0.5
})

window.addEventListener('scroll', () => {
  period.forEach((e) => {
    const bounding = e.getBoundingClientRect();
    if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
      e.style.animation = 'slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    } else {
      e.style.animation = 'none'; // 뷰포트에 없을때 애니메이션 중지
    }
  });
});

window.addEventListener('scroll', () => {
  infor.forEach((e) => {
    const bounding = e.getBoundingClientRect();
    if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
      e.style.animation = 'slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
    } else {
      e.style.animation = 'none'; // 뷰포트에 없을때 애니메이션 중지
    }
  });
});

//project

let cardObserve = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      a.target.style.opacity = 1;
    } else {
      a.target.style.opacity = 0;
      }
  })
})


let cards = document.querySelectorAll('.card');
cardObserve.observe(cards[0])
cardObserve.observe(cards[1])
cardObserve.observe(cards[2])




//emailjs

function sendMail() {
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = "service_33ssedu";
  const templateID = "template_eejd219";

  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        console.log(res);
        alert('전송완료! 감사합니다.');
      }
    )
    .catch((err)=> console.log(err));
}


  // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });




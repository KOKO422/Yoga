var studio = anime({
    targets: '.studio_all',
    translateY: '20vh',
    duration: 300,
    // loop: true,
    direction: 'alternate',
    easing: 'easeInCubic',
    scaleX: {
        value: 1.5,
        duration: 150,
        delay: 268
    }
});

window.addEventListener("scroll", () => {
    const srollVal = window.pageYOffset;
    if (srollVal > contentsPosition) {
      // 発火させるイベント
      console.log("studio");
      doSomething();
    }
  });
// anime({
//     targets: '.ball-se',
//     translateX: 250,
//     delay: 3000
//   });
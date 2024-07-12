document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('videoPlayer');
  const leftZone = document.querySelector('.gesture-zone.left');
  const middleZone = document.querySelector('.gesture-zone.middle');
  const rightZone = document.querySelector('.gesture-zone.right');

  let leftHoldInterval, rightHoldInterval;

  leftZone.addEventListener('dblclick', () => {
    video.currentTime -= 5;
  });

  rightZone.addEventListener('dblclick', () => {
    video.currentTime += 10;
  });

  middleZone.addEventListener('dblclick', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  leftZone.addEventListener('mousedown', () => {
    leftHoldInterval = setInterval(() => {
      video.currentTime -= 1;
    }, 1000);
  });

  leftZone.addEventListener('mouseup', () => {
    clearInterval(leftHoldInterval);
  });

  leftZone.addEventListener('mouseleave', () => {
    clearInterval(leftHoldInterval);
  });

  rightZone.addEventListener('mousedown', () => {
    rightHoldInterval = setInterval(() => {
      video.currentTime += 2;
    }, 1000);
  });

  rightZone.addEventListener('mouseup', () => {
    clearInterval(rightHoldInterval);
  });

  rightZone.addEventListener('mouseleave', () => {
    clearInterval(rightHoldInterval);
  });
});

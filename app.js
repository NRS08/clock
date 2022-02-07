gsap.ticker.lagSmoothing(false);
const t = new Date();
var s;
var h;
var m;
h = t.getHours();
if (h > 12) {
  h = h - 12;
}
// h = h * 30;
// h = h + m * 0.5;
m = t.getMinutes();
s = parseInt(t.getSeconds());
const tl = gsap.timeline({ ease: "linear" });
tl.fromTo(
  ".second-hand",
  { rotate: s * 6 },
  {
    rotate: 360 + s * 6,
    repeat: -1,
    duration: 60,
    ease: Power0.easeNone,
  },
  "<"
);
tl.fromTo(
  ".min-hand",
  { rotate: m * 6 },
  {
    rotate: 360 + m * 6,
    repeat: -1,
    duration: 3600,
    ease: Power0.easeNone,
  },
  "<"
);
tl.fromTo(
  ".hour-hand",
  { rotate: h * 30 + m * 0.5 },
  {
    rotate: 360 + h * 30 + m * 0.5,
    repeat: -1,
    duration: 43200,
    ease: Power0.easeNone,
  },
  "<"
);

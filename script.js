document.addEventListener('DOMContentLoaded', function () {
    const svgDoc = document.getElementById('svgObject').contentDocument;

    if (!svgDoc) {
        console.error('SVG content document not found');
        return;
    }

    const dotsGroups = svgDoc.querySelectorAll('.dots-nav');
    const color = '#FF0000';

    let currentDotIndex = -1;

    dotsGroups.forEach((group, i) => {
        const dots = group.querySelectorAll('.dotsst');
        const lines = group.querySelectorAll('.dotsstro');

        dots.forEach((dot, j) => {
            const dotIndex = i * dots.length + j;
            const line = lines[j];

            gsap.set(dot, { fill: 'white' });

            ScrollTrigger.create({
                trigger: `.screen:nth-child(${dotIndex + 1})`,
                scroller: '.main',
                start: 'top center',
                end: 'bottom center',
                onEnter: () => {
                    gsap.to(dot, { fill: color, duration: 0.5 });
                    gsap.to(line, { stroke: 'white', duration: 0.5 });
                    currentDotIndex = dotIndex;
                },
                onLeaveBack: () => {
                    if (dotIndex <= currentDotIndex) {
                        gsap.to(dot, { fill: 'white', duration: 0.5 });
                        gsap.to(line, { stroke: 'white', duration: 0.5 });
                    }
                }
            });
        });
    });
});

// SLider dots
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.screen');
    const sliderDotsContainer = document.querySelector('.slider-dots');

    sections.forEach((section, index) => {

        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        sliderDotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            const scrollOptions = {
                top: section.offsetTop,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);
        });

        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {

                document.querySelectorAll('.slider-dot').forEach((d) => {
                    d.classList.remove('active');
                });
                dot.classList.add('active');
            }
        });
    });

    // Function to handle mobile touch events
    function handleTouchEvents() {
        let startY;
        window.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });

        window.addEventListener('touchmove', (e) => {
            if (!startY) return;
            let endY = e.touches[0].clientY;
            let diffY = startY - endY;

            if (Math.abs(diffY) > 50) {
                if (diffY > 0) {
                    scrollToSection('next');
                } else {
                    scrollToSection('prev');
                }
                startY = null;
            }
        });
    }

    // Function to scroll to next or previous section
    function scrollToSection(direction) {
        const activeDot = document.querySelector('.slider-dot.active');
        const dots = Array.from(document.querySelectorAll('.slider-dot'));

        const currentIndex = dots.findIndex(dot => dot === activeDot);
        let targetIndex;
        if (direction === 'next') {
            targetIndex = currentIndex + 1;
        } else {
            targetIndex = currentIndex - 1;
        }

        if (targetIndex >= 0 && targetIndex < dots.length) {
            dots[targetIndex].click();
        }
    }

    handleTouchEvents();
});



// Fixed Div Color Change Animation
const colors = [
    '#172554', '#006400', '#00008B', '#8B4513',
    '#172554', '#008B8B', '#8B008B'
];
const bodycolors = [
    '#172554',
    '#006400 ',
    '#00008B ',
    '#8B4513',
    '#172554 ',
    '#008B8B ',
    '#8B008B',
];

document.querySelectorAll('.screen').forEach((section, index) => {
    const color = colors[index];
    const bodycolor = bodycolors[index];
    gsap.to('.bg-blue-950, #transring', {
        backgroundColor: color,
        scrollTrigger: {
            trigger: section,
            scroller: '.main',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        }
    });
    gsap.to('body', {
        backgroundColor: bodycolor,
        scrollTrigger: {
            trigger: section,
            scroller: '.main',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        }
    });
});


// Function to set GSAP animations for desktop view
function setDesktopAnimations() {
   
// Page 1
gsap.from(".imgbox1 .first", {
    opacity: 0,
    y: 300,
    delay: 0.5,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox1",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play reset play reset"
    }
});

gsap.from(".left1 h1, .minitext, .lasttext div, .right1 div", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left1",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play reset play reset"
    }
});

// Page 2
gsap.from(".imgbox2 .second", {
    opacity: 0,
    y: 300,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox2",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play reset play reset"
    }
});

gsap.from(".left2 h1, .minitext2, .lasttext2 div, .right2 div", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left2",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play reset play reset"
    }
});

// Page 3
gsap.from(".imgbox3 .third", {
    opacity: 0,
    y: 300,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox3",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play reset play reset"
    }
});

gsap.from(".left3 h1, .minitext3, .lasttext3 div, .right3 div", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left3",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play reset play reset"
    }
});

// Page 4
gsap.from(".imgbox4 .forth", {
    opacity: 0,
    y: 300,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox4",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play reset play reset"
    }
});

gsap.from(".left4 h1,.left4 .tag, .minitext4, .lasttext4 div, .right4 div", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left4",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play reset play reset"
    }
});

// Page 5
gsap.from(".imgbox5 .fifth", {
    opacity: 0,
    y: 300,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox5",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play reset play reset"
    }
});

gsap.from(".left5 h1, .minitext5, .lasttext5 div, .right5 div", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left5",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play reset play reset"
    }
});

// Page 6
gsap.from(".imgbox6 .sixth", {
    opacity: 0,
    y: 300,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox6",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play reset play reset"
    }
});

gsap.from(".left6 h1, .minitext6, .lasttext6 div, .right6 div", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left6",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play reset play reset"
    }
});

// Page 7
gsap.from(".imgbox7 .seventh", {
    opacity: 0,
    y: 300,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox7",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play reset play reset"
    }
});

gsap.from(".left7 h1, .left7 .tag7, .minitext7, .lasttext7 div, .right7 div", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left7",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play reset play reset"
    }
});
}

// Function to set GSAP animations for mobile view
function setMobileAnimations() {
    // Page 1
  
// Page 1
gsap.from(".imgbox1 .first", {
    opacity: 0,
    y: -30,
    delay: 0.5,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox1",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play none play reset"
    }
});

gsap.from(".left1 h1, .minitext, .lasttext div, .right1 div", {
    opacity: 0,
    y: -10,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left1",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none play reset"
    }
});

// Page 2
gsap.from(".imgbox2 .second", {
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox2",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play none play reset"
    }
});

gsap.from(".left2 h1, .minitext2, .lasttext2 div, .right2 div", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left2",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none play reset"
    }
});

// Page 3
gsap.from(".imgbox3 .third", {
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox3",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play none play reset"
    }
});

gsap.from(".left3 h1, .minitext3, .lasttext3 div, .right3 div", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left3",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none play reset"
    }
});

// Page 4
gsap.from(".imgbox4 .forth", {
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox4",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play none play reset"
    }
});

gsap.from(".left4 h1,.left4 .tag, .minitext4, .lasttext4 div, .right4 div", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left4",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none play reset"
    }
});

// Page 5
gsap.from(".imgbox5 .fifth", {
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox5",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play none play reset"
    }
});

gsap.from(".left5 h1, .minitext5, .lasttext5 div, .right5 div", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left5",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none play reset"
    }
});

// Page 6
gsap.from(".imgbox6 .sixth", {
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox6",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play none play reset"
    }
});

gsap.from(".left6 h1, .minitext6, .lasttext6 div, .right6 div", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left6",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none play reset"
    }
});

// Page 7
gsap.from(".imgbox7 .seventh", {
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".imgbox7",
        scroller: ".main",
        start: "top 80%",
        toggleActions: "play none play reset"
    }
});

gsap.from(".left7 h1, .left7 .tag7, .minitext7, .lasttext7 div, .right7 div", {
    opacity: 0,
    x: -10,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".left7",
        scroller: ".main",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none play reset"
    }
});
}

function setAnimations() {
    if (window.innerWidth <= 768) {
        setMobileAnimations();
    } else {
        setDesktopAnimations();
    }
}

setAnimations();
window.addEventListener('resize', setAnimations);


// // Page 1
// gsap.from(".imgbox1 .first", {
//     opacity: 0,
//     y: 300,
//     delay: 0.5,
//     duration: 1,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".imgbox1",
//         scroller: ".main",
//         start: "top 80%",
//         toggleActions: "play reset play reset"
//     }
// });

// gsap.from(".left1 h1, .minitext, .lasttext div, .right1 div", {
//     opacity: 0,
//     y: 100,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".left1",
//         scroller: ".main",
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play reset play reset"
//     }
// });

// // Page 2
// gsap.from(".imgbox2 .second", {
//     opacity: 0,
//     y: 300,
//     duration: 1,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".imgbox2",
//         scroller: ".main",
//         start: "top 80%",
//         toggleActions: "play reset play reset"
//     }
// });

// gsap.from(".left2 h1, .minitext2, .lasttext2 div, .right2 div", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".left2",
//         scroller: ".main",
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play reset play reset"
//     }
// });

// // Page 3
// gsap.from(".imgbox3 .third", {
//     opacity: 0,
//     y: 300,
//     duration: 1,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".imgbox3",
//         scroller: ".main",
//         start: "top 80%",
//         toggleActions: "play reset play reset"
//     }
// });

// gsap.from(".left3 h1, .minitext3, .lasttext3 div, .right3 div", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".left3",
//         scroller: ".main",
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play reset play reset"
//     }
// });

// // Page 4
// gsap.from(".imgbox4 .forth", {
//     opacity: 0,
//     y: 300,
//     duration: 1,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".imgbox4",
//         scroller: ".main",
//         start: "top 80%",
//         toggleActions: "play reset play reset"
//     }
// });

// gsap.from(".left4 h1,.left4 .tag, .minitext4, .lasttext4 div, .right4 div", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".left4",
//         scroller: ".main",
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play reset play reset"
//     }
// });

// // Page 5
// gsap.from(".imgbox5 .fifth", {
//     opacity: 0,
//     y: 300,
//     duration: 1,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".imgbox5",
//         scroller: ".main",
//         start: "top 80%",
//         toggleActions: "play reset play reset"
//     }
// });

// gsap.from(".left5 h1, .minitext5, .lasttext5 div, .right5 div", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".left5",
//         scroller: ".main",
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play reset play reset"
//     }
// });

// // Page 6
// gsap.from(".imgbox6 .sixth", {
//     opacity: 0,
//     y: 300,
//     duration: 1,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".imgbox6",
//         scroller: ".main",
//         start: "top 80%",
//         toggleActions: "play reset play reset"
//     }
// });

// gsap.from(".left6 h1, .minitext6, .lasttext6 div, .right6 div", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".left6",
//         scroller: ".main",
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play reset play reset"
//     }
// });

// // Page 7
// gsap.from(".imgbox7 .seventh", {
//     opacity: 0,
//     y: 300,
//     duration: 1,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".imgbox7",
//         scroller: ".main",
//         start: "top 80%",
//         toggleActions: "play reset play reset"
//     }
// });

// gsap.from(".left7 h1, .left7 .tag7, .minitext7, .lasttext7 div, .right7 div", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".left7",
//         scroller: ".main",
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play reset play reset"
//     }
// });
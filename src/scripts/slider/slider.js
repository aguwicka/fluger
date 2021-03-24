export default (selectorName => {
    let selector = null;
    let isPause = false;
    let isHover = false;
    let isDrag = false;

    class Slider {
        constructor(selectorName) {
            this.selector = $(selectorName);
            this.init();
        }

        get selector() {
            return selector;
        }

        set selector(value) {
            if (value.length > 0) {
                selector = value;
            }
        }

        init() {
            if (this.selector === null) {
                return;
            }

            const _this = this;
            const time = 5;
            const sec = 1000;
            let tick;
            let percentTime;

            const render = (dot, percent) => {
                const size = 20;
                const centre = size / 2;
                const radius = size * 0.7 / 2;
                const startX = centre;
                const startY = centre - radius;

                const d = percent / 100 * 360;
                const dr = d - 90;
                const radians = Math.PI * dr / 180;
                const endX = centre + radius * Math.cos(radians);
                const endY = centre + radius * Math.sin(radians);
                const largeArc = d > 180 ? 1 : 0;

                $('path.progress', dot).attr({
                    'd': `M${startX},${startY} A${radius},${radius} 0 ${largeArc},1 ${endX},${endY}`
                });
            };

            const start = () => {
                percentTime = 0;
                isPause = false;
                tick = setInterval(() => {
                    if (isPause === false) {
                        percentTime += 1 / time;
                        render($('.owl-dot.active', _this.selector), percentTime);

                        if (percentTime >= 100){
                            render($('.owl-dot.active', _this.selector), 0);
                        }
                    }
                }, 10);
            };

            this.selector.owlCarousel({
                items: 1,
                margin: 0,
                autoHeight: false,
                nav: false,
                navRewind: false,
                dots: true,
                dotsContainer: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: time * sec,
                autoplayHoverPause: true,
                autoWidth: false,
                themeClass: 'owl-theme',
                animateOut: 'fadeOut',
                onInitialize() {
                    render($('.owl-dot', _this.selector), 0);
                    start();
                },
                onChange() {
                    render($('.owl-dot', _this.selector), 0);
                    clearTimeout(tick);
                    start();
                },
                onDrag() {
                    isDrag = true;
                    _this.pause();
                },
                onDragged() {
                    isDrag = false;
                    isHover ? _this.pause() : _this.play();
                }
            });

            this.selector.on('mouseover.owl.autoplay', () => {
                isHover = true;
                _this.pause();
            })
                .on('mouseleave.owl.autoplay', () => {
                    isHover = false;
                    isDrag ? _this.pause() : _this.play();
                });

            $('.owl-dot', this.selector).html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                <circle class="bar" r="7" cx="10" cy="10" fill="none" stroke-dasharray="43.98" stroke-dashoffset="0"/>
                <path class="progress" fill="none"></path>
                <circle class="dot" r="3.5" cx="10" cy="10"/>
            </svg>`);
        }

        play() {
            isPause = false;
        }

        pause() {
            isPause = true;
        }

        destroy() {
            if (this.selector === null) {
                return;
            }

            this.selector.owlCarousel('destroy');
            this.selector.owlCarousel({
                touchDrag: false,
                mouseDrag: false
            });
        }
    }

    return new Slider(selectorName);

});

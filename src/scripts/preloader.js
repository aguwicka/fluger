export default ((selectorName, ms) => {
    let selector = null;
    let timeout = 0;
    let count = 0;

    class Preloader {
        constructor(selectorName, ms = 0) {
            this.selector = $(selectorName);
            this.timeout = ms;

            if (this.selector !== null && this.selector.hasClass('show')) {
                ++count;
            }
        }

        get selector() {
            return selector;
        }

        set selector(value) {
            if (value.length > 0) {
                selector = value;
            }
        }

        get timeout() {
            return timeout;
        }

        set timeout(value) {
            if (value > 0) {
                timeout = value;
                return;
            }

            timeout = 0;
        }

        show() {
            ++count;
            if (this.selector !== null && !this.selector.hasClass('show')) {
                this.selector.addClass('show');
                const html = this.selector.closest('html');
                if (!html.hasClass('preloader--modal')) {
                    html.addClass('preloader--modal');
                }
            }
        }

        hide() {
            --count;
            if (this.selector !== null
                && this.selector.hasClass('show')
                && count <= 0) {
                count = 0;
                this.selector.removeClass('show');
                const html = this.selector.closest('html');
                if (html.hasClass('preloader--modal')) {
                    html.removeClass('preloader--modal');
                }
            }
        }
    }

    return new Preloader(selectorName, ms);
});

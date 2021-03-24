import Slider from './slider';

export default (function () {
    let instance = null;

    return {
        getInstance(name, selectorName) {
            let result = null;

            name = name.toString().trim();
            if (name === '') {
                return result;
            }

            if (instance === null) {
                instance = [];
            }

            if (typeof instance[name] !== 'object') {
                instance[name] = Slider(selectorName);
            }

            if (typeof instance[name] === 'object') {
                result = instance[name];
            }

            return result;
        }
    }
})();

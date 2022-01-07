export default ({
    install: app => {
        app.directive('bgc', (el, binding) => {
            el.style.backgroundColor = binding.arg;
            el.style.color = binding.value;
        })

        app.directive('fs', (el, binding) => {
            el.style.fontSize = binding.value + 'px';
        })
    }
})
export default {
    install(app) {
        app.config.globalProperties.$my = function () {
            console.log('Hello plugin!');
        }
    }
}
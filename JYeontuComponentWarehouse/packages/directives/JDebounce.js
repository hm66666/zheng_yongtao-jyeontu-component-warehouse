export default {
    inserted: function (el, binding) {
        const arg = binding.arg || 500;
        let timer;
        el.addEventListener("input", (e) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                binding.value(e);
            }, arg); // 设置延迟时间，单位为毫秒
        });
    },
};

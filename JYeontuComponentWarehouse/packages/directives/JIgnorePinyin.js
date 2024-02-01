export default {
    bind(el, binding) {
        let isComposing = false;
        let value = "";

        el.addEventListener("compositionstart", () => {
            isComposing = true;
            value = el.value;
        });

        el.addEventListener("compositionend", () => {
            isComposing = false;
            if (value !== el.value) {
                binding.value(el.value);
            }
        });

        // 添加自定义的input事件监听器
        el.addEventListener("input", (event) => {
            if (isComposing) {
                return;
            }
            const value = event.target.value;
            // 处理输入框的值
            binding.value(value);
        });
    },
};

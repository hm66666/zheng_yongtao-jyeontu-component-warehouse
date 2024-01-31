export default {
    bind(el, binding) {
        let isComposing = false;

        // 在compositionstart事件发生时暂停updateValue方法的执行
        el.addEventListener("compositionstart", () => {
            isComposing = true;
        });

        // 在compositionend事件发生时恢复updateValue方法的执行
        el.addEventListener("compositionend", () => {
            isComposing = false;
            binding.value(el.value);
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

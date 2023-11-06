export default {
    // 当被绑定的元素插入到 DOM 中时
    inserted: function (el) {
        // 定义一些变量
        let startX,
            startY,
            currentX = 0,
            currentY = 0;
        el.style.display = "inline-block";
        el.style.cursor = "pointer";
        // 绑定 mousedown 事件，在鼠标按下时开始拖拽
        el.addEventListener("mousedown", function (event) {
            event.preventDefault();
            startX = event.pageX - currentX;
            startY = event.pageY - currentY;
            // 绑定 mousemove 事件，在鼠标移动时旋转元素
            document.addEventListener("mousemove", onMouseMove);
            // 绑定 mouseup 事件，在鼠标松开时结束拖拽
            document.addEventListener("mouseup", onMouseUp);
        });

        // 针对手机端还需要绑定 touchstart，touchmove 和 touchend 事件
        el.addEventListener("touchstart", function (event) {
            event.preventDefault();
            startX = event.touches[0].clientX - currentX;
            startY = event.touches[0].clientY - currentY;
            document.addEventListener("touchmove", onTouchMove);
            document.addEventListener("touchend", onTouchEnd);
        });

        // 定义鼠标移动时的方法
        function onMouseMove(event) {
            event.preventDefault();
            currentX = event.pageX - startX;
            currentY = event.pageY - startY;
            applyTransform(el);
        }

        // 定义鼠标松开时的方法
        function onMouseUp() {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        // 定义触摸移动时的方法
        function onTouchMove(event) {
            event.preventDefault();
            currentX = event.touches[0].clientX - startX;
            currentY = event.touches[0].clientY - startY;
            applyTransform(el);
        }

        // 定义触摸结束时的方法
        function onTouchEnd() {
            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("touchend", onTouchEnd);
        }

        // 应用 transform 属性以旋转元素
        function applyTransform(el) {
            el.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
        }
    },
};

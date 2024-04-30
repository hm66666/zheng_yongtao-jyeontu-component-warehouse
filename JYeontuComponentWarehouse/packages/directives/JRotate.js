export default {
    inserted(el, binding) {
        let startingMouseAngle = 0;
        let startingRotation = 0;

        el.addEventListener("selectstart", function (event) {
            event.preventDefault();
        });
        el.addEventListener("mousedown", function (event) {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            startingMouseAngle = getAngle(
                centerX,
                centerY,
                event.clientX,
                event.clientY
            );
            startingRotation = getCurrentRotation();

            window.addEventListener("mousemove", spin);
            window.addEventListener("mouseup", stopSpin);
            // 阻止元素的拖动事件
            el.style.pointerEvents = "none";
        });

        function stopSpin() {
            window.removeEventListener("mousemove", spin);
            window.removeEventListener("mouseup", stopSpin);
            // 恢复旋转区域的鼠标事件
            el.style.pointerEvents = "auto";
        }

        function spin(event) {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const currentMouseAngle = getAngle(
                centerX,
                centerY,
                event.clientX,
                event.clientY
            );
            const deltaMouseAngle = currentMouseAngle - startingMouseAngle;
            let newRotation = startingRotation + deltaMouseAngle;
            newRotation = normalizeRotation(newRotation);
            el.style.transform = `rotate(${newRotation}deg)`;
        }

        function normalizeRotation(rotation) {
            if (rotation >= 0) {
                return rotation % 360;
            } else {
                return (rotation % 360) + 360;
            }
        }

        function getAngle(centerX, centerY, mouseX, mouseY) {
            return (
                Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI)
            );
        }

        function getCurrentRotation() {
            const transformStyle = window
                .getComputedStyle(el)
                .getPropertyValue("transform");
            const matrix = new DOMMatrixReadOnly(transformStyle);
            const angle = Math.acos(matrix.a) * (180 / Math.PI);
            return matrix.b < 0 ? -angle : angle;
        }
    },
};

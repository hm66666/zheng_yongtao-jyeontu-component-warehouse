export default {
    inserted: function (el) {
        let startX,
            startY,
            currentX = 0,
            currentY = 0;
        el.style.position = "relative";
        el.parentNode.style.position = "relative";
        el.style.cursor = "pointer";
        el.addEventListener("mousedown", function (event) {
            event.preventDefault();
            startX = event.pageX - currentX;
            startY = event.pageY - currentY;
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
        el.addEventListener("touchstart", function (event) {
            event.preventDefault();
            startX = event.touches[0].clientX - currentX;
            startY = event.touches[0].clientY - currentY;
            document.addEventListener("touchmove", onTouchMove);
            document.addEventListener("touchend", onTouchEnd);
        });
        function onMouseUp() {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }
        function onTouchEnd() {
            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("touchend", onTouchEnd);
        }
        function onTouchMove(event) {
            event.preventDefault();
            currentX = event.touches[0].clientX - startX;
            currentY = event.touches[0].clientY - startY;
            drag(el);
        }
        function onMouseMove(event) {
            event.preventDefault();
            currentX = event.pageX - startX;
            currentY = event.pageY - startY;
            drag(el);
        }
        function drag(el) {
            el.style.top = currentY + "px";
            el.style.left = currentX + "px";
        }
    },
};

function addThousandSeparator(num, separator = ",") {
    // if (parseFloat(num) + "" !== num + "") return num;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
function deleteThousandSeparator(numberString, separator = ",") {
    return numberString.replace(new RegExp(separator, "g"), "");
}
export default {
    bind: function (el, binding) {
        const separator = binding.value || ",";
        if (el.innerHTML) {
            el.innerHTML = addThousandSeparator(el.innerText, separator);
        }
        el.addEventListener("focus", (event) => {
            const value = event.target.value;
            event.target.value = deleteThousandSeparator(value, separator);
        });
        el.addEventListener("blur", (event) => {
            const value = event.target.value;
            event.target.value = addThousandSeparator(value, separator);
        });
    },
};

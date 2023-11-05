export default function toggleNav () {
    const navElements = document.querySelectorAll('.sub_channel');

    navElements.forEach(navElement => {
        if(navElement.classList.contains("active")) {
            navElement.classList.remove("active");
        }
    })
}
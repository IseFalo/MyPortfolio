const skillsSection =document.getElementById('skills-section');
const progessBars = document.querySelectorAll('.progress-bar');


function showProgress() {
    progessBars.forEach(progessBar=> {
        const value = progessBar.dataset.progress;
        progessBar.style.opacity = 1;
        progessBar.style.width = `${value}%`;
    });
}

function hideProgress() {
    progessBars.forEach(p=> {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
window.addEventListener('scroll',() => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;
    if (sectionPos < screenPos) {
        showProgress();
    }else{
        hideProgress();
    }
})



const text = document.querySelector(".sec-text");
const textLoad = () =>{
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Physicist";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);
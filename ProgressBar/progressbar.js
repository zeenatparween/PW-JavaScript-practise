const skillssection = document.getElementById('skill-section');
const progressBars = document.getElementById('progress-bar');

function  showProgress(){
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`
    });
}
 function hideProgress(){
    progressBar.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    })
 }
window.addEventListener('scroll' , () => {
    const sectionPos = skillssection.getBoundingClientRect().top;
    const screenPos = window.innerHeight /2;
    if(sectionPos < screenPos){
        showProgress();
    } else{
        hideProgress();
    }
})
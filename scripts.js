function enterSite() {
    document.querySelector('.enter-box').classList.add('hidden');
    setTimeout(() => {
        document.querySelector('.enter-box').style.display = 'none';
        document.querySelector('.main-content').style.display = 'flex';
    }, 1000);
}

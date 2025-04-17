window.addEventListener('scroll', ()=> {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect =el.getBoundingClientRect();if (rect.top<window.innerHeight - 100)
    {el.classList.add('visible');}
    });
})
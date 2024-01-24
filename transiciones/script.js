

document.getElementById("btnTransicion").addEventListener('click' ,() => {
    

    document.getElementById('cajaAnimada').style.backgroundColor = '#e74c3c';

});

document.getElementById("btnAnimacion").addEventListener('click', () => {
    
    const cajaAnimada = document.getElementById('cajaAnimada');

    cajaAnimada.classList.toggle('animar');


    


});
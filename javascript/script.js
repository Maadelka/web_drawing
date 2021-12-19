var canvas = document.getElementById('canvas');
var bagian2 = document.getElementsByClassName('bagian2');
var ctx = canvas.getContext('2d');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var canvasW = canvas.width;
var canvasH = canvas.height;


// =============================================================== event menampilkan menu new project
var menuNewP = document.querySelector('.menu-new-project');

let newProject = document.querySelector('#new-project');
newProject.addEventListener('click', function(){
  // menuNewP.classList.add('tampil');
  menuNewP.style.display = 'flex';
});


// hasil input user

// user ngetik nama project

var namaInput = document.getElementById('namaHInput');
var widthI;
var heightI;

// ----------------------------------------------- confirm menampilkan canvas
var confirm = document.getElementById('create');

confirm.addEventListener('click', function(){
  var inpuNameU = document.getElementById('inputNameU').value;
  widthI = document.getElementById('angka1').value;
  heightI = document.getElementById('angka2').value;
  
  // var widthI = 700;
  // var heightI = 200;

  menuDelete.style.display = 'flex';
  
  menuNewP.style.display = 'none';
  canvas.style.transform = 'scale(1)';
  namaInput.innerHTML = inpuNameU;
  canvas.style.height = heightI + 'px';
  canvas.style.width = widthI + 'px';
});

// ---------------------------------------------------------------------- cancel menu new project
var batal = document.getElementById('cancel');
batal.addEventListener('click', function(){
  menuNewP.style.display = 'none';
});



// ===========================================================================ketika delete di click
var konfirmasiDelete = document.getElementById('menuKonfirmasiDelete');
var menuDelete = document.getElementById('menuDelete');
var lanjutkan = document.getElementById('lanjutkan');
var batalkan = document.getElementById('batalkan');

menuDelete.addEventListener('click', function(){
  konfirmasiDelete.style.display = 'flex';
})

// ========== lanjutkan
lanjutkan.addEventListener('click', function(){
  canvas.style.display = 'none';
  konfirmasiDelete.style.display = 'none';
  menuDelete.style.display = 'none';
  namaInput.innerHTML = '';
})
// ================= batalkan
batalkan.addEventListener('click',function(){
  konfirmasiDelete.style.display = 'none';
})




// ============================================================================== ketika icon pencil di click
var warna;
var r;
var w;
var h;
// --------------------------------------------- mousedown
window.addEventListener ('mousedown', function() {
  w = nilaiPensil;
  h = nilaiPensil;
  r = 5;
});

// ---------------------------------------------- mouseup
window.addEventListener ('mouseup', function() {
  w = false;
  h = false;
  r = false;
});

let saf = document.querySelector('#bagian3');

let bagian1 = document.querySelector('#bagian1');
let imgp = document.querySelector('#imgp');
let menuPencil = document.getElementById('menuPencil');

const saatuu = document.getElementById('pencil');
pencil.addEventListener('click', function(e){

  imgp.style.backgroundColor = 'rgb(149, 172, 172)';
  imgE.style.backgroundColor = 'rgb(85, 92, 92)';

  ctx.canvas.addEventListener('mousemove', function(event){

    // var mouseX = event.clientX - ctx.canvas.offsetLeft - ctx.canvas.offsetLeft - 20;
    // var mouseY = event.clientY - ctx.canvas.offsetTop - ctx.canvas.offsetTop;

    var mouseX = event.clientX - 108;
    var mouseY = event.clientY - 100;
  
    ctx.beginPath();
    ctx.fillStyle = warna;
    ctx.fillRect(mouseX,mouseY, w, h);
    ctx.closePath();
    
    // ctx.beginPath();
    // ctx.arc(mouseX,mouseY, r, 0, 2*Math.PI);
    // ctx.stroke();
  });

});



// ============================================================================== ketika icon eraser di click
var wi;

let imgE = document.querySelector('#imgE');

const eraser = document.getElementById('eraser');
eraser.addEventListener('click', function(e){

  imgE.style.backgroundColor = 'rgb(149, 172, 172)';
  imgp.style.backgroundColor = 'rgb(85, 92, 92)';

  ctx.canvas.addEventListener('mousemove', function(event){

    var mouseX = event.clientX - ctx.canvas.offsetLeft - ctx.canvas.offsetLeft - 20;
    var mouseY = event.clientY - ctx.canvas.offsetTop - ctx.canvas.offsetTop;
  
    // ======================================================== eraser
    if(wi == 20){
      ctx.beginPath();
      ctx.clearRect(mouseX,mouseY,25,25);
      ctx.closePath(); 
    }
  });
});

// ===============================================================================keydown&up for eraser
window.addEventListener('keydown', function(e){
  if(e.key == 'd'){
    wi = 20;
  }else if(e.key == ';'){
    ctx.beginPath();
    ctx.fillRect(100,100, 100, 100);
    ctx.fillStyle = warna;
    ctx.closePath();
  }
})
window.addEventListener('keyup', function(e){
  if(e.key == 'd'){
    wi = 0;
  }
})





// ====================================================================== menu style pencil
let pilihan =document.getElementById('pilihan');
let stylePencil = document.getElementById('stylePencil');

stylePencil.addEventListener('click', function(){
  // stylePencil.style.backgroundColor = 'blue';
  pilihan.classList.toggle("tampil");
});



// ================================================================================ ubah ukura pensil
var nilaiPensil;
var ukuranPensil = document.getElementById('ukuranPensil');

ukuranPensil.addEventListener('click', function(){
  nilaiPensil = document.getElementById('nilaiPensil').value;
  
  w = nilaiPensil;
  h = nilaiPensil;
})
const openMenu=()=>{
    document.querySelector('.backdrop').className='backdrop active';
    document.querySelector('aside').className='active';
}
const closeMenu=()=>{
    document.querySelector('.backdrop').className='backdrop';
    document.querySelector('aside').className='';
}
document.getElementById('menuBtn').oneclick = e => {
    e.preventDefault();
}
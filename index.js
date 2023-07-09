const changeVolume= () => {
    var volume = document.getElementById('volume').value;
    if (volume == 0) {
        let a = document.getElementsByClassName('fa-volume-high')[0];
        if (a.classList.contains('fa-volume-high')) {  //contain direct serach krta hai nhi mila to undefined error deta hai jaise contains is not a function
            a.classList.replace('fa-volume-high', 'fa-volume-xmark');
        }
    } else {
        let a = document.getElementById('changeVolumeImg');
        let className = a.className;
        // console.log(className); agr className xmark hai to mtlb mojud hai fir serach krega to true milega  or xmark nhi h to aage jayega hi nhi
        if (className.includes('fa-volume-xmark'))  //includes basically search krta hai ki o chij mojud hai ki nhi agr hai to true or else false
            a.classList.replace('fa-volume-xmark', 'fa-volume-high');
        
    }
}    


const volumeIcon = () => {
    let volumeInput = document.getElementById('volume');
    let val = parseInt(volumeInput.value);
    
    if (val === 0) {
      volumeInput.value = 100;
      let a = document.getElementsByClassName('fa-volume-xmark')[0];
      a.classList.replace('fa-volume-xmark', 'fa-volume-high');
    } else {
      volumeInput.value = 0;
      let a = document.getElementsByClassName('fa-volume-high')[0];
      a.classList.replace('fa-volume-high', 'fa-volume-xmark');
    }
  };

  const changeHeartIcon = () => {
    let hearts = document.getElementsByClassName('fa-heart');
    for (let i = 0; i < hearts.length; i++) {
      let heart = hearts[i];
  
      if (heart.classList.contains('fa-regular')) {
        heart.classList.replace('fa-regular', 'fa-solid');
      } else {
        heart.classList.replace('fa-solid', 'fa-regular');
      }
    }
  };
  

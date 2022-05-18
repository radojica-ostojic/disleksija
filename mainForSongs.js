var accItem = document.getElementsByClassName('content');
    var accHD = document.getElementsByClassName('content-and-arrow');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'content close';
        }
        if (itemClass == 'content close') {
            this.parentNode.className = 'content open';
        }
    }

 


const azdajaSvomCeduTepaAudio = new Audio('audio/azdaja-svome-cedu-tepa.mp3');
document.getElementById('azdajaSvomCeduTepa').addEventListener('click',function(e){
    azdajaSvomCeduTepaAudio.play()
    textChangeAzdajaSvomeCeduTepa();
    domovinaSeBraniAudio.pause()
    domovinaSeBraniAudio.currentTime = 0

})

const domovinaSeBraniAudio = new Audio('audio/domovina-se-brani.mp3');
document.getElementById('domovinaSeBrani').addEventListener('click',function(e){
    domovinaSeBraniAudio.play()
    textChangeDomovinaSeBrani()
    azdajaSvomCeduTepaAudio.pause()
    azdajaSvomCeduTepaAudio.currentTime = 0

})

var id = [];
var id2 = [];
function textChangeDomovinaSeBrani(){
    for (let index = 1; index < 17; index++) {
        
        switch (index) {
            case 1:
                id[0] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 6000);
                id[1] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 8320);
                break;

            case 2:
                id[2] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 8320);
                id[3] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 10000);
                break;

            case 3:
                id[4] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 10000);
                id[5] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 12830);
                break;

            case 4:
                id[6] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 12830);
                id[7] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 15120);
                break;

            case 5:
                id[8] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 15120);
                id[9] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 18490);
                break;

            case 6:
                id[10] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 18490);
                id[11] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 20760);
                break;
            
            case 7:
                id[12] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 20760);
                id[13] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 23230);
                break;
                
            case 8:
                id[14] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 23230);
                id[15] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 25680);
                break;

            case 9:
                id[16] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 25680);
                id[17] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 29000);
                break;
            
            case 10:
                id[18] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 29000);
                id[19] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 31170);
                break;
            
            case 11:
                id[20] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 31170);
                id[21] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 35200);
                break;
    
            case 12:
                id[22] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 35200);
                id[23] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 37700);
                break;
                
            case 13:
                id[24] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 37700);
                id[25] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 41000);
                break;
                    
            case 14:
                id[26] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 41000);
                id[27] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 43550);
                break;
    
            case 15:
                id[28] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 43550);
                id[29] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 46490);
                break;
                
            case 16:
                id[30] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "blue";
                }, 46490);
                id[31] = setTimeout(() => {
                    document.getElementById("pesma1-" + index).style.backgroundColor = "transparent";
                }, 49150);
                break;
            default:
                break;
        }
    } 

}

function textChangeAzdajaSvomeCeduTepa(){
    for (let index = 1; index < 17; index++) {
        
        switch (index) {
            case 1:
                id2[0] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 6100);    
                id2[1] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 9060);
                break;

            case 2:
                id2[2] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 9060);
                id2[3] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 12100);
                break;

            case 3:
                id2[4] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 12100);
                id2[5] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 15020);
                break;

            case 4:
                id2[6] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 15020);
                id2[7] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 17300);
                break;

            case 5:
                id2[8] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 17300);
                id2[9] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 20670);
                break;

            case 6:
                id2[10] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 20670);
                id2[11] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 23780);
                break;
            
            case 7:
                id2[12] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 23780);
                id2[13] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 27000);
                break;
                
            case 8:
                id2[14] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 27000);
                id2[15] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 30000);
                break;

            case 9:
                id2[16] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 30000);
                id2[17] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 33160);
                break;
            
            case 10:
                id2[18] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 33160);
                id2[19] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 36360);
                break;
            
            case 11:
                id2[20] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 36360);
                id2[21] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 39320);
                break;
    
            case 12:
                id2[22] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "blue";
                }, 39320);
                id2[23] = setTimeout(() => {
                    document.getElementById("pesma2-" + index).style.backgroundColor = "transparent";
                }, 42470);
                break;
                
            default:
                break;
        }
    }
}

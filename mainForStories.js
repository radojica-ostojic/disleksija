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

    const kornjacaIZecAudio = new Audio('audio/kornjaca-i-zec.mp3');
    document.getElementById('kornjacaIZec').addEventListener('click',function(e){
        kornjacaIZecAudio.play()
        textChangeKornjacaIZec()
        cvrcakIMravAudio.pause()
        cvrcakIMravAudio.currentTime = 0
        // stopCvrcakIMrav()
    })
    
    
    const cvrcakIMravAudio = new Audio('audio/cvrcak-i-mravi.mp3');
    document.getElementById('cvrcakIMrav').addEventListener('click',function(e){
        cvrcakIMravAudio.play()
        textChangeCvrcakIMrav()
        kornjacaIZecAudio.pause()
        kornjacaIZecAudio.currentTime = 0
        stopKornjacaIZec()
    })

    var id = [];
    var id2 = [];
    var styleIndex;
    function textChangeKornjacaIZec(){
        for (let index = 1; index < 11; index++) {
            styleIndex = "prica1-" + index;
            console.log(styleIndex);
            switch (index) {
                case 1:
                    id[0] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 3420); 
                    id[1] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 8190);
                    break;

                case 2:
                    id[2] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 8190);
                    id[3] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 12000);
                    break;

                case 3:
                    id[4] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 12000);
                    id[5] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 13900);
                    break;

                case 4:
                    id[6] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 13900);
                    id[7] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 16650);
                    break;

                case 5:
                    id[8] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 16650);
                    id[9] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 20020);
                    break;

                case 6:
                    id[10] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 20020);
                    id[11] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 23770);
                    break;
                
                case 7:
                    id[12] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 23770);
                    id[13] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 25520);
                    break;
                    
                case 8:
                    id[14] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 25520);
                    id[15] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 28000);
                    break;

                case 9:
                    id[16] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 28000);
                    id[17] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 30430);
                    break;
                
                case 10:
                    id[18] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "blue";
                    }, 30430);
                    id[19] = setTimeout(() => {
                        document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
                    }, 37080);
                    break;
                default:
                    break;
            }
        } 
    }

    function stopKornjacaIZec(){
        id.forEach(element => {
            console.log(element);
            clearTimeout(id[element]); 
        });
        for (let index = 1; index < 11; index++) {
            document.getElementById("prica1-" + index).style.backgroundColor = "transparent";
        }
        

    }

function textChangeCvrcakIMrav(){
    for (let index = 1; index < 10; index++) {
        var styleIndex = "prica2-" + index;
        console.log(styleIndex);
        switch (index) {
            case 1:
                id2[0] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 4200); 
                id2[1] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 9040);
                break;

            case 2:
                id2[2] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 9040);
                id2[3] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 11040);
                break;
            case 3:
                id2[4] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 11040);
                id2[5] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 15030);
                break;
            
            case 4:
                id2[6] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 15030);
                id2[7] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 17300);
                break;
                //
            case 5:
                id2[8] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 17300);
                id2[9] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 20250);
                break;
            case 6:
                id2[10] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 20250);
                id2[11] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 22320);
                break;
            
            case 7:
                id2[12] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 22320);
                id2[13] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 25000);
                break;
                
            case 8:
                id2[14] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 25000);
                id2[15] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 28200);
                break;
            case 9:
                id2[16] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "blue";
                }, 28200);
                id2[17] = setTimeout(() => {
                    document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
                }, 33200);
                break;
            
            default:
                break;
        }
    } 
}

function stopCvrcakIMrav(){
    id2.forEach(element => {
        console.log(element);
        clearTimeout(id[element]);
    });
    for (let index = 1; index < 10; index++) {
        document.getElementById("prica2-" + index).style.backgroundColor = "transparent";
    }
}

// TYPING EFFECT

const title = document.querySelector('h1');

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, i * 300);
    });
}



typeWriter(title);




// ANIMATION ALVO


const menuItems = document.querySelectorAll('a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget) - 0;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 500;

  
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 100 / 60 fps
};











    const textarea = document.querySelector("textarea")


        let Senha = false;
        let elliotText = "@Elliot:~$ ";
        textarea.value = elliotText

        let senha_sudo = "Flipper";

        let senha_sudo2 = "flipper"

        

        textarea.addEventListener("keydown", function (event) {
          let lines = textarea.value.split("\n");
          let currentLine = lines[lines.length - 1]

          
          if(Senha){
            elliotText = "root@MrRobot:/Home# "
          }
        
          if (!Senha && (event.key === "Backspace" && currentLine.length === 11)) {
            event.preventDefault();
            textarea.value += "\n" + "@Elliot:~$ ";

          }


          
          if(event.key === "Backspace" && currentLine === "[sudo] senha para Elliot: "){
              
            event.preventDefault();
            textarea.value += "\n[sudo] senha para Elliot: ";

            return
          }

          if(Senha && (event.key === "Backspace" && currentLine.length === 20)){
            event.preventDefault();
            textarea.value += "\n" + elliotText;
          }





        if (event.key === "Enter") {
            event.preventDefault(); //impede a ação padrão do elemento nesse caso previne a pulagem de linha

            let lines = textarea.value.split("\n"); //FAZ COM QUE VIRE UM ARRAY O VALUE SEPARANDO ENTÃO O ELLIOT POR \N

            let currentLine = lines[lines.length - 1].trim(); //Elimina espaços em branco desnecessários(evitar bugs)

             // Adiciona nova linha e o caractere "@Elliot:~$ "

             textarea.value += "\n" + elliotText;

          
            if (currentLine === elliotText + "clear") {
              
                textarea.value = elliotText;
                return;
            }

            if (currentLine === elliotText + "clr") {
                textarea.value = elliotText;
                return;
            }



            if (currentLine ===  elliotText + "ls") {
                event.preventDefault(); //impede a ação padrão do elemento nesse caso previne a pulagem de linha

                let resposta = "\n" + "Fsociety.exe MrRobot.exe" + "\n" + elliotText; // Remova o "@Elliot:~$ " da resposta
                    
                    const lastLineIndex = lines.length - 1;
                    lines[lastLineIndex] += ' ' + resposta;

                // Atualiza o valor do textarea com as linhas modificadas
                textarea.value = lines.join('\n');
                return;
            }

            if(currentLine === elliotText + "cat Fsociety.exe"){
              
              let resposta = "Bem vindo para a Fsociety, aqui você deixa de se tornar mais um comum na sociedade onde vai abrir sua mente para eventos além da sua compreenção." + "\n" + elliotText
              
              textarea.value += resposta
          
              return;
            }

            if(currentLine === elliotText + "chown"){

              let resposta = "\n" + "Você não tem permissão para executar esse comando" + "\n" + elliotText

              const lastLineIndex = lines.length - 1;
              lines[lastLineIndex] += ' ' + resposta;

                
              textarea.value = lines.join('\n');

              return

            }

            if(currentLine === elliotText + "cat MrRobot.exe"){

              let resposta = "A série MrRobot se trata de um hacker chamado Elliot onde tem problemas mentais entre outros e com isso tem q invadir a Fsociety com outro grupo de hackers destemidos...ou será que não?" + "\n" + elliotText
              
              textarea.value += resposta

              return
            }

            if(currentLine === elliotText + "o melhor"){
              
              let resposta = "Jet PHP" + "\n" + elliotText

              textarea.value += resposta

              return
            }

            if (Senha && (currentLine === elliotText + "nano Fsociety.exe" || currentLine === elliotText + "nano MrRobot.exe")) {
              let resposta = "\n" + "Bem-vindo ao acesso novamente Elliot" + "\n" + elliotText;
              const lastLineIndex = lines.length - 1;
                    lines[lastLineIndex] += ' ' + resposta;

                textarea.value = lines.join('\n');
              return;
          } 
          
          else if (!Senha && (currentLine === elliotText + "nano Fsociety.exe" || currentLine === elliotText + "nano MrRobot.exe")) {
              let resposta = "\n" + "Você não possui acesso a esse arquivo. Seu nível atual é: Gideon Goddard" + "\n" + "Digite a senha para obter acesso." + "\n" + elliotText;
              const lastLineIndex = lines.length - 1;
              lines[lastLineIndex] += ' ' + resposta;

                textarea.value = lines.join('\n');
              return;
          }

          if(!Senha){

          if(currentLine === elliotText + "sudo su"){
            let resposta = "\n" + "[sudo] senha para Elliot: " 

            const lastLineIndex = lines.length - 1;
              lines[lastLineIndex] += ' ' + resposta;

              textarea.value = lines.join('\n');

          }
        }

            if (currentLine === "[sudo] senha para Elliot: " + senha_sudo || currentLine === "[sudo] senha para Elliot: " + senha_sudo2) {

              let resposta = "\n" + "Parabens nível de acesso subiu para Elliot" + "\n" + "root@MrRobot:/Home# ";
              
              const lastLineIndex = lines.length - 1;
              lines[lastLineIndex] += ' ' + resposta;


              textarea.value = lines.join('\n');
      
              Senha = true;
      
              return;
          }

          if(Senha){
            if(currentLine === elliotText + "sudo su"){
              
            let resposta = "\n" + "Já está como root" + "\n" + elliotText;

            const lastLineIndex = lines.length - 1;
            lines[lastLineIndex] += ' ' + resposta;


            textarea.value = lines.join('\n');

            return
            }
          }

          if(currentLine === "[sudo] senha para Elliot: " + !"Shayla" || currentLine === "[sudo] senha para Elliot: " + !"shayla"){

            let resposta = "\n" + "Acesso negado, senha incorreta" + "\n" + elliotText;

            const lastLineIndex = lines.length - 1;
            lines[lastLineIndex] += ' ' + resposta;


            textarea.value = lines.join('\n');

            return

          }

           
          }
         
    });
    



// CARDS


// const Cards = document.querySelectorAll('.card');

// Cards.forEach(card => {
//     card.addEventListener('click', () => {
//         card.style.transform = "translateY(50px)";
//     });
// });


// const Cards = document.querySelectorAll('.card');

// Cards.forEach(card => {
//     card.addEventListener('click', () => {
//         // Adiciona a classe para aplicar a transformação
//         card.style.transform = "translateY(50px)";

//         // Configura um temporizador para remover a classe após 3 segundos
//         setTimeout(() => {
//             card.style.transform = "translateY(0)"; // Volta ao normal
//         }, 3000);
//     });
// });




const Cards = document.querySelectorAll('.card');

Cards.forEach(card => {
    card.addEventListener('click', () => {

      const click = card.classList.contains('clicked');

        if (click) {
            card.classList.remove('clicked');
        } else {
            card.classList.add('clicked');
        }
    });
});

        const rock = document.querySelector('img[alt="rock"]');
        const paper = document.querySelector('img[alt="paper"]');
        const scissors = document.querySelector('img[alt="scissors"]');
        const user = document.querySelector('.winner p:nth-of-type(1)');
        const computer = document.querySelector('.winner p:nth-of-type(2)');
        const winner = document.querySelector('.winner p:nth-of-type(3)');
        const playAgain = document.querySelector('.winner button');

        rock.addEventListener('click', () => {
            document.querySelector('.winner').style.display = 'block';
            document.querySelector('.in-game').style.display = 'none';
            document.querySelector('#img-container').style.display = 'none';
            user.textContent = 'User - Rock';
            const computerChoice = Math.floor(Math.random() * 3);
            if (computerChoice === 0) {
                computer.textContent = 'Computer - Rock';
                winner.textContent = 'Winner - Tie';
            } else if (computerChoice === 1) {
                computer.textContent = 'Computer - Paper';
                winner.textContent = 'Winner - Computer';
            } else {
                computer.textContent = 'Computer - Scissors';
                winner.textContent = 'Winner - User';
            }
        });

        paper.addEventListener('click', () => {
            document.querySelector('.winner').style.display = 'block';
            document.querySelector('.in-game').style.display = 'none';
            document.querySelector('#img-container').style.display = 'none';
            user.textContent = 'User - Paper';
            const computerChoice = Math.floor(Math.random() * 3);
            if (computerChoice === 0) {
                computer.textContent = 'Computer - Rock';
                winner.textContent = 'Winner - User';
            } else if (computerChoice === 1) {
                computer.textContent = 'Computer - Paper';
                winner.textContent = 'Winner - Tie';
            } else {
                computer.textContent = 'Computer - Scissors';
                winner.textContent = 'Winner - Computer';
            }
        });

        scissors.addEventListener('click', () => {
            document.querySelector('.winner').style.display = 'block';
            document.querySelector('.in-game').style.display = 'none';
            document.querySelector('#img-container').style.display = 'none';
            user.textContent = 'User - Scissors';
            const computerChoice = Math.floor(Math.random() * 3);
            if (computerChoice === 0) {
                computer.textContent = 'Computer - Rock';
                winner.textContent = 'Winner - Computer';
            } else if (computerChoice === 1) {
                computer.textContent = 'Computer - Paper';
                winner.textContent = 'Winner - User';
            } else {
                computer.textContent = 'Computer - Scissors';
                winner.textContent = 'Winner - Tie';
            }
        });

       document.addEventListener("keypress", () => {
            if (event.key === 'r') {
                rock.click();
            } else if (event.key === 'p') {
                paper.click();
            } else if (event.key === 's') {
                scissors.click();
            }
        }); 

        playAgain.addEventListener('click', () => {
            document.querySelector('.winner').style.display = 'none';
            document.querySelector('.in-game').style.display = 'block';
            document.querySelector('#img-container').style.display = 'block';
        });
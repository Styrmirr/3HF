document.addEventListener('DOMContentLoaded', () => {
    const totalScoreElement = document.getElementById('totalScore');
    const buttonContainer = document.getElementById('buttonContainer');
    let totalScore = 0;

    const updateTotalScore = () => {
        totalScoreElement.textContent = `Total Score: ${totalScore.toFixed(2)}`;
        if (totalScore < 45) {
            totalScoreElement.classList.add('red');
            totalScoreElement.classList.remove('green-text');
        } else {
            totalScoreElement.classList.add('green-text');
            totalScoreElement.classList.remove('red');
        }
    };

    const createButton = (text, clickHandler) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    };

    for (let i = 1; i <= 7; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        for (let j = 1; j <= 5; j++) {
            const button = createButton(`Verkefni ${i}.${j}`, (e) => {
                e.target.classList.add('blue');
            });
            row.appendChild(button);
        }

        const valverkefniButton = createButton(`Valverkefni ${i}.1`, (e) => {
            const grade = prompt("Hvað fékkstu í einkunn?");
            if (grade) {
                e.target.classList.add('yellow');
                totalScore += parseFloat(grade.replace(',', '.')) * 0.1;
                updateTotalScore();
            }
        });
        row.appendChild(valverkefniButton);

        const faerniprofButton = createButton(`Færnipróf ${i}`, (e) => {
            const grade = prompt("Hvað fékkstu í einkunn?");
            if (grade) {
                e.target.classList.add('green');
                totalScore += parseFloat(grade.replace(',', '.'));
                updateTotalScore();
            }
        });
        row.appendChild(faerniprofButton);

        buttonContainer.appendChild(row);
    }
});

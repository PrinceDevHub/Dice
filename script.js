  const diceEl = document.getElementById('dice');
        const rollBtn = document.getElementById('roll-button');
        const historyEl = document.getElementById('roll-history');

        const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        let rollCount = 0;

        rollBtn.addEventListener('click', () => {
            const roll = Math.floor(Math.random() * 6);
            const face = diceFaces[roll];
            rollCount++;

            diceEl.textContent = face;

            const li = document.createElement('li');
            li.innerHTML = `Roll ${rollCount}: <span>${face}</span>`;
            historyEl.prepend(li); 
        });
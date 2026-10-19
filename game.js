const cards = document.querySelectorAll('.card');
const zones = document.querySelectorAll('.drop-zone');
const msgBox = document.getElementById('messageBox');

cards.forEach(card => {card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', card.id);});
    });

zones.forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('over');});

    zone.addEventListener('dragleave', () => zone.classList.remove('over'));

    zone.addEventListener('drop', e => {e.preventDefault();zone.classList.remove('over');

        const cardId = e.dataTransfer.getData('text');
        const draggedCard = document.getElementById(cardId);

        // если там уже кто-то есть — они встанут рядом ( flex + gap)
        zone.appendChild(draggedCard);

    // показывает сообщение, если у поля есть data-msg
        if (zone.dataset.msg) {
            msgBox.textContent = zone.dataset.msg;
        } else {
            msgBox.textContent = '';
        }

    });
});
document.getElementById('dice').onclick = function() {
    this.textContent = Math.floor(Math.random() *6) + 1;
};
document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.city-card'));
    if (!cards.length) {
        return;
    }

    const pins = Array.from(document.querySelectorAll('.city-pin'));
    const selectedList = document.querySelector('#selected-cities');
    const selectedEmpty = document.querySelector('#selected-empty');
    const clearButton = document.querySelector('#clear-selection');
    const searchInput = document.querySelector('#city-search');
    const languageSelect = document.querySelector('#lang-select');
    const previewTitle = document.querySelector('#preview-title');
    const previewDesc = document.querySelector('#preview-desc');
    const previewImage = document.querySelector('.preview-image');

    let lockedCity = null;


    const updateCardState = (card) => {
        const checkbox = card.querySelector('.city-check');
        card.classList.toggle('selected', checkbox.checked);
    };

    const renderSelected = () => {
        if (!selectedList || !selectedEmpty) {
            return;
        }
        selectedList.innerHTML = '';
        const selectedCards = cards.filter((card) => card.querySelector('.city-check')?.checked);

        if (!selectedCards.length) {
            selectedEmpty.style.display = 'inline';
            return;
        }

        selectedEmpty.style.display = 'none';
        selectedCards.forEach((card) => {
            const name = card.querySelector('.city-name')?.textContent?.trim();
            if (!name) {
                return;
            }
            const chip = document.createElement('span');
            chip.className = 'city-chip';
            chip.textContent = name;
            selectedList.appendChild(chip);
        });
    };

    const updatePreview = (city) => {
        if (!previewTitle || !previewDesc || !previewImage) {
            return;
        }
        if (!city) {
            const titleKey = previewTitle.dataset.i18n;
            const descKey = previewDesc.dataset.i18n;
            if (typeof window.translate === 'function') {
                if (titleKey) {
                    previewTitle.textContent = window.translate(titleKey);
                }
                if (descKey) {
                    previewDesc.textContent = window.translate(descKey);
                }
            }
            previewImage.style.backgroundImage = '';
            previewImage.classList.remove('has-image');
            return;
        }
        const card = document.querySelector(`.city-card[data-city="${city}"]`);
        if (!card) {
            return;
        }
        const name = card.querySelector('.city-name')?.textContent?.trim() || '';
        const descKey = card.dataset.preview || '';
        const desc = descKey ? (typeof window.translate === 'function' ? window.translate(descKey) : descKey) : '';
        const imageUrl = card.dataset.image || '';

        previewTitle.textContent = name || previewTitle.textContent;
        previewDesc.textContent = desc || previewDesc.textContent;
        if (imageUrl) {
            previewImage.style.backgroundImage = `url('${imageUrl}')`;
            previewImage.classList.add('has-image');
        } else {
            previewImage.style.backgroundImage = '';
            previewImage.classList.remove('has-image');
        }
    };

    const previewFromPin = (pin) => {
        if (!pin) {
            return;
        }
        const city = pin.dataset.city;
        updatePreview(city);
    };

    const applyFilter = () => {
        if (!searchInput) {
            return;
        }
        const query = searchInput.value.trim().toLowerCase();
        cards.forEach((card) => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
        });
    };

    cards.forEach((card) => {
        const checkbox = card.querySelector('.city-check');
        if (!checkbox) {
            return;
        }
        updateCardState(card);
        checkbox.addEventListener('change', () => {
            updateCardState(card);
            renderSelected();
        });
    });

    if (clearButton) {
        clearButton.addEventListener('click', () => {
            cards.forEach((card) => {
                const checkbox = card.querySelector('.city-check');
                if (checkbox) {
                    checkbox.checked = false;
                    updateCardState(card);
                }
            });
            renderSelected();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilter);
    }

    pins.forEach((pin) => {
        pin.addEventListener('mouseenter', () => previewFromPin(pin));
        pin.addEventListener('focus', () => previewFromPin(pin));
        pin.addEventListener('mouseleave', () => updatePreview(lockedCity));
        pin.addEventListener('blur', () => updatePreview(lockedCity));
        pin.addEventListener('click', () => {
            lockedCity = pin.dataset.city;
            updatePreview(lockedCity);
        });
    });

    if (languageSelect) {
        languageSelect.addEventListener('change', () => {
            renderSelected();
            applyFilter();
            updatePreview(lockedCity);
        });
    }

    renderSelected();
    updatePreview(null);
});

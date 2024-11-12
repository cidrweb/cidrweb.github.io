function openModal() {
    const backdrop = document.getElementById('modalBackdrop');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const backdrop = document.getElementById('modalBackdrop');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
}

function closeModalOnBackdrop(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

// Close modal on escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
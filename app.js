// app.ts
var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.querySelector('.skills');
toggleSkillsButton.addEventListener('click', function () {
    var isHidden = skillsSection.classList.contains('hidden');
    if (isHidden) {
        skillsSection.classList.remove('hidden');
        toggleSkillsButton.textContent = 'Hide Skills';
        toggleSkillsButton.setAttribute('aria-expanded', 'true');
    }
    else {
        skillsSection.classList.add('hidden');
        toggleSkillsButton.textContent = 'Show Skills';
        toggleSkillsButton.setAttribute('aria-expanded', 'false');
    }
});

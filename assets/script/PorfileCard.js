const profileCardData = [
    {
        name: "Maria Lincoln",
        position: "Projekt Manager / Technischer Leiter",
        img: "./assets/images/profile/maria.png",
        location: "Germany",
        time: "25 / Hour",
        jobCompleted: "60%-70%",
        hourlyRate: "35/hour",
        skillsSet: "Fall Management, Agile Methodik, Jira / Confluence, Unternehmensmar, kenidentität, Unternehmensmark, Talkative, Management, Unternehmensmark,"
    },
    {
        name: "David Oboy",
        position: "Leitender Videoeditor / Technischer Leiter",
        img: "./assets/images/profile/david.png",
        location: "Berlin, Germany",
        time: "25 / Hour",
        jobCompleted: "60%-70%",
        hourlyRate: "45/hour",
        skillsSet: "Fall Management, Agile Methodik, Jira / Confluence, Unternehmensmar, kenidentität, Unternehmensmark, Talkative, Management, Unternehmensmark,"
    },
    {
        name: "Zhao (赵)",
        position: "Leitender Videoeditor / Technischer Leiter",
        img: "./assets/images/profile/zhao.png",
        location: "Dubai, UAE",
        time: "25 / Hour",
        jobCompleted: "60%-70%",
        hourlyRate: "30/hour",
        skillsSet: "Fall Management, Agile Methodik, Jira / Confluence, Unternehmensmar, kenidentität, Unternehmensmark, Talkative, Management, Unternehmensmark,"
    },
    {
        name: "Steve Bakers",
        position: "Leitender Videoeditor / Technischer Leiter",
        img: "./assets/images/profile/steve.png",
        location: "San Francisco, USA",
        time: "25 / Hour",
        jobCompleted: "60%-70%",
        hourlyRate: "26/hour",
        skillsSet: "Fall Management, Agile Methodik, Jira / Confluence, Unternehmensmar, kenidentität, Unternehmensmark, Talkative, Management, Unternehmensmark,"
    },
    {
        name: "Mary Jane",
        position: "Projekt Manager / Technischer Leiter",
        img: "./assets/images/profile/mary.png",
        location: "Munich, Germany",
        time: "25 / Hour",
        jobCompleted: "60%-70%",
        hourlyRate: "38/hour",
        skillsSet: "Fall Management, Agile Methodik, Jira / Confluence, Unternehmensmar, kenidentität, Unternehmensmark, Talkative, Management, Unternehmensmark,"
    },

];

document.addEventListener('DOMContentLoaded', () => {
    const ProfileCardBox = document.querySelector(".profile-card-flex");

    profileCardData.forEach(profileData => {

        const skillsSetArray = profileData.skillsSet.split(',').map(skill => skill.trim()); // Convert skills set string to array

        const skillsHTML = skillsSetArray.map(skill => `<span class="skill btn-pill">${skill}</span>`).join(''); // Generate HTML for skills

        const encodedName = encodeURIComponent(profileData.name.replace(/\s+/g, '-'));

        const profileCardHtml = `
                <div class="profile-card">
                    <a href="profile-detail.html?name=${encodedName}">
                        <div class="d-lg-flex justify-content-between align-items-start column-gap-4">
                            <div>
                                <img src=${profileData.img} alt="Maria" class="profile-pic">
                            </div>
                            <div class="w-100 pt-lg-0 pt-4">
                                <div class="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h1>${profileData.name}</h1>
                                        <p class="position">${profileData.position}</p>
                                    </div>
                                    <div class="d-md-block d-none">
                                        <button class="btn-pill job-btn">Profil anzeigen</button>
                                    </div>
                                </div>
                                <div class="sub-details pt-3 d-flex flex-sm-row flex-column align-items-start justify-content-start column-gap-4 row-gap-3">
                                    <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                                        <iconify-icon icon="iconoir:map-pin"></iconify-icon>
                                        <span>${profileData.location}</span>
                                    </div>
                                    <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                                        <iconify-icon icon="mdi:clock-outline"></iconify-icon>
                                        <span>${profileData.time}</span>
                                    </div>
                                    <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                                        <iconify-icon icon="material-symbols:work-outline"></iconify-icon>
                                        <span>${profileData.jobCompleted}</span>
                                    </div>
                                </div>
                                <div class="skills d-flex pt-4 justify-content-start align-items-center column-gap-2">
                                    ${skillsHTML} <!-- Insert generated skills HTML here -->
                                    <span class="show-more btn-pill">+0</span>
                                </div>
                                <div class="d-md-none d-block pt-4 w-100">
                                    <button class="btn-pill job-btn">Profil anzeigen</button>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        ProfileCardBox.innerHTML += profileCardHtml;
    });

    const skillsContainers = document.querySelectorAll('.skills');

    skillsContainers.forEach(container => {
        const skills = container.querySelectorAll('.skill');
        const showMoreButton = container.querySelector('.show-more');

        function hideSkillsBasedOnScreenSize() {
            const screenWidth = window.innerWidth;
            let skillsToHide = 4; // Default number of skills to hide

            if (screenWidth <= 998 && screenWidth > 640) {
                skillsToHide = 3;
            } else if (screenWidth <= 640 && screenWidth > 500) {
                skillsToHide = 2;
            } else if (screenWidth <= 500) {
                skillsToHide = 1;
            }

            for (let i = skillsToHide; i < skills.length; i++) {
                skills[i].classList.add('hidden');
            }

            const hiddenSkillsCount = Math.max(0, skills.length - skillsToHide);
            showMoreButton.textContent = `+${hiddenSkillsCount}`;
        }

        // Call the function initially for this container
        hideSkillsBasedOnScreenSize();

        // Listen for resize events for this container
        window.addEventListener('resize', hideSkillsBasedOnScreenSize);

        container.addEventListener('click', function (event) {
            if (event.target && event.target.classList.contains('show-more')) {
                skills.forEach(function (skill, index) {
                    if (index >= 4) {
                        skill.classList.remove('hidden');
                    }
                });

                const updatedHiddenSkillsCount = Math.max(0, skills.length - 4);
                showMoreButton.textContent = updatedHiddenSkillsCount > 0 ? `+${updatedHiddenSkillsCount}` : '';
            }
        });
    });
});

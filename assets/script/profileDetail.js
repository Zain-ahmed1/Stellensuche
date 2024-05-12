document.addEventListener('DOMContentLoaded', () => {
    const JobDetailSection = document.getElementById("profile-detail-section");

    // Function to generate job detail HTML
    function generateprofileCardHtml(profileData) {
        return `
        <div class="profile-hero d-md-flex justify-content-start align-items-center column-gap-4">
        <div>
            <img src=${profileData.img} alt="${profileData.name}" class="profile-pic">
        </div>
        <div class="profile-details pt-md-0 pt-4">
            <h1>${profileData.name}</h1>
            <p class="position">${profileData.position}</p>
                <div
                    class="sub-details pt-4 d-flex align-items-start justify-content-start column-gap-3 row-gap-3">
                    <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                        <iconify-icon icon="iconoir:map-pin"></iconify-icon>
                        <span>${profileData.location}</span>
                    </div>
                    <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                        <iconify-icon icon="mdi:clock-outline"></iconify-icon>
                        <span>${profileData.time}</span>
                    </div>
                    <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                        <iconify-icon icon="lucide:dollar-sign"></iconify-icon>
                        <span>${profileData.hourlyRate}</span>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-start column-gap-3 pt-4">
                    <button class="btn-pill job-btn">jetzt bewerben</button>
                    <button class="switch-icons position-relative"
                        style="background: none;
                            outline: none;
                            border: none;
                            width: 25px;"
                        >
                        <span class="text-secondary position-relative  z-1"
                            style="
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            "
                        >
                            <iconify-icon icon="material-symbols:favorite-outline"></iconify-icon>
                        </span>
                        <span class="text-red" style="display: none; ">
                            <iconify-icon icon="material-symbols:favorite"></iconify-icon>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        `;
    }

    // Retrieve job name from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const encodedName = urlParams.get('name');
    const name = decodeURIComponent(encodedName).replace(/-/g, ' ');
    // Find the job data with the matching name (case-insensitive)
    const selectedJob = profileCardData.find(profile => profile.name.toLowerCase() === name.toLowerCase());

    // If a job with the matching name is found, generate its detail HTML
    if (selectedJob) {
        const profileCardHtml = generateprofileCardHtml(selectedJob);
        JobDetailSection.innerHTML = profileCardHtml;
    } else {
        // Handle case where no matching job is found
        JobDetailSection.innerHTML = "<p class='fs-1 px-4 px-lg-0 py-3 w-100 text-center fw-bold'>Profile not found</p>";
    }

    const SwitchHearts = document.querySelectorAll('.switch-icons');
    SwitchHearts.forEach(heart => {
        heart.addEventListener("click", function () {
            const HeartOutline = heart.querySelector('span:first-child');
            const HeartFill = heart.querySelector('span:last-child');

            if (HeartOutline.style.display === 'none') {
                HeartOutline.style.display = 'flex';
                HeartFill.style.display = 'none';
            } else {
                HeartOutline.style.display = 'none';
                HeartFill.style.display = 'flex';
            }
        });
    });
});

const JobCardData = [
    {
        title: "Zertifizierter Ergotherapie-Assistent – ​​Einstellung in Raleigh, North Carolina!",
        city: "Cary, North Carolina",
        amount: "$7000 pro Monat",
        jobTime: "hauptamtlich"
    },
    {
        title: "UI-/UX-Designer (Vollzeit) | Alle Geschlechter",
        city: "Munich, Germany",
        amount: "$8,000 pro Monat",
        jobTime: "Vertragsgrundlage"
    },
    {
        title: "Sprachpathologe – Einstellung in Raleigh und Durham, North Carolina!",
        city: "Dresden, Germany",
        amount: "$8,000 pro Monat",
        jobTime: "1 Jahr"
    },
    {
        title: "UI-/UX-Designer (Vollzeit) | Alle Geschlechter",
        city: "Leicester, United Kingdom",
        amount: "$8,000 pro Monat",
        jobTime: "2-5 Johrey"
    },
    {
        title: "UI-/UX-Designer (Vollzeit) | Alle Geschlechter",
        city: "Leicester, United Kingdom",
        amount: "$8,000 pro Monat",
        jobTime: "2-5 Johrey"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const JobCardBox = document.querySelector(".job-card-flex");

    JobCardData.forEach(jobData => {
        const jobCardHTML = `
                <div class="job-card">
                    <div class="d-flex justify-content-between align-items-start">
                        <div class="pe-3">
                            <h1>${jobData.title}</h1>
                        </div>
                        <div class="d-md-flex d-none align-items-center justify-content-between column-gap-3">
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
                    <div class="sub-details d-flex flex-sm-row flex-column align-items-start justify-content-start column-gap-4 row-gap-3">
                        <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                            <iconify-icon icon="iconoir:map-pin"></iconify-icon>
                            <span>${jobData.city}</span>
                        </div>
                        <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                            <iconify-icon icon="solar:dollar-outline"></iconify-icon>
                            <span>${jobData.amount}</span>
                        </div>
                        <div class="detail d-flex align-items-center justify-content-start column-gap-2">
                            <iconify-icon icon="material-symbols:work-outline"></iconify-icon>
                            <span>${jobData.jobTime}</span>
                        </div>
                    </div>
                    <div class="d-flex d-md-none align-items-center justify-content-center column-gap-3 pt-4">
                            <button class="btn-pill job-btn w-100">jetzt bewerben</button>
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
            `;
        JobCardBox.innerHTML += jobCardHTML;
    });

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

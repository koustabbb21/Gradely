// app.js

const gradeOptions = `
    <option value="10">O (>=90)</option>
    <option value="9">A+ (80-89)</option>
    <option value="8">A (70-79)</option>
    <option value="7">B+ (60-69)</option>
    <option value="6">B (50-59)</option>
    <option value="5">C (45-49)</option>
    <option value="4">P (40-44)</option>
    <option value="0">F (<40)</option>
`;

const creditOptions = `
    <option value="4">4</option>
    <option value="3">3</option>
    <option value="2">2</option>
    <option value="1">1</option>
    <option value="0">0</option>
`;

function handleCreditChange(selectEl) {
    const row = selectEl.closest('.sgpa-row');
    const gradeSelect = row.querySelector('.sgpa-grade');
    const pointsInput = row.querySelector('.sgpa-points');
    
    if (selectEl.value === "0") {
        gradeSelect.innerHTML = '<option value="0">P (Pass)</option><option value="0">F (Fail)</option>';
        pointsInput.value = "-";
    } else {
        if (gradeSelect.innerHTML.includes("Pass")) {
            gradeSelect.innerHTML = gradeOptions;
            pointsInput.value = gradeSelect.value;
        }
    }
}


function getSgpaRowTemplate() {
    return `
    <div class="sgpa-row bg-surface-container-low rounded-xl p-5 flex flex-wrap md:flex-nowrap items-center gap-4 border border-transparent hover:border-outline-variant/15 transition-all">
        <div class="flex-grow min-w-[200px]">
            <label class="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mb-1 block">Subject Name</label>
            <input class="w-full bg-surface-container-highest/50 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all placeholder:text-on-surface-variant/40" placeholder="e.g. Data Structures" type="text" />
        </div>
        <div class="w-24">
            <label class="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mb-1 block">Credits</label>
            <select class="sgpa-credit w-full bg-surface-container-highest/50 border-none rounded-lg px-3 py-2 focus:ring-2 focus:ring-surface-tint appearance-none" onchange="handleCreditChange(this)">
                ${creditOptions}
            </select>
        </div>
        <div class="w-40">
            <label class="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mb-1 block">Grade</label>
            <select class="sgpa-grade w-full bg-surface-container-highest/50 border-none rounded-lg px-3 py-2 font-bold text-primary focus:ring-2 focus:ring-surface-tint appearance-none" onchange="const credit = this.closest('.sgpa-row').querySelector('.sgpa-credit').value; this.closest('.sgpa-row').querySelector('.sgpa-points').value = credit === '0' ? '-' : this.value">
                ${gradeOptions}
            </select>
        </div>
        <div class="w-20 hidden md:block">
            <label class="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mb-1 block">Points</label>
            <input class="sgpa-points w-full border-none rounded-lg py-2 font-extrabold text-on-surface-variant bg-transparent text-center focus:outline-none pointer-events-none" type="text" value="10" readonly tabindex="-1" />
        </div>
        <button type="button" class="remove-btn mt-5 md:mt-0 p-2 text-on-surface-variant hover:text-error transition-colors">
            <span class="material-symbols-outlined" data-icon="delete">delete</span>
        </button>
    </div>
    `;
}

function getCgpaRowTemplate(index) {
    return `
    <div class="cgpa-row group bg-surface-container rounded-[1.5rem] p-6 hover:bg-surface-container-high ethereal-fade">
        <div class="flex flex-col md:flex-row md:items-center gap-6">
            <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span class="font-bold row-index">S${index}</span>
            </div>
            <div class="flex-grow grid grid-cols-2 md:grid-cols-3 gap-6">
                <div class="space-y-2">
                    <label class="text-[10px] font-label uppercase text-on-surface-variant px-1">Semester Name</label>
                    <input class="cgpa-name w-full bg-surface-container-lowest/50 border-0 rounded-lg focus:ring-2 focus:ring-surface-tint text-sm font-medium" type="text" placeholder="Semester ${index}">
                </div>
                <div class="space-y-2">
                    <label class="text-[10px] font-label uppercase text-on-surface-variant px-1">SGPA</label>
                    <input class="cgpa-sgpa w-full bg-surface-container-lowest/50 border-0 rounded-lg focus:ring-2 focus:ring-surface-tint text-sm font-medium" type="number" step="0.01" value="0.00">
                </div>
                <div class="space-y-2 md:col-span-1 col-span-2">
                    <label class="text-[10px] font-label uppercase text-on-surface-variant px-1">Total Credits</label>
                    <input class="cgpa-credit w-full bg-surface-container-lowest/50 border-0 rounded-lg focus:ring-2 focus:ring-surface-tint text-sm font-medium" type="number" value="0">
                </div>
            </div>
            <button type="button" class="remove-btn text-outline hover:text-error transition-colors p-2">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
    </div>
    `;
}

// Navigation functionality
function navigate(screenId) {
    document.querySelectorAll('.screen-container').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('block');
    });
    
    document.getElementById('screen-' + screenId).classList.add('block');
    document.getElementById('screen-' + screenId).classList.remove('hidden');

    // Update Nav bar visual state
    ['welcome', 'cgpa', 'sgpa'].forEach(id => {
        const desktopNav = document.getElementById('nav-' + id);
        const mobileNav = document.getElementById('mob-' + id);
        
        if (desktopNav) {
            if (id === screenId) {
                desktopNav.className = "nav-link text-[#62578C] border-b-2 border-[#62578C] pb-1 font-semibold transition-colors duration-400";
            } else {
                desktopNav.className = "nav-link text-[#1E1B15]/60 font-medium hover:text-[#62578C] transition-colors duration-400";
            }
        }

        if (mobileNav) {
            if (id === screenId) {
                mobileNav.className = "mob-link flex flex-col items-center justify-center text-[#62578C] bg-[#9B8EC7]/20 rounded-2xl px-6 py-2";
            } else {
                mobileNav.className = "mob-link flex flex-col items-center justify-center text-[#1E1B15]/50 px-6 py-2";
            }
        }
    });
    
    // Also handle dynamic welcome screen buttons linking to apps
    if (screenId === 'welcome') {
        const startBtns = document.querySelectorAll('#screen-welcome button');
        startBtns.forEach(btn => {
            if (btn.innerText.includes('Start Calculation') || btn.innerText.includes('CGPA')) {
                btn.onclick = () => navigate('cgpa');
            } else if (btn.innerText.includes('Begin Semester Track') || btn.innerText.includes('SGPA')) {
                btn.onclick = () => navigate('sgpa');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // Set up SGPA screen rows
    // -------------------------------------------------------------
    const sgpaSection = document.querySelector('#screen-sgpa section.space-y-4');
    
    // Convert existing static rows to our dynamic template
    if (sgpaSection) {
        // Clear all except the header
        const children = Array.from(sgpaSection.children);
        children.forEach(child => {
            if (!child.querySelector('h2')) {
                child.remove();
            }
        });

        const rowsContainer = document.createElement('div');
        rowsContainer.id = 'sgpa-rows';
        rowsContainer.className = 'space-y-4';
        sgpaSection.appendChild(rowsContainer);
        
        // Add 3 default rows
        for(let i=0; i<3; i++) {
            rowsContainer.insertAdjacentHTML('beforeend', getSgpaRowTemplate());
        }

        const btnContainer = document.createElement('div');
        btnContainer.className = "pt-8 text-center";
        btnContainer.innerHTML = `
            <button id="calc-sgpa-btn" class="px-12 py-4 bg-primary text-on-primary rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.05] transition-transform duration-300">
                Calculate SGPA
            </button>
        `;
        sgpaSection.appendChild(btnContainer);

        // Add Subject button
        const addBtn = sgpaSection.querySelector('h2').parentElement.querySelector('button');
        addBtn.onclick = () => {
            rowsContainer.insertAdjacentHTML('beforeend', getSgpaRowTemplate());
        };

        // Remove button delegation
        rowsContainer.addEventListener('click', (e) => {
            if (e.target.closest('.remove-btn')) {
                e.target.closest('.sgpa-row').remove();
            }
        });

        // Calculate functionality
        document.getElementById('calc-sgpa-btn').addEventListener('click', () => {
            calculateSGPA();
        });
    }

    // -------------------------------------------------------------
    // Set up CGPA screen rows
    // -------------------------------------------------------------
    const cgpaSemestersDiv = document.querySelector('#screen-cgpa .space-y-4');
    if (cgpaSemestersDiv) {
        // Find the Add Semester btn
        const addBtn = cgpaSemestersDiv.querySelector('button');
        
        // Remove existing static rows
        const children = Array.from(cgpaSemestersDiv.children);
        children.forEach(child => {
            if (!child.querySelector('h2')) {
                child.remove();
            }
        });

        const rowsContainer = document.createElement('div');
        rowsContainer.id = 'cgpa-rows';
        rowsContainer.className = 'space-y-4';
        cgpaSemestersDiv.appendChild(rowsContainer);
        
        // Add 2 initial default rows
        let semesterCount = 0;
        const addRow = () => {
            semesterCount++;
            rowsContainer.insertAdjacentHTML('beforeend', getCgpaRowTemplate(semesterCount));
        };
        
        addRow();
        addRow();

        addBtn.onclick = addRow;

        rowsContainer.addEventListener('click', (e) => {
            if (e.target.closest('.remove-btn')) {
                e.target.closest('.cgpa-row').remove();
            }
        });

        // The calculate button is in a different container (Action Card)
        const buttons = document.querySelectorAll('#screen-cgpa button');
        buttons.forEach(btn => {
            if (btn.innerText.includes('Calculate Final CGPA')) {
                btn.onclick = calculateCGPA;
            }
        });
    }

    // Hide result sections initially
    const sgpaResult = document.getElementById('calculation-result');
    if (sgpaResult) sgpaResult.style.display = 'none';
    
    // Ensure Welcome routing is active
    navigate('welcome');
});

function calculateSGPA() {
    const rows = document.querySelectorAll('.sgpa-row');
    let totalCredits = 0;
    let earnedPoints = 0;

    rows.forEach(row => {
        const credit = parseFloat(row.querySelector('.sgpa-credit').value) || 0;
        const gradePoint = parseFloat(row.querySelector('.sgpa-grade').value) || 0;
        
        totalCredits += credit;
        earnedPoints += (credit * gradePoint);
    });

    const sgpa = totalCredits > 0 ? (earnedPoints / totalCredits).toFixed(2) : 0.00;

    // Show result
    const resultSec = document.getElementById('calculation-result');
    if (resultSec) {
        resultSec.classList.remove('hidden');
        resultSec.style.display = 'block';
        
        // Update values in exactly the required DOM elements
        const root = resultSec;
        const hugeScore = root.querySelector('.text-\\[7rem\\]'); // 8.42
        if (hugeScore) hugeScore.innerText = sgpa;

        const detailVals = root.querySelectorAll('.text-3xl.font-bold');
        if (detailVals.length >= 2) {
            detailVals[0].innerText = totalCredits.toFixed(1);
            detailVals[1].innerText = earnedPoints.toFixed(1);
        }

        // Rank info
        let rankText = "Keep it up!";
        if (sgpa >= 9) rankText = "Outstanding";
        else if (sgpa >= 8) rankText = "Excellent";
        else if (sgpa >= 7) rankText = "Good";
        else if (sgpa >= 6) rankText = "Above Average";
        else if (sgpa >= 5) rankText = "Average";
        else if (sgpa >= 4) rankText = "Pass";
        else rankText = "Needs Improvement";

        const rankBadge = root.querySelector('.inline-flex.rounded-full');
        if (rankBadge) rankBadge.innerText = rankText;
    }
}

function calculateCGPA() {
    const rows = document.querySelectorAll('.cgpa-row');
    let totalCredits = 0;
    let earnedPoints = 0;
    let semestersInputted = 0;

    rows.forEach(row => {
        const credit = parseFloat(row.querySelector('.cgpa-credit').value) || 0;
        const sgpa = parseFloat(row.querySelector('.cgpa-sgpa').value) || 0;
        
        if (credit > 0 || sgpa > 0) semestersInputted++;

        totalCredits += credit;
        earnedPoints += (credit * sgpa);
    });

    const cgpa = totalCredits > 0 ? (earnedPoints / totalCredits).toFixed(2) : "0.00";

    // Update Result Summary display
    const summaryCard = document.querySelector('#screen-cgpa .bg-surface-container-low.rounded-\\[1\\.5rem\\]');
    if (summaryCard) {
        const hugeScore = summaryCard.querySelector('.text-6xl.font-bold');
        if (hugeScore) hugeScore.innerText = cgpa;

        const creditsEl = summaryCard.querySelectorAll('.text-xl.font-bold');
        if (creditsEl.length >= 2) {
            creditsEl[0].innerText = totalCredits;
            creditsEl[1].innerText = semestersInputted + " / " + rows.length;
        }
    }
}

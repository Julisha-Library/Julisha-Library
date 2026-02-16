// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Sample Papers Data - You can add more papers here
const papersData = [
    {
        id: 1,
        title: "Algebra Fundamentals",
        subject: "Mathematics",
        level: "Grade 10",
        description: "Complete guide to algebraic equations and functions",
        author: "Dr. Smith",
        year: 2025,
        downloads: 245,
        rating: 4.8,
        featured: true,
        url: "#"
    },
    {
        id: 2,
        title: "Mechanics and Motion",
        subject: "Physics",
        level: "Form 3",
        description: "Comprehensive study of forces, motion, and energy",
        author: "Prof. Johnson",
        year: 2026,
        downloads: 312,
        rating: 4.9,
        featured: true,
        url: "#"
    },
    {
        id: 3,
        title: "Organic Chemistry",
        subject: "Chemistry",
        level: "Form 4",
        description: "Understanding organic compounds and reactions",
        author: "Dr. Brown",
        year: 2025,
        downloads: 189,
        rating: 4.7,
        featured: false,
        url: "#"
    },
    {
        id: 4,
        title: "Cell Biology",
        subject: "Biology",
        level: "Grade 11",
        description: "Structure and function of cells",
        author: "Dr. Wilson",
        year: 2026,
        downloads: 267,
        rating: 4.8,
        featured: false,
        url: "#"
    },
    {
        id: 5,
        title: "Shakespeare's Works",
        subject: "English",
        level: "Grade 12",
        description: "Analysis of Shakespeare's major plays and sonnets",
        author: "Prof. Davis",
        year: 2025,
        downloads: 142,
        rating: 4.6,
        featured: false,
        url: "#"
    },
    {
        id: 6,
        title: "World War II",
        subject: "History",
        level: "Form 2",
        description: "Causes, events, and consequences of WWII",
        author: "Dr. Miller",
        year: 2025,
        downloads: 198,
        rating: 4.7,
        featured: false,
        url: "#"
    },
    {
        id: 7,
        title: "Geometry and Trigonometry",
        subject: "Mathematics",
        level: "Form 3",
        description: "Shapes, angles, and trigonometric functions",
        author: "Dr. Smith",
        year: 2026,
        downloads: 223,
        rating: 4.8,
        featured: false,
        url: "#"
    },
    {
        id: 8,
        title: "Thermodynamics",
        subject: "Physics",
        level: "Grade 11",
        description: "Heat, temperature, and energy transfer",
        author: "Prof. Johnson",
        year: 2025,
        downloads: 156,
        rating: 4.5,
        featured: false,
        url: "#"
    },
    {
        id: 9,
        title: "Periodic Table",
        subject: "Chemistry",
        level: "Form 1",
        description: "Elements, atomic structure, and chemical bonding",
        author: "Dr. Brown",
        year: 2026,
        downloads: 289,
        rating: 4.9,
        featured: true,
        url: "#"
    },
    {
        id: 10,
        title: "Evolution and Genetics",
        subject: "Biology",
        level: "Form 4",
        description: "Darwin's theory and inheritance patterns",
        author: "Dr. Wilson",
        year: 2025,
        downloads: 201,
        rating: 4.7,
        featured: false,
        url: "#"
    },
    {
        id: 11,
        title: "Grammar and Composition",
        subject: "English",
        level: "Grade 9",
        description: "English language rules and writing techniques",
        author: "Prof. Davis",
        year: 2025,
        downloads: 167,
        rating: 4.6,
        featured: false,
        url: "#"
    },
    {
        id: 12,
        title: "Ancient Civilizations",
        subject: "History",
        level: "Grade 10",
        description: "Egyptian, Greek, and Roman history",
        author: "Dr. Miller",
        year: 2026,
        downloads: 234,
        rating: 4.8,
        featured: false,
        url: "#"
    }
];

// Global filter state
let currentFilter = 'All';
let filteredPapers = [...papersData];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderFeatured();
    renderPapers(papersData);
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            alert('Thanks for subscribing! 📬\nWe\'ll send updates to: ' + email);
            document.getElementById('newsletterEmail').value = '';
        });
    }
});

/**
 * Render papers to the grid
 */
function renderPapers(papers) {
    const papersGrid = document.getElementById('papersGrid');
    
    if (papers.length === 0) {
        papersGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <p>No papers found. Try adjusting your filters or search.</p>
            </div>
        `;
        return;
    }

    papersGrid.innerHTML = papers.map(paper => `
        <div class="paper-card">
            <div class="paper-header">
                <div class="paper-tags">
                    <span class="paper-subject">${paper.subject}</span>
                    <span class="paper-level">${paper.level}</span>
                </div>
                <h3>${paper.title}</h3>
            </div>
            <div class="paper-body">
                <p class="paper-description">${paper.description}</p>
                <div class="paper-stats">
                    <span class="rating">⭐ ${paper.rating}</span>
                    <span class="downloads">📥 ${paper.downloads}</span>
                </div>
                <div class="paper-meta">
                    <span>${paper.author}</span>
                    <span>${paper.year}</span>
                </div>
                <button class="download-btn" onclick="downloadPaper('${paper.title}')">
                    📥 Download PDF
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Render featured papers section
 */
function renderFeatured() {
    const featuredPapers = papersData.filter(p => p.featured).slice(0, 3);
    const featuredSection = document.getElementById('featuredGrid');
    
    if (featuredSection) {
        featuredSection.innerHTML = featuredPapers.map(paper => `
            <div class="paper-card featured-card">
                <div class="featured-badge">⭐ Featured</div>
                <div class="paper-header">
                    <div class="paper-tags">
                        <span class="paper-subject">${paper.subject}</span>
                        <span class="paper-level">${paper.level}</span>
                    </div>
                    <h3>${paper.title}</h3>
                </div>
                <div class="paper-body">
                    <p class="paper-description">${paper.description}</p>
                    <div class="paper-stats">
                        <span class="rating">⭐ ${paper.rating}</span>
                        <span class="downloads">📥 ${paper.downloads}</span>
                    </div>
                    <div class="paper-meta">
                        <span>${paper.author}</span>
                        <span>${paper.year}</span>
                    </div>
                    <button class="download-btn" onclick="downloadPaper('${paper.title}')">
                        📥 Download PDF
                    </button>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Filter papers by subject
 */
function filterBySubject(subject) {
    currentFilter = subject;
    
    // Update active tag
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('active');
        if (tag.textContent.trim() === subject) {
            tag.classList.add('active');
        }
    });

    if (subject === 'All') {
        filteredPapers = [...papersData];
    } else {
        filteredPapers = papersData.filter(paper => paper.subject === subject);
    }

    // Clear search and render
    document.getElementById('searchInput').value = '';
    renderPapers(filteredPapers);
}

/**
 * Filter papers by search term
 */
function filterPapers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (currentFilter === 'All') {
        filteredPapers = papersData.filter(paper =>
            paper.title.toLowerCase().includes(searchTerm) ||
            paper.description.toLowerCase().includes(searchTerm) ||
            paper.subject.toLowerCase().includes(searchTerm)
        );
    } else {
        filteredPapers = papersData.filter(paper =>
            paper.subject === currentFilter && (
                paper.title.toLowerCase().includes(searchTerm) ||
                paper.description.toLowerCase().includes(searchTerm)
            )
        );
    }

    renderPapers(filteredPapers);
}

/**
 * Download paper (placeholder function)
 */
function downloadPaper(title) {
    alert(`Downloading: ${title}\n\nIn a real implementation, this would download the PDF file for this paper.`);
    // In production, you would:
    // 1. Create actual PDF files
    // 2. Store them in a files/ or assets/ directory
    // 3. Link directly to them: window.location.href = 'files/paper-name.pdf';
}

/**
 * Smooth scroll to section
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('searchInput').value = '';
        filterPapers();
    }
});

// Sort papers by downloads
function sortByDownloads() {
    const sorted = [...filteredPapers].sort((a, b) => b.downloads - a.downloads);
    renderPapers(sorted);
}

// Sort papers by rating
function sortByRating() {
    const sorted = [...filteredPapers].sort((a, b) => b.rating - a.rating);
    renderPapers(sorted);
}

// Filter by level
function filterByLevel(level) {
    if (level === 'All') {
        filteredPapers = [...papersData];
    } else {
        filteredPapers = papersData.filter(p => p.level === level);
    }
    renderPapers(filteredPapers);
}

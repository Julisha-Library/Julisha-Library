# Paper Management Quick Guide

## 🚀 Three Ways to Add Papers

### Method 1: Quick Manual (1 paper)

**Time: 5 minutes**

1. Open `js/script.js`
2. Find the `papersData` array
3. Add a paper object:

```javascript
{
    id: 13,
    title: "Quadratic Equations",
    subject: "Mathematics",
    level: "Grade 10",
    description: "Master quadratic equations and factoring",
    author: "Dr. Smith",
    year: 2026,
    downloads: 0,
    rating: 4.5,
    featured: false,
    pages: 35,
    difficulty: "Medium",
    pdfUrl: "papers/mathematics/quadratic-equations.pdf",
    url: "#"
}
```

4. Place your PDF at: `papers/mathematics/quadratic-equations.pdf`
5. Push to GitHub

**✅ Done!**

---

### Method 2: CSV Batch Import (5-100 papers)

**Time: 10 minutes**

1. Create a file `papers_to_import.csv`:

```csv
Title,Subject,Level,Description,Author,Year,Pages,Difficulty,PDF_Path,Featured
Photosynthesis,Biology,Form 1,Process in plants,Dr. Green,2026,40,Easy,papers/biology/photosynthesis.pdf,false
Calculus Basics,Mathematics,Grade 12,Differential calculus,Prof. Math,2026,65,Hard,papers/mathematics/calculus-basics.pdf,true
French Revolution,History,Form 3,1789 events,Dr. History,2025,55,Medium,papers/history/french-revolution.pdf,false
```

2. Run the converter:
```bash
node docs/csv-to-papers.js papers_to_import.csv
```

3. Copy the output code
4. Paste into `papersData` array in `js/script.js`
5. Place all PDFs in their respective folders
6. Push to GitHub

**✅ Done!**

---

### Method 3: User Submissions (Community Papers)

**Time: Ongoing**

Users submit papers through the website **"Submit a Paper"** section:

1. **User submits form** with:
   - Title, subject, level, description
   - Difficulty rating
   - PDF file (up to 10MB)

2. **Submission stored** in browser localStorage

3. **You review it:**
   ```javascript
   // In browser console:
   JSON.parse(localStorage.getItem('submissions_papers'))
   ```

4. **You publish it:**
   - Request PDF from submitter if needed
   - Place in `/papers/subject/` folder
   - Add to `papersData`
   - Commit and push
   - Email author: "Your paper is published! 🎉"

**See [SUBMISSIONS.md](./SUBMISSIONS.md) for full workflow**

---

## 📋 Complete Paper Data Reference

```javascript
{
    id: 13,                              // Unique number (increment each time)
    title: "Paper Title",                // What appears on site
    subject: "Mathematics",              // Category (see list below)
    level: "Grade 10",                   // Grade 1-12 or Form 1-4
    description: "Brief summary",        // Shows on paper card
    author: "Your Name",                 // Creator/educator
    year: 2026,                          // Publication year
    downloads: 0,                        // Starts at 0 (updates automatically)
    rating: 4.5,                         // Initial rating (0-5)
    featured: false,                     // Set true for homepage
    pages: 35,                           // Total pages
    difficulty: "Medium",                // Easy, Medium, or Hard
    pdfUrl: "papers/math/file.pdf",     // Path to PDF
    url: "#"                             // Keep as "#"
}
```

### Supported Subjects
- Mathematics 📐
- Physics ⚛️
- Chemistry 🧪
- Biology 🦠
- English 📖
- History 🏛️
- Geography 🌍
- Kiswahili 📚

### Supported Levels
- **Elementary:** Grade 1-8
- **High School:** Grade 9-12
- **Secondary (Kenya):** Form 1-4

---

## 🎯 Which Method to Use?

| Scenario | Method | Time |
|----------|--------|------|
| Adding 1 paper you have | Manual (Method 1) | 5 min |
| Adding 10+ papers at once | CSV Import (Method 2) | 10 min |
| Accepting community papers | User Submission (Method 3) | Ongoing |
| Testing with samples | All 3 can be used | - |

---

## 📊 Sample CSV Format

Here's a sample you can copy:

```csv
Title,Subject,Level,Description,Author,Year,Pages,Difficulty,PDF_Path,Featured
Algebra Fundamentals,Mathematics,Grade 9,Equations and functions basics,Dr. Smith,2026,40,Easy,papers/mathematics/algebra-basics.pdf,true
Linear Equations,Mathematics,Grade 10,Systems and graphing,Dr. Smith,2026,45,Medium,papers/mathematics/linear-equations.pdf,true
Calculus Introduction,Mathematics,Grade 12,Limits and derivatives,Prof. Math,2026,65,Hard,papers/mathematics/calculus-intro.pdf,false
Newton's Laws,Physics,Form 2,Motion and forces,Prof. Wilson,2026,50,Medium,papers/physics/newtons-laws.pdf,false
Waves and Sound,Physics,Form 3,Wave properties and acoustics,Prof. Wilson,2026,55,Medium,papers/physics/waves-sound.pdf,true
Atomic Structure,Chemistry,Form 1,Atoms and elements,Dr. Brown,2026,35,Easy,papers/chemistry/atomic-structure.pdf,false
Organic Chemistry,Chemistry,Form 4,Carbon compounds,Dr. Brown,2025,60,Hard,papers/chemistry/organic-chemistry.pdf,false
Cell Biology,Biology,Form 1,Cell structure and function,Dr. Green,2026,40,Easy,papers/biology/cell-biology.pdf,true
Evolution,Biology,Form 3,Natural selection and fossils,Dr. Green,2026,55,Medium,papers/biology/evolution.pdf,false
Shakespeare,English,Grade 12,Plays and sonnets,Prof. Davis,2025,70,Hard,papers/english/shakespeare.pdf,false
World War II,History,Form 3,WWII causes and consequences,Mr. Miller,2025,55,Medium,papers/history/ww2.pdf,false
African Geography,Geography,Form 2,Continents and countries,Ms. Lee,2026,45,Easy,papers/geography/african-geography.pdf,true
```

---

## 🚦 Workflow Summary

### Adding Sample Papers (Month 1)

```
Week 1
├── Add 5 papers manually (Method 1)
├── Commit "Sample papers added"
└── Push to GitHub

Week 2
├── Prepare CSV with 10 more papers
├── Use CSV importer (Method 2)
├── Commit "Batch import: 10 papers"
└── Push to GitHub

Week 3
├── Set up user submissions
├── Update docs
└── Announce to community

Week 4
├── Review 2-3 submissions
├── Publish best ones
└── Growing library!
```

---

## 🔧 File Organization

```
papers/
├── mathematics/
│   ├── algebra-basics.pdf
│   ├── linear-equations.pdf
│   └── calculus-intro.pdf
├── physics/
│   ├── newtons-laws.pdf
│   └── waves-sound.pdf
├── chemistry/
│   ├── atomic-structure.pdf
│   └── organic-chemistry.pdf
├── biology/
│   ├── cell-biology.pdf
│   └── evolution.pdf
├── english/
│   └── shakespeare.pdf
├── history/
│   └── ww2.pdf
└── geography/
    └── african-geography.pdf
```

---

## 💡 Pro Tips

✅ **Good Paper Names**
- `quadratic-equations.pdf`
- `newtons-laws.pdf`
- `cell-biology.pdf`

❌ **Bad Paper Names**
- `Math123.pdf`
- `paper.pdf`
- `file (1).pdf`

✅ **Good Descriptions**
- "Master quadratic equations: solving, graphing, real-world applications"

❌ **Bad Descriptions**
- "math paper"
- "good study guide"

✅ **Good Featured Papers**
- Most downloaded
- Highest rated
- Newest additions
- Best quality

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Paper doesn't appear | Check ID is unique, subject matches dropdown, PDF path is correct |
| CSV import fails | Verify CSV headers match exactly, all rows have correct number of columns |
| PDF won't preview | Check file isn't corrupt, size under 10MB, path is correct |
| Submissions not saving | Check browser localStorage isn't full or disabled |
| Can't export submissions | Use browser console directly: `JSON.parse(localStorage.getItem('submissions_papers'))` |

---

## 📚 Full Documentation

- [ADDING_PAPERS.md](./ADDING_PAPERS.md) - Complete guide with all methods
- [SUBMISSIONS.md](./SUBMISSIONS.md) - Managing user submissions
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Community contribution guidelines
- [API.md](./API.md) - Technical reference for papersData

---

## ✨ Next Features to Add

1. **Admin Panel** - Visual interface to manage papers
2. **Auto-import** - Automatically publish based on criteria
3. **Email Notifications** - Alert when submissions arrive
4. **Duplicate Detection** - Prevent adding same paper twice
5. **Search Analytics** - See what papers people search for most

---

**Ready to start?** Pick a method above and add your first paper! 🚀

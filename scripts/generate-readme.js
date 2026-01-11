const fs = require('fs');

// Read portfolio.json
const data = JSON.parse(fs.readFileSync('portfolio.json', 'utf-8'));

// Extract GitHub username from socials URL
const githubUsername = data.meta.socials.github.split('/').pop();

// Generate README content
const readme = `
# Hi, I'm ${data.meta.name} 👋

## ${data.meta.title}

${data.meta.tagline}

---

### 🚀 About Me

${data.aboutMe.description}

${data.aboutMe.highlights.map(h => `- ✨ ${h}`).join('\n')}

---

### 🛠️ Tech Stack

**Frontend:**  
${data.skills.frontend.map(s => `\`${s}\``).join(' • ')}

**Backend:**  
${data.skills.backend.map(s => `\`${s}\``).join(' • ')}

**Tools:**  
${data.skills.tools.map(s => `\`${s}\``).join(' • ')}

---

### 💼 Experience

${data.experience.map(exp => `
#### ${exp.title} @ ${exp.company}
📍 ${exp.location} | 📅 ${exp.startDate} - ${exp.endDate}

${exp.description}

**Tech:** ${exp.technologies.map(t => `\`${t}\``).join(' • ')}
`).join('\n---\n')}

---

### 🎓 Education

${data.education.map(edu => `
**${edu.degree}**  
🏛️ ${edu.institution} | 📅 ${edu.startYear} - ${edu.endYear}

${edu.details}
`).join('\n')}

---

### 📫 Let's Connect!

- 📧 **Email:** [${data.contact.email}](mailto:${data.contact.email})
${data.meta.socials.linkedin ? `- 💼 **LinkedIn:** [${data.meta.socials.linkedin.split('/').pop()}](${data.meta.socials.linkedin})` : ''}
${data.meta.socials.twitter ? `- 🐦 **Twitter:** [${data.meta.socials.twitter.split('/').pop()}](${data.meta.socials.twitter})` : ''}
- 🌐 **Portfolio:** [View My Work](https://your-portfolio-url.vercel.app)

---

### 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&hide_border=true" alt="GitHub Stats" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=tokyonight&hide_border=true" alt="GitHub Streak" />
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" />
</p>

---

### 🏷️ Portfolio Projects

> Projects tagged with \`portfolio\` topic are automatically displayed on my portfolio website!

To see all my featured projects, visit my [Portfolio Website](https://your-portfolio-url.vercel.app).

---

<p align="center">
  <i>${data.contact.availability}</i><br/>
  <i>${data.contact.responseTime}</i>
</p>

---

<p align="center">
  <i>⭐ This README is auto-generated from <a href="./portfolio.json">portfolio.json</a></i>
</p>
`;

// Write README.md
fs.writeFileSync('README.md', readme.trim());
console.log('✅ README.md generated successfully!');

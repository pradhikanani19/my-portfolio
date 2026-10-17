// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE. Anything set to null is simply hidden on the
//  live site (and shown as a dashed "add this" hint in dev mode).
//  Only publish what you have verified and can explain.
// ─────────────────────────────────────────────────────────────
export const profile = {
  name: 'Pradhi Kanani',
  role: 'B.Tech Student · Data Science',
  headline: ['Turning data into insight.', 'Turning ideas into products.'],

  intro:
    "Hi, I'm Pradhi, a B.Tech student specializing in Data Science with a keen interest in analytics, machine learning, and software development. I enjoy exploring ideas, solving problems, and building applications that bring technology and creativity together.",

  about: [
    "I'm passionate about exploring how data and technology can be used to solve problems, uncover meaningful insights, and support smarter decisions. I enjoy working at the intersection of data analytics, machine learning, and software development, where analytical thinking meets practical application.",

    "I believe the real value of technology lies in turning ideas into solutions that people can actually use. Through hands-on projects, I enjoy experimenting with new tools, building interactive applications, exploring machine learning concepts, and finding better ways to approach complex problems.",

    "As I continue my journey in Data Science, I'm focused on strengthening my technical skills, expanding my understanding of emerging technologies, and learning through experimentation and collaboration. I'm always curious to explore new challenges and turn what I learn into meaningful work.",

    "My goal is to grow into a well-rounded technology professional who combines data-driven thinking, technical expertise, and creativity to build practical solutions with real-world value."
  ],

  closingLine: 'Curious by nature. Driven by data. Focused on building.',
};

export const education = {
  degree: 'B.Tech', // TODO: official degree title, e.g. "Bachelor of Technology"
  specialization: 'Data Science',
  college: 'Mukesh Patel School of Technology & Management', // TODO: exact college name
  expectedGraduation: 2028, // TODO: e.g. "2028"
  cgpa: "3.78/4.0", // TODO: only if you choose to publish it and have verified it
}

export const contact = {
  email: 'pradhii1906@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pradhi-kanani-197b57376',
  github: 'https://github.com/pradhikanani19',
}

// Group skills by how you actually used them. Remove anything you can't explain.
// `level`: 'used' = used in projects · 'familiar' = familiar with · 'learning' = currently learning
export const skills = [
  { category: 'Programming', items: [
    { name: 'Python', level: 'used' },
    { name: 'JavaScript', level: 'used' },
  ] },
  { category: 'Data analysis', items: [
    { name: 'Pandas', level: 'used' },
    { name: 'NumPy', level: 'used' },
    { name: 'Exploratory data analysis', level: 'used' },
  ] },
  { category: 'Visualization', items: [
    { name: 'Data visualization', level: 'used' },
    { name: 'Streamlit', level: 'used' },
  ] },
  { category: 'Web & APIs', items: [
    { name: 'HTML / CSS', level: 'used' },
    { name: 'React', level: 'familiar' },
    { name: 'REST / API integration', level: 'used' },
  ] },
  { category: 'Machine learning', items: [
    { name: 'scikit-learn', level: 'familiar' },
    { name: 'PCA / LDA / PNN', level: 'learning' },
  ] },
  { category: 'Tools & deployment', items: [
    { name: 'Git / GitHub', level: 'used' },
    { name: 'Render', level: 'used' },
    { name: 'Streamlit Community Cloud', level: 'used' },
  ] },
]

// Only completed certificates. Leave empty to hide the section.
export const certifications = [
  // { title: 'Course title', provider: 'Provider', url: 'https://…' },
]

// Optional team / volunteering / leadership. Leave empty to hide the section.
export const activities = [
  // { title: 'Role or activity', org: 'Organisation', detail: 'What you did.' },
]

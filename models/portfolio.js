const fs = require("fs").promises;
const path = require("path");

const projectsPath = path.join(__dirname, "projects.json");

async function projectsList() {
  const projects = await fs.readFile(projectsPath);
  return JSON.parse(projects);
}

async function getProjectById(projectId) {
  const projects = await projectsList();
  const project = projects.find((project) => project.id === projectId);

  return project || null;
}

module.exports = { projectsList, getProjectById };

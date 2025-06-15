import { Link, useParams } from "react-router-dom";
import React from "react"; // or next/router if using Next.js
// Example dummy data — replace with real API or state later
const projects = {
  "uic-events": {
    title: "UIC Events",
    date: "2024-03-01",
    description: `A web app that consolidates UIC event data from multiple sources.`,
    story: `What started as a simple calendar sync idea grew into a complete scraping, parsing, and notification system. The challenge was ensuring the feed remained up-to-date without duplication and handled edge cases like missing time zones.`,
    technologies: ["React", "Python", "HTML"],
    repo: "https://github.com/your/uic-events",
    demo: "https://lokeshmanideep.pages.dev/uic-events",
  },
  // Add others similarly
};

export default function ProjectDetails() {
  const { slug } = useParams(); // match /projects/:slug
  const project = projects[slug];

  if (!project) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <Link to="/projects" className="text-teal-600 hover:underline text-sm">
        ← Back to Projects
      </Link>

      <h1 className="text-3xl font-bold mt-4 text-gray-800">{project.title}</h1>
      <p className="text-sm text-gray-500 mt-1">
        Created on {new Date(project.date).toLocaleDateString()}
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          What is this?
        </h2>
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </section>

      {project.story && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Why this project matters?
          </h2>
          <p className="text-gray-700 leading-relaxed">{project.story}</p>
        </section>
      )}

      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6 flex gap-6">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800 underline"
          >
            Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800 underline"
          >
            Source Code
          </a>
        )}
      </section>
    </div>
  );
}

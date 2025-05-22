import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-white to-green-100 min-h-screen p-6 max-w-6xl mx-auto space-y-16">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-extrabold text-green-800">
          Hi, I'm [Your Name]
        </motion.h1>
        <p className="text-xl text-gray-700">Aspiring Full Stack Developer | Open Source Enthusiast</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/nitesh-sharma-5b4115306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="hover:text-green-700"><Linkedin className="w-6 h-6" /></a>
          <a href="https://github.com/NITESHBHARDWAJ001" target="_blank" rel="noopener noreferrer" className="hover:text-green-700"><Github className="w-6 h-6" /></a>
          <a href="https://instagram.com/nitesh_bhardwaj0001" target="_blank" rel="noopener noreferrer" className="hover:text-green-700"><Instagram className="w-6 h-6" /></a>
        </div>
        <a
          href="https://drive.google.com/yourresumelink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-md">View Resume</Button>
        </a>
      </section>

      {/* Education */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Education</h2>
        <ul className="list-disc ml-6 text-gray-800">
          <li>B.Tech in Computer Science, XYZ University, 2020-2024</li>
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl shadow-lg border border-green-300">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-green-700">Project Name</h3>
              <p className="text-gray-600">Short description of the project goes here.</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/projectrepo" target="_blank"><Button variant="outline" className="hover:bg-green-50">GitHub</Button></a>
                <a href="https://project-demo-link.com" target="_blank"><Button variant="outline" className="hover:bg-green-50">Live</Button></a>
                <a href="https://project-video-link.com" target="_blank"><Button variant="outline" className="hover:bg-green-50">Video</Button></a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Skills</h2>
        <ul className="list-disc ml-6 text-gray-800 space-y-1">
          <li><strong>Languages:</strong> JavaScript, Python, C++</li>
          <li><strong>Frameworks:</strong> React, Node.js, Express</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Databases:</strong> MongoDB, MySQL</li>
          <li><strong>Tools:</strong> VS Code, Postman, Docker</li>
        </ul>
      </section>

      {/* Coding Profiles */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Coding Profiles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="font-medium mb-2">HackerRank</h3>
            <img src="https://www.hackerrank.com/badges/yourbadgeurl" alt="HackerRank Badge" className="h-20 mx-auto" />
          </div>
          <div className="text-center">
            <h3 className="font-medium mb-2">LeetCode</h3>
            <img src="https://leetcode-stats-api.herokuapp.com/yourleetcodeusername" alt="LeetCode Stats" className="h-24 mx-auto" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact Me</h2>
        <div className="text-gray-800 space-y-2">
          <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
          <p><strong>Email:</strong> youremail@example.com</p>
          <div className="mt-4">
            <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-md">Fill Contact Form</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
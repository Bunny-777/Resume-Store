import { Mail, Github, Linkedin } from "lucide-react";

interface ProfileProps {
  darkMode: boolean;
}

const Profile = ({ darkMode }: ProfileProps) => {
  return (
    <section id="profile"
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          alt="Profile Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-4xl font-bold mb-2">ryan</h1>
        <p className="text-xl mb-4">Full Stack Developer | AI Enthusiast</p>
        <p className={`mb-4 ${darkMode ? "text-white/80" : "text-gray-700"}`}>
          Passionate about building modern web applications and exploring AI technologies. I love turning ideas into reality.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:support@ryan202410@gmail.com" className="text-green-500 hover:underline flex items-center gap-1">
            <Mail size={18} /> Email
          </a>
          <a href="https://github.com/ryan-777" className="text-green-500 hover:underline flex items-center gap-1">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ryan777/" className="text-green-500 hover:underline flex items-center gap-1">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>

      {/* About & Skills */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className={`mb-6 ${darkMode ? "text-white/80" : "text-gray-700"}`}>
          I am a passionate developer with experience in building web applications, working with Node.js, React, and AI-based projects. I enjoy creating clean, modern, and user-friendly designs.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-4 ">
          {["React", "Node.js", "TypeScript", "Python", "AI/ML", "TailwindCSS"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-green-500 text-white font-medium text-sm 
                 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>



    </section>
  );
};

export default Profile;

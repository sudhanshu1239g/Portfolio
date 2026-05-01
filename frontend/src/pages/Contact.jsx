import React from "react";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-slate-950 text-slate-300 py-20 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              Sudhanshu<span className="text-cyan-500">.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-sm">
              Currently available for freelance opportunities and full-time roles. 
            </p>
            <a 
              href="mailto:gsam1239h@gmail.com"
              className="inline-block px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

        

          {/* Column 3: Social & Professional Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Let's Connect</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="mailto:gsam1239h@gmail.com" 
                className="hover:text-sky-500 transition-colors duration-300 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500">
                   <span className="text-xs">Email</span>
                </div>
                gsam1239h@gmail.com
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sudhanshu-61b469279/" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-sky-500 transition-colors duration-300 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                   <span className="text-xs">LinkedIn</span>
                </div>
                Connect on LinkedIn
              </a>

              <a 
                href="https://github.com/sudhanshu1239g" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-sky-500 transition-colors duration-300 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                   <span className="text-xs">GitHub</span>
                </div>
                Follow on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Sudhanshu. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-cyan-500 cursor-default transition-colors">Built with MERN Stack</span>
            <span className="hover:text-cyan-500 cursor-default transition-colors">Design & Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data";
import { FileText, Download, Send, Lock, Unlock, ShieldCheck, ShieldAlert, ScanLine, Eye, X } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import Magnetic from "@/components/ui/Magnetic";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"/>
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
};

export default function ExperienceContact() {
  const { contact } = PORTFOLIO_DATA;
  const dialogRef = useRef<HTMLDialogElement>(null);
  
  // Interactive Verification State
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [scrambledText, setScrambledText] = useState("0x8F9A...AWAITING_AUTH");

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  const handleDecryption = () => {
    setIsDecrypting(true);
    let iterations = 0;
    const interval = setInterval(() => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      setScrambledText(chars.split('').sort(() => 0.5 - Math.random()).join('').substring(0, 22));
      iterations += 1;
      if (iterations > 15) {
        clearInterval(interval);
        setIsDecrypting(false);
        setIsDecrypted(true);
      }
    }, 60);
  };

  return (
    <section id="resume-contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-16 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto transition-colors duration-500">

      <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col items-center sm:items-start text-center sm:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          {/* Reverted to Contact */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 mb-1 sm:mb-2">
            Contact Me<Send className="text-sky-500 hidden sm:block w-6 h-6 sm:w-8 sm:h-8" />
          </h2>
          <p className="font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-sky-600 dark:text-sky-400 uppercase tracking-widest font-bold mb-2 sm:mb-3 lg:mb-4">
            // Ready_to_Connect?
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-stretch">

        {/* ========================================= */}
        {/* RESUME CARD (Col 1-3)                     */}
        {/* ========================================= */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="xl:col-span-3 h-full">
          <div className="w-full h-full !bg-white dark:!bg-[#08080a] border border-purple-500/20 dark:border-white/10 rounded-[1.25rem] sm:rounded-[1.5rem] p-4 sm:p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden transition-all duration-500 hover:border-purple-500 dark:hover:border-purple-500/50 shadow-xl z-10">
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-purple-500/20 to-purple-500/10 dark:from-purple-500/10 dark:to-purple-500/5 rounded-full blur-[40px] sm:blur-[60px] group-hover:scale-125 transition-transform duration-700 -z-10" />
            
            {/* Reverted to My Resume */}
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="text-purple-500 w-5 h-5" /> My Resume
            </h3>
            <dialog 
        ref={dialogRef} 
        className="backdrop:bg-black/80 backdrop:backdrop-blur-sm bg-transparent w-[95vw] md:w-[80vw] lg:w-[70vw] h-[90vh] max-w-6xl rounded-2xl shadow-2xl p-0 m-auto overflow-hidden border border-slate-700/50 open:animate-in open:fade-in open:zoom-in-95"
      >
        <div className="relative w-full h-full flex flex-col bg-slate-900">
          
          {/* Modal Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-slate-800 bg-slate-950 text-white font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-400" />
              <span>Sri_Ram_M_Resume.pdf</span>
            </div>
            <button 
              onClick={closeModal}
              className="p-1.5 sm:p-2 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 rounded-lg transition-colors flex items-center gap-2"
            >
              <span className="hidden sm:inline">CLOSE_PREVIEW</span>
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          {/* PDF Viewer */}
          <div className="flex-1 w-full h-full bg-slate-800 p-2 sm:p-4">
            <iframe 
              src="/Sri_Ram_M_Resume.pdf#toolbar=0" 
              className="w-full h-full rounded-lg border border-slate-700 bg-white"
              title="Resume Preview"
            />
          </div>
        </div>
      </dialog>
            <div className="w-full flex-1 min-h-[150px] sm:min-h-[200px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg sm:rounded-xl relative overflow-hidden flex items-center justify-center group-hover:border-purple-300 dark:group-hover:border-purple-500/30 transition-colors duration-500 mb-4">
              <img src="/sri_ram_resume.png" alt="Resume Blurred" className="absolute inset-0 w-full h-full object-cover object-top blur-[2px] opacity-70 dark:opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:blur-md" />
              <span className="absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <button onClick={openModal} className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform shadow-xl">
                  <Eye className="w-4 h-4" /> Preview File
                </button>
              </span>
            </div>

            <a href="/Sri_Ram_M_Resume.pdf" download className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-purple-500/25">
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* SECURE CONTACT CARD (Col 4-5)             */}
        {/* ========================================= */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="xl:col-span-2 h-full">
          <div className="w-full h-full !bg-slate-50 dark:!bg-[#050505] border border-sky-500/20 dark:border-white/10 rounded-[1.25rem] sm:rounded-[1.5rem] p-4 sm:p-6 md:p-8 flex flex-col justify-center relative overflow-hidden transition-all duration-500 shadow-xl z-10 font-mono">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/20 to-sky-500/10 dark:from-sky-500/10 dark:to-sky-500/5 rounded-full blur-[40px] transition-transform duration-700 -z-10" />

            {/* Clearer Context */}
            <div className="flex items-center justify-between mb-4 border-b border-sky-500/20 pb-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-widest flex items-center gap-2">
                {isDecrypted ? <ShieldCheck className="w-4 h-4 text-emerald-500" /> : <Lock className="w-4 h-4 text-rose-500" />}
                SECURE CONTACT PORTAL
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center min-h-[160px] bg-slate-200/50 dark:bg-black/50 rounded-md border border-slate-300 dark:border-white/5 p-4 mb-6 shadow-inner relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isDecrypted ? (
                  <motion.div key="locked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-slate-500 dark:text-slate-400 break-all">
                    {scrambledText}
                  </motion.div>
                ) : (
                  <motion.div key="unlocked" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-xs sm:text-sm">
                    <span className="text-slate-400">{`{`}</span><br />
                    &nbsp;&nbsp;<span className="text-sky-500">"status"</span><span className="text-slate-400">: </span><span className="text-emerald-500">200</span>,<br />
                    &nbsp;&nbsp;<span className="text-sky-500">"contact_info"</span><span className="text-slate-400">: {`{`}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">"email"</span><span className="text-slate-400">: </span><a href={`mailto:${contact.email}`} className="text-amber-500 hover:underline">"{contact.email}"</a>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">"phone"</span><span className="text-slate-400">: </span><a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-amber-500 hover:underline">"{contact.phone}"</a><br />
                    &nbsp;&nbsp;<span className="text-slate-400">{`}`}</span><br />
                    <span className="text-slate-400">{`}`}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simpler Button Label */}
            {!isDecrypted && (
              <button onClick={handleDecryption} disabled={isDecrypting} className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold tracking-widest rounded-md shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all flex items-center justify-center gap-2 uppercase">
                {isDecrypting ? "DECRYPTING..." : <><Unlock className="w-4 h-4" /> UNLOCK CONTACT INFO</>}
              </button>
            )}

            {isDecrypted && (
              <div className="flex justify-center w-full mt-2">
                <Dock className="border-none shadow-none bg-transparent m-0 p-0">
                  <DockIcon>
                    <Magnetic><a href="https://www.linkedin.com/in/ram2219/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-sky-500/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all text-slate-700 dark:text-slate-300 hover:text-sky-500"><Icons.linkedin className="w-5 h-5" /></a></Magnetic>
                  </DockIcon>
                  <DockIcon>
                    <Magnetic><a href="https://github.com/Ram-1922/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all text-slate-700 dark:text-slate-300 hover:text-purple-500"><Icons.github className="w-5 h-5" /></a></Magnetic>
                  </DockIcon>
                  <DockIcon>
                    <Magnetic><a href={`https://wa.me/${contact.phone.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all text-slate-700 dark:text-slate-300 hover:text-emerald-500"><Icons.whatsapp className="w-5 h-5" /></a></Magnetic>
                  </DockIcon>
                </Dock>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import WordPullUp from "./ui/word-pull-up";

export default function WelcomePage() {
  return (
    <div className="w-full relative min-h-screen flex flex-col items-center justify-center">
      <WordPullUp className="text-6xl text-center" words="Welcome to Solara Exploit!" />
      <p className="max-w-90 text-lg mt-12">A Roblox Exploit designed to be best for user experience.<br/>Start using it by clicking attach icon or using the Solara V4 AI Feature!</p>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, CheckIcon } from 'lucide-react';
export const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    // In a real app, you would send this to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setError('');
  };
  return <div className="max-w-md mx-auto">
      <h2 className="mb-4 text-xl font-medium text-white">
        Be the first to know when we launch
      </h2>
      {!submitted ? <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MailIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input type="email" className="w-full px-4 py-3 pl-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-white/60" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" className="px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-amber-500 rounded-lg hover:from-pink-600 hover:to-amber-600 transition-all duration-300">
            Notify Me
          </button>
        </form> : <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} className="p-6 text-center bg-white/10 backdrop-blur-sm rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-500 rounded-full">
            <CheckIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="mb-2 text-xl font-medium">Thank You!</h3>
          <p className="text-white/80">
            We'll notify you when Love In Flame launches.
          </p>
        </motion.div>}
    </div>;
};
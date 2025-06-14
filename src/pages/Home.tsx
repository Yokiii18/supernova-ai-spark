
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Target, Trophy, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-50/30 to-pink-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg float-gentle">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-elegant-secondary">Master Grammar with AI</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-elegant-primary">Perfect Your</span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Grammar Skills
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your writing with our intelligent grammar learning platform. 
              Practice, learn, and excel with personalized lessons and real-time feedback.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/grammar" className="elegant-button inline-flex items-center space-x-2">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/profile" className="elegant-button-secondary inline-flex items-center space-x-2">
                <span>View Profile</span>
                <Target className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-elegant-primary mb-4">
              Why Choose Grammar Master?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with proven learning methods
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="elegant-card p-8 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-elegant-primary mb-4">Smart Lessons</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered lessons that adapt to your learning pace and style for maximum effectiveness.
              </p>
            </div>
            
            <div className="elegant-card p-8 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-elegant-primary mb-4">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your improvement with detailed analytics and personalized insights.
              </p>
            </div>
            
            <div className="elegant-card p-8 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-elegant-primary mb-4">Achievements</h3>
              <p className="text-gray-600 leading-relaxed">
                Earn rewards and badges as you master different grammar concepts and rules.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-elegant-primary mb-6">
            Ready to Master Grammar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who have improved their writing skills
          </p>
          <Link to="/grammar" className="elegant-button-accent inline-flex items-center space-x-2 text-lg px-8 py-4">
            <span>Get Started Now</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

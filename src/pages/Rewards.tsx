
import React from 'react';
import { Trophy, Star, Award, Crown, Zap, Target, CheckCircle } from 'lucide-react';

const Rewards = () => {
  const badges = [
    { 
      id: 1, 
      name: "Grammar Rookie", 
      description: "Complete your first grammar lesson", 
      icon: Target, 
      earned: true, 
      date: "March 15, 2024",
      color: "from-green-400 to-green-600"
    },
    { 
      id: 2, 
      name: "Punctuation Pro", 
      description: "Master all punctuation rules", 
      icon: Star, 
      earned: true, 
      date: "March 18, 2024",
      color: "from-blue-400 to-blue-600"
    },
    { 
      id: 3, 
      name: "Sentence Scholar", 
      description: "Perfect 10 sentence structure exercises", 
      icon: Award, 
      earned: true, 
      date: "March 22, 2024",
      color: "from-purple-400 to-purple-600"
    },
    { 
      id: 4, 
      name: "Grammar Guru", 
      description: "Achieve 95% average score", 
      icon: Crown, 
      earned: false, 
      progress: 87,
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      id: 5, 
      name: "Speed Demon", 
      description: "Answer 50 questions in under 5 minutes", 
      icon: Zap, 
      earned: false, 
      progress: 23,
      color: "from-red-400 to-red-600"
    },
    { 
      id: 6, 
      name: "Perfect Streak", 
      description: "Maintain 30-day learning streak", 
      icon: Trophy, 
      earned: false, 
      progress: 23,
      color: "from-indigo-400 to-indigo-600"
    },
  ];

  const achievements = [
    { title: "100 Lessons Completed", current: 43, target: 100, reward: "Grammar Master Badge" },
    { title: "Perfect Scores", current: 7, target: 15, reward: "Accuracy Expert Badge" },
    { title: "Study Streak", current: 7, target: 30, reward: "Dedication Trophy" },
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const unearnedBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-elegant-secondary">Achievement Center</span>
          </div>
          <h1 className="text-4xl font-bold text-elegant-primary mb-4">Your Rewards</h1>
          <p className="text-xl text-gray-600">Celebrate your learning milestones and achievements</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="elegant-card p-6 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-elegant-primary mb-2">{earnedBadges.length}</h3>
            <p className="text-gray-600">Badges Earned</p>
          </div>

          <div className="elegant-card p-6 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-elegant-primary mb-2">1,250</h3>
            <p className="text-gray-600">Total Points</p>
          </div>

          <div className="elegant-card p-6 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-elegant-primary mb-2">Gold</h3>
            <p className="text-gray-600">Current Rank</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Earned Badges */}
          <div className="elegant-card p-8">
            <h2 className="text-2xl font-bold text-elegant-primary mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
              Earned Badges
            </h2>
            <div className="space-y-4">
              {earnedBadges.map((badge) => (
                <div key={badge.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className={`w-12 h-12 bg-gradient-to-r ${badge.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{badge.name}</h3>
                    <p className="text-gray-600 text-sm">{badge.description}</p>
                    <p className="text-xs text-green-600 font-medium">Earned on {badge.date}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              ))}
            </div>
          </div>

          {/* In Progress Badges */}
          <div className="elegant-card p-8">
            <h2 className="text-2xl font-bold text-elegant-primary mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2 text-blue-500" />
              In Progress
            </h2>
            <div className="space-y-4">
              {unearnedBadges.map((badge) => (
                <div key={badge.id} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${badge.color} rounded-xl flex items-center justify-center shadow-lg opacity-60 flex-shrink-0`}>
                      <badge.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{badge.name}</h3>
                      <p className="text-gray-600 text-sm">{badge.description}</p>
                    </div>
                  </div>
                  {badge.progress && (
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{badge.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                        <div 
                          className="progress-elegant h-2 transition-all duration-1000 ease-out rounded-full"
                          style={{ width: `${badge.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Progress */}
        <div className="elegant-card p-8 mt-8">
          <h2 className="text-2xl font-bold text-elegant-primary mb-6">Achievement Progress</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{achievement.current} / {achievement.target}</span>
                  <span>{Math.round((achievement.current / achievement.target) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner mb-3">
                  <div 
                    className="progress-elegant h-3 transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${(achievement.current / achievement.target) * 100}%` }}
                  ></div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 text-center">
                  <span className="text-sm font-medium text-gray-700">🏆 {achievement.reward}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;

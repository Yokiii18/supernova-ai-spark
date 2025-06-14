
import React from 'react';
import { TrendingUp, Target, Clock, Award, BarChart3, Calendar } from 'lucide-react';

const Progress = () => {
  const progressData = [
    { subject: "Grammar Rules", progress: 85, total: 20, completed: 17 },
    { subject: "Punctuation", progress: 72, total: 15, completed: 11 },
    { subject: "Sentence Structure", progress: 60, total: 12, completed: 7 },
    { subject: "Advanced Topics", progress: 45, total: 18, completed: 8 },
  ];

  const weeklyStats = [
    { day: 'Mon', lessons: 3, time: 45 },
    { day: 'Tue', lessons: 2, time: 30 },
    { day: 'Wed', lessons: 4, time: 60 },
    { day: 'Thu', lessons: 1, time: 15 },
    { day: 'Fri', lessons: 3, time: 45 },
    { day: 'Sat', lessons: 5, time: 75 },
    { day: 'Sun', lessons: 2, time: 30 },
  ];

  const maxLessons = Math.max(...weeklyStats.map(d => d.lessons));

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
            <BarChart3 className="w-5 h-5 text-green-500" />
            <span className="text-elegant-secondary">Learning Analytics</span>
          </div>
          <h1 className="text-4xl font-bold text-elegant-primary mb-4">Your Progress</h1>
          <p className="text-xl text-gray-600">Track your learning journey and celebrate achievements</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="elegant-card p-6 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-elegant-primary mb-2">43</h3>
            <p className="text-gray-600">Lessons Completed</p>
          </div>

          <div className="elegant-card p-6 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-elegant-primary mb-2">7</h3>
            <p className="text-gray-600">Day Streak</p>
          </div>

          <div className="elegant-card p-6 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-elegant-primary mb-2">18h</h3>
            <p className="text-gray-600">Study Time</p>
          </div>

          <div className="elegant-card p-6 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-elegant-primary mb-2">12</h3>
            <p className="text-gray-600">Badges Earned</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subject Progress */}
          <div className="elegant-card p-8">
            <h2 className="text-2xl font-bold text-elegant-primary mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Subject Progress
            </h2>
            <div className="space-y-6">
              {progressData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">{item.subject}</span>
                    <span className="text-sm text-gray-600">{item.completed}/{item.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                    <div 
                      className="progress-elegant h-3 transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm font-medium text-green-600">{item.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="elegant-card p-8">
            <h2 className="text-2xl font-bold text-elegant-primary mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              This Week's Activity
            </h2>
            <div className="space-y-4">
              {weeklyStats.map((day, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 text-center text-sm font-medium text-gray-600">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 shadow-inner">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(day.lessons / maxLessons) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16">{day.lessons} lessons</span>
                    </div>
                    <div className="text-xs text-gray-500">{day.time} minutes</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Great week! You're 23% more active than last week.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="elegant-card p-8 mt-8">
          <h2 className="text-2xl font-bold text-elegant-primary mb-6">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              { title: "Grammar Expert", description: "Completed 50 grammar exercises", date: "2 days ago", type: "milestone" },
              { title: "Perfect Score", description: "Scored 100% on Advanced Punctuation Quiz", date: "1 week ago", type: "achievement" },
              { title: "Consistent Learner", description: "Maintained 7-day learning streak", date: "Ongoing", type: "streak" },
            ].map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  achievement.type === 'milestone' ? 'bg-yellow-400' :
                  achievement.type === 'achievement' ? 'bg-green-400' : 'bg-blue-400'
                } shadow-lg`}></div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600 mb-1">{achievement.description}</p>
                  <p className="text-sm text-gray-500">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

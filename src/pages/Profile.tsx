
import React, { useState } from 'react';
import { User, Edit3, Save, Camera, Award, TrendingUp, Target } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    level: "Intermediate",
    joinDate: "March 2024",
    bio: "Passionate about improving my grammar skills and helping others learn."
  });

  const stats = [
    { label: "Lessons Completed", value: "42", icon: Target, color: "from-blue-400 to-blue-600" },
    { label: "Current Streak", value: "7 days", icon: TrendingUp, color: "from-green-400 to-green-600" },
    { label: "Badges Earned", value: "12", icon: Award, color: "from-purple-400 to-purple-600" },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
    console.log('Profile saved:', profile);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-elegant-primary mb-4">Your Profile</h1>
          <p className="text-xl text-gray-600">Manage your learning journey and achievements</p>
        </div>

        {/* Profile Card */}
        <div className="elegant-card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar Section */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-xl">
                <User className="w-16 h-16 text-white" />
              </div>
              <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-blue-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Camera className="w-5 h-5 text-blue-600" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="elegant-input w-full text-2xl font-bold"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="elegant-input w-full"
                    placeholder="Your Email"
                  />
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    className="elegant-input w-full h-24 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-elegant-primary mb-2">{profile.name}</h2>
                  <p className="text-gray-600 text-lg mb-2">{profile.email}</p>
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 px-4 py-2 rounded-full font-medium shadow-lg mb-4">
                    <span>Level: {profile.level}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{profile.bio}</p>
                  <p className="text-sm text-gray-500">Member since {profile.joinDate}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="elegant-button inline-flex items-center space-x-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="elegant-button-secondary inline-flex items-center space-x-2"
                    >
                      <span>Cancel</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="elegant-button inline-flex items-center space-x-2"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="elegant-card p-6 text-center hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-elegant-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="elegant-card p-8">
          <h3 className="text-2xl font-bold text-elegant-primary mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "Completed Grammar Basics Quiz", time: "2 hours ago", score: "95%" },
              { action: "Earned 'Punctuation Master' Badge", time: "1 day ago", score: null },
              { action: "Finished Advanced Tenses Lesson", time: "3 days ago", score: "88%" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <div>
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
                {activity.score && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    {activity.score}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

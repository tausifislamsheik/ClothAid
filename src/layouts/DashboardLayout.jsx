import { useContext, useState } from 'react';
import { User, Mail, Phone, MapPin, Edit, Camera, Heart, Package, Clock, Bell } from 'lucide-react';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {

    const {user1} = useContext(AuthContext)
  // Sample user data - in real app this would come from backend/context
  const [user] = useState({
    name: "Tausif Islam Sheik",
    email: "tausif.sheik@email.com",
    phone: "+880 1234-567890",
    location: "Dhaka, Bangladesh",
    avatar: null,
    joinDate: "January 2024",
    totalDonations: 15,
    itemsDonated: 47,
    volunteeredHours: 12
  });

  const [activeTab, setActiveTab] = useState('overview');

  const handleUpdateProfile = () => {
    // This would navigate to update profile route in real app
    alert('Redirecting to Update Profile page...');
  };

  const handleAvatarChange = () => {
    // This would handle file upload in real app
    alert('Avatar upload functionality would be implemented here');
  };

  const recentActivities = [
    {
      type: 'donation',
      description: 'Donated 5 winter jackets',
      date: '2 days ago',
      icon: <Package className="h-4 w-4" />
    },
    {
      type: 'volunteer',
      description: 'Volunteered at distribution event',
      date: '1 week ago',
      icon: <Heart className="h-4 w-4" />
    },
    {
      type: 'donation',
      description: 'Donated children\'s clothes',
      date: '2 weeks ago',
      icon: <Package className="h-4 w-4" />
    }
  ];

  const upcomingEvents = [
    {
      title: 'Winter Clothes Distribution',
      date: 'Dec 15, 2024',
      location: 'Dhaka Community Center'
    },
    {
      title: 'Volunteer Training Session',
      date: 'Dec 20, 2024',
      location: 'ClothAid Office'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
          <p className="text-orange-100">Thank you for being part of our mission to help families in need.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  {[
                    { id: 'overview', label: 'Overview', icon: User },
                    { id: 'activity', label: 'Recent Activity', icon: Clock },
                    { id: 'profile', label: 'Profile Details', icon: User }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${
                          activeTab === tab.id
                            ? 'border-orange-500 text-orange-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <Package className="h-8 w-8 text-blue-600" />
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Donations</p>
                            <p className="text-2xl font-bold text-blue-600">{user.totalDonations}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <Heart className="h-8 w-8 text-green-600" />
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Items Donated</p>
                            <p className="text-2xl font-bold text-green-600">{user.itemsDonated}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <Clock className="h-8 w-8 text-purple-600" />
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Volunteer Hours</p>
                            <p className="text-2xl font-bold text-purple-600">{user.volunteeredHours}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Impact</h3>
                      <p className="text-gray-600">
                        Thanks to your {user.totalDonations} donations, you've helped provide clothing to approximately {user.totalDonations * 3} people in need. 
                        Your generosity is making a real difference in our community!
                      </p>
                    </div>
                  </div>
                )}

                {/* Activity Tab */}
                {activeTab === 'activity' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <div className="space-y-3">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className={`p-2 rounded-full ${
                            activity.type === 'donation' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                          }`}>
                            {activity.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                            <p className="text-xs text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
                      <button
                        onClick={handleUpdateProfile}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                        <span>Update Profile</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                          {user.avatar ? (
                            <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                          ) : (
                            <span className="text-3xl font-bold text-orange-600">{user.name.charAt(0)}</span>
                          )}
                        </div>
                        <button
                          onClick={handleAvatarChange}
                          className="absolute bottom-0 right-0 bg-white border-2 border-gray-300 rounded-full p-1 hover:bg-gray-50"
                        >
                          <Camera className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{user.name}</h4>
                        <p className="text-gray-600">Member since {user.joinDate}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <div className="flex items-center space-x-2 text-gray-900">
                            <User className="h-4 w-4 text-gray-400" />
                            <span>{user.name}</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <div className="flex items-center space-x-2 text-gray-900">
                            <Mail className="h-4 w-4 text-gray-400" />
                            <span>{user.email}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <div className="flex items-center space-x-2 text-gray-900">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <div className="flex items-center space-x-2 text-gray-900">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            <span>{user.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Make a Donation
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Schedule Pickup
                </button>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg transition-colors">
                  Find Volunteer Opportunities
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <p className="text-xs text-gray-500">{event.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-6 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Community Hero</h4>
                  <p className="text-sm opacity-90">You've helped 45+ people!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
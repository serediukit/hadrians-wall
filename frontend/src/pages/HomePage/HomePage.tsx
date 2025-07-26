
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import GameIntro from './components/GameIntro';

const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/lobby');
        }
    }, [isAuthenticated, navigate]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
                    {/* Game Introduction */}
                    <GameIntro />

                    {/* Authentication Panel */}
                    <div className="max-w-md mx-auto w-full">
                        <div className="bg-white rounded-lg shadow-xl p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    Welcome to Hadrian's Wall
                                </h2>
                                <p className="text-gray-600">
                                    Join the ultimate Roman frontier strategy game
                                </p>
                            </div>

                            {/* Tab Navigation */}
                            <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
                                <button
                                    onClick={() => setActiveTab('login')}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                                        activeTab === 'login'
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setActiveTab('register')}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                                        activeTab === 'register'
                                            ? 'bg-white text-gray-900 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Forms */}
                            {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
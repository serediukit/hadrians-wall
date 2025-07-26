import React from 'react';
import { Shield, Users, Trophy, Zap } from 'lucide-react';

const GameIntro: React.FC = () => {
    const features = [
        {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: "Strategic Defense",
            description: "Build and fortify Hadrian's Wall against barbarian invasions"
        },
        {
            icon: <Users className="w-8 h-8 text-green-600" />,
            title: "Multiplayer Action",
            description: "Compete with players worldwide in real-time matches"
        },
        {
            icon: <Trophy className="w-8 h-8 text-yellow-600" />,
            title: "Victory Paths",
            description: "Multiple ways to achieve victory through military, economic, or cultural means"
        },
        {
            icon: <Zap className="w-8 h-8 text-purple-600" />,
            title: "Fast-Paced",
            description: "Quick 30-45 minute games with deep strategic decisions"
        }
    ];

    return (
        <div className="text-white space-y-8">
            <div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Hadrian's Wall
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                    Experience the ultimate Roman frontier strategy game. Command legions,
                    build fortifications, and defend the empire's northern border in this
                    thrilling multiplayer board game adaptation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                        <div className="flex-shrink-0">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-300 text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">How to Play</h3>
                <ol className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                        <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">1</span>
                        <span>Recruit soldiers and gather resources</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">2</span>
                        <span>Build walls and defensive structures</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">3</span>
                        <span>Defend against barbarian attacks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">4</span>
                        <span>Score points and claim victory!</span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default GameIntro;
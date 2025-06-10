
import Navigation from '@/components/Navigation';
import { Users, Target, Award, Clock, CheckCircle, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "10+ years of experience in tech leadership and business development."
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b898?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack expert specializing in modern web technologies and AI solutions."
    },
    {
      name: "Mike Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer with expertise in UI/UX and brand development."
    },
    {
      name: "Emily Davis",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Digital marketing expert helping businesses grow their online presence."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver high-quality results that exceed expectations."
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Consistent delivery and dependable support you can count on."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="mountain-gradient mountain-texture text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <img 
            src="/lovable-uploads/89c9a56e-ed3b-48ff-a547-49e2c522d894.png" 
            alt="Hustle Executive Logo" 
            className="h-20 w-auto mx-auto mb-8 drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            About Hustle Executive
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow">
            We're a passionate team of tech enthusiasts dedicated to helping businesses reach new heights through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Founded in 2019, Hustle Executive emerged from a simple belief: every business deserves access to world-class technology solutions. What started as a small team of developers has grown into a comprehensive digital agency serving clients worldwide.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our journey began when our founders recognized the growing gap between rapidly evolving technology and businesses struggling to keep up. We set out to bridge that gap by providing personalized, innovative solutions that drive real results.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to have helped over 500 businesses transform their digital presence, streamline their operations, and achieve sustainable growth through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Hustle Executive. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;

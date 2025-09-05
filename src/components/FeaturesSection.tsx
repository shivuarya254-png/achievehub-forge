import { 
  User, 
  Users, 
  Shield, 
  Activity, 
  FileText, 
  BarChart3, 
  Bell, 
  Database, 
  Trophy 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  const features = [
    {
      icon: User,
      title: 'Student Dashboard',
      description: 'Comprehensive profile management, achievement uploads, and portfolio generator with personalized insights.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Faculty Dashboard',
      description: 'Streamlined approval process, mentoring tools, and detailed analytics for student progress tracking.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Shield,
      title: 'Admin Dashboard',
      description: 'Complete user management, institutional reports, and seamless integration with existing systems.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Activity,
      title: 'Activity Tracker',
      description: 'Track conferences, certifications, extra-curriculars, and academic milestones in real-time.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: FileText,
      title: 'Portfolio Generator',
      description: 'Automatically generate professional PDF portfolios with verified achievements and credentials.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics for NAAC, NIRF, AICTE compliance with detailed institutional insights.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Email and push notifications for deadlines, approvals, and important academic announcements.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Database,
      title: 'LMS/ERP Integration',
      description: 'Seamless integration with existing Learning Management Systems and Enterprise Resource Planning.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Leaderboards, achievement badges, and interactive widgets to boost student engagement.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Everything You Need in One Platform
          </h2>
          <p className="section-subtitle">
            Comprehensive tools for students, faculty, and administration to manage 
            and showcase academic achievements effectively.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeIn 0.6s ease-out forwards'
              }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {feature.description}
              </p>

              {/* CTA */}
              <Button 
                variant="ghost" 
                size="sm"
                className="text-primary hover:text-primary-dark p-0 h-auto font-semibold group-hover:gap-2 transition-all"
              >
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button size="lg" className="btn-primary">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
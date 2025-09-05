import { User, Users, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RoleSection = () => {
  const roles = [
    {
      icon: User,
      title: 'Student',
      subtitle: 'Build Your Digital Portfolio',
      features: [
        'Upload and manage achievements',
        'Generate professional portfolios',
        'Track academic progress',
        'Receive personalized insights',
        'Access career guidance tools'
      ],
      color: 'border-blue-200 hover:border-blue-300',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Faculty',
      subtitle: 'Mentor & Guide Excellence', 
      features: [
        'Review and approve submissions',
        'Monitor student progress',
        'Access analytics dashboard',
        'Provide mentorship feedback',
        'Generate faculty reports'
      ],
      color: 'border-green-200 hover:border-green-300',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Settings,
      title: 'Admin',
      subtitle: 'Manage & Optimize Operations',
      features: [
        'Complete user management',
        'Institutional analytics',
        'System integration controls',
        'Compliance report generation',
        'Platform customization tools'
      ],
      color: 'border-purple-200 hover:border-purple-300',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section id="dashboards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Tailored for Every Role
          </h2>
          <p className="section-subtitle">
            Purpose-built dashboards and tools for students, faculty, and 
            administrators with role-specific features and insights.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`role-card ${role.color}`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'slideUp 0.6s ease-out forwards'
              }}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${role.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                  <role.icon className={`h-8 w-8 ${role.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {role.subtitle}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {role.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground/80 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full btn-outline group"
              >
                Explore {role.title} Dashboard
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Background Decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-20 text-center bg-card rounded-3xl p-12 border border-border shadow-lg animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Student Experience
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              Empower your digital portfolio and track your academic journey.
            </p>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Upload achievements as certificates</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground">Generate professional portfolio PDFs</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-foreground">Track progress with visual analytics</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-foreground">Get faculty feedback and guidance</span>
              </div>
            </div>

            <Button size="lg" className="btn-primary">
              View Student Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleSection;
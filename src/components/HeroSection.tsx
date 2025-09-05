import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { number: '10K+', label: 'Active Students', icon: Users },
    { number: '500+', label: 'Institutions', icon: Award },
    { number: '98.5%', label: 'Success Rate', icon: TrendingUp },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Centralized
              <span className="block text-primary primary-gradient bg-clip-text text-transparent">
                Digital Student
              </span>
              Portfolio
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              All achievements in one verified, sharable hub. Streamline academic records, co-curricular activities, and career development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg"
                className="btn-primary group"
              >
                Student Login
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="btn-outline"
              >
                Faculty/Admin Login
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-slide-up">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border">
              {/* Mock Dashboard Preview */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Student Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive Portfolio</p>
                  </div>
                </div>
                
                {/* Mock Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                    <div className="text-sm font-medium text-foreground">Achievements</div>
                    <div className="text-2xl font-bold text-primary">24</div>
                  </div>
                  <div className="bg-success/5 rounded-lg p-3 border border-success/20">
                    <div className="text-sm font-medium text-foreground">Certificates</div>
                    <div className="text-2xl font-bold text-success">12</div>
                  </div>
                </div>

                {/* Mock Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">Portfolio Completion</span>
                    <span className="text-primary font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                {/* Mock Activity List */}
                <div className="space-y-2">
                  {[
                    'Research Project Completed',
                    'Conference Participation',
                    'Certification Uploaded'
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-lg shadow-lg pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-success rounded-full shadow-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
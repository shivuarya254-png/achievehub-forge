import { Star, Download, Share2, ExternalLink, Award, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AchievementShowcase = () => {
  const achievements = [
    {
      title: 'Best Research Paper Award',
      organization: 'IEEE Conference 2024',
      date: 'March 2024',
      type: 'Research',
      verified: true,
      rating: 4.8,
    },
    {
      title: 'Google Cloud Certified - Professional',
      organization: 'Google Cloud',
      date: 'February 2024',
      type: 'Certification',
      verified: true,
      rating: 4.9,
    },
    {
      title: 'Hackathon Winner - Smart Cities',
      organization: 'TechFest Mumbai',
      date: 'January 2024',
      type: 'Competition',
      verified: true,
      rating: 4.7,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            Showcase Your Achievements
          </h2>
          <p className="section-subtitle">
            Transform your academic and professional milestones into a 
            comprehensive, verifiable digital portfolio that stands out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Student Profile Preview */}
          <div className="animate-slide-up">
            <div className="achievement-card">
              {/* Profile Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">JS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">John Smith</h3>
                  <p className="text-muted-foreground">Computer Science Engineering</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">MIT Institute of Technology</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">24</div>
                  <div className="text-xs text-muted-foreground">Achievements</div>
                </div>
                <div className="text-center p-3 bg-success/5 rounded-lg border border-success/20">
                  <div className="text-2xl font-bold text-success">4.8</div>
                  <div className="text-xs text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center p-3 bg-warning/5 rounded-lg border border-warning/20">
                  <div className="text-2xl font-bold text-warning">12</div>
                  <div className="text-xs text-muted-foreground">Certificates</div>
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-3">Recent Achievements</h4>
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-foreground text-sm truncate">{achievement.title}</h5>
                      <p className="text-xs text-muted-foreground">{achievement.organization}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        {achievement.verified && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-success" />
                            <span className="text-xs text-success">Verified</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Portfolio Actions */}
              <div className="flex space-x-3 mt-6 pt-6 border-t border-border">
                <Button size="sm" className="flex-1 btn-primary">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits & Features */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Professional Digital Portfolio
              </h3>
              <p className="text-muted-foreground mb-6">
                Create a comprehensive, verifiable record of your academic journey, 
                achievements, and professional development that employers and institutions trust.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              {[
                {
                  icon: Award,
                  title: 'Verified Achievements',
                  description: 'All achievements are verified by faculty and institutions for authenticity.',
                },
                {
                  icon: Download,
                  title: 'Professional PDF Generation',
                  description: 'Generate beautiful, formatted portfolios ready for job applications.',
                },
                {
                  icon: Share2,
                  title: 'Easy Sharing',
                  description: 'Share your portfolio via secure links with potential employers.',
                },
                {
                  icon: ExternalLink,
                  title: 'Integration Ready',
                  description: 'Seamlessly integrate with job portals and professional networks.',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" className="btn-primary w-full sm:w-auto">
                Create Your Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;
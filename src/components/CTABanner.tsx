import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative animate-fade-in">
          <div className="cta-banner">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-10 rounded-2xl"></div>
            <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-lg rotate-12 animate-float"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white mr-3 animate-pulse" />
                <span className="text-white/90 text-lg font-medium">
                  Join Thousands of Students
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 leading-tight">
                Start Building Your Verified
                <span className="block">Digital Profile Today!</span>
              </h2>

              <p className="text-xl text-white/90 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of students and institutions already using Smart Student 
                Hub to showcase achievements and streamline academic records.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 group"
                >
                  Get Started Free
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-2 text-white/80">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Free to get started</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">GDPR compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">24/7 support</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">No setup fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
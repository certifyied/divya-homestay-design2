import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 md:py-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-foreground text-sm font-bold">IF</span>
              </div>
              <span className="font-display text-2xl font-semibold tracking-tight">INNERFORM</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              We design with heart — walking every step of the journey alongside our clients, 
              from first sketch to final handover.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Benefits', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>hello@innerform.studio</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Design District<br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 INNERFORM. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm inline-flex items-center gap-1"
              >
                {social}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

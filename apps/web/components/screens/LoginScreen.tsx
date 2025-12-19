import React, { useState } from 'react';
import { Eye, EyeOff, Fingerprint } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Logo } from '../Logo';

interface LoginScreenProps {
  onLogin: () => void;
  onRegister: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background flex flex-col relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="flex-1 flex flex-col justify-center px-6 py-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <Logo size={140} />
          </div>
          <h1 className="text-3xl text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue shopping</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto w-full">
          <div className="space-y-2">
            <Label htmlFor="email">Email or Phone</Label>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or phone"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-11 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 h-11 w-11 hover:bg-transparent"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          <div className="text-right">
            <Button
              type="button"
              variant="link"
              className="text-primary p-0 h-auto"
            >
              Forgot Password?
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full h-11"
            size="lg"
          >
            Sign In
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full h-11"
            size="lg"
          >
            <Fingerprint className="w-5 h-5" />
            Biometric Login
          </Button>
        </form>

        <div className="mt-8 text-center">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Button
            onClick={onRegister}
            variant="link"
            className="text-primary p-0 h-auto"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

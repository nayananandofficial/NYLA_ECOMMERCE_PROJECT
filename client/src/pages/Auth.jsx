import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Mail, User, Apple, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Signup', { email, password, firstName, lastName });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFirstName('');
    setLastName('');
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">FashionHub</h1>
          <p className="text-gray-600 text-lg">Where style meets personality ✨</p>
        </div>

        <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className={cn("text-2xl font-bold transition-all duration-300", isLogin ? "text-pink-600" : "text-purple-600")}>{isLogin ? "Welcome back!" : "Join the community"}</CardTitle>
            <CardDescription className="text-gray-600">{isLogin ? "Sign in to continue your style journey" : "Create your account and discover your style"}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Button variant="outline" className="w-full h-12 bg-white hover:bg-gray-50 border-gray-200 transition-all duration-200 hover:scale-[1.02]" onClick={() => console.log('Google login')}>
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </Button>
            </div>

            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 text-sm text-gray-500">or</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-3 animate-fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input id="firstName" type="text" placeholder="Alex" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="pl-10 h-12 border-gray-200 focus:border-pink-400 focus:ring-pink-400 transition-all duration-200" required={!isLogin} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input id="lastName" type="text" placeholder="Smith" value={lastName} onChange={(e) => setLastName(e.target.value)} className="pl-10 h-12 border-gray-200 focus:border-pink-400 focus:ring-pink-400 transition-all duration-200" required={!isLogin} />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10 h-12 border-gray-200 focus:border-pink-400 focus:ring-pink-400 transition-all duration-200" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pr-10 h-12 border-gray-200 focus:border-pink-400 focus:ring-pink-400 transition-all duration-200" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</Label>
                  <div className="relative">
                    <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="pr-10 h-12 border-gray-200 focus:border-pink-400 focus:ring-pink-400 transition-all duration-200" required={!isLogin} />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <button type="button" className="text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors" onClick={() => console.log('Forgot password')}>
                    Forgot password?
                  </button>
                </div>
              )}

              <Button type="submit" className={cn("w-full h-12 font-semibold text-white transition-all duration-200 hover:scale-[1.02] transform", isLogin ? "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700" : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700")}>{isLogin ? "Sign In" : "Create Account"}</Button>
            </form>

            <div className="text-center">
              <span className="text-gray-600">{isLogin ? "Don't have an account? " : "Already have an account? "}</span>
              <button onClick={toggleMode} className={cn("font-semibold transition-all duration-200 hover:scale-105", isLogin ? "text-purple-600 hover:text-purple-700" : "text-pink-600 hover:text-pink-700")}>{isLogin ? "Sign up" : "Sign in"}</button>
            </div>

            {!isLogin && (
              <p className="text-xs text-gray-500 text-center animate-fade-in">
                By creating an account, you agree to our <a href="#" className="text-pink-600 hover:text-pink-700 font-medium">Terms of Service</a> and <a href="#" className="text-pink-600 hover:text-pink-700 font-medium">Privacy Policy</a>
              </p>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>Join thousands of fashion enthusiasts 💫</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

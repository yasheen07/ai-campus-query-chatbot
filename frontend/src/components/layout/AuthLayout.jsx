import AnimatedCard from '../ui/AnimatedCard';

const AuthLayout = ({ children, title }) => {
  return (
    <div className="main-container">
      <AnimatedCard className="w-11/12 md:w-full max-w-md">
        <div className="text-center">
          <img src="/src/assets/jmc-logo.svg" alt="Jamal Mohamed College Logo" className="w-24 h-24 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-text-gray mb-6">{title}</h1> {/* Changed text color */}
        </div>
        {children}
      </AnimatedCard>
    </div>
  );
};

export default AuthLayout;
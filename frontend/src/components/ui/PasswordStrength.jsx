const PasswordStrength = ({ password }) => {
  const getStrength = () => {
    let score = 0;
    if (!password) return 0; // Return 0 for empty password

    // Add points for length
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Add points for character types
    if (/[a-z]/.test(password)) score += 1; // Lowercase letters
    if (/[A-Z]/.test(password)) score += 1; // Uppercase letters
    if (/[0-9]/.test(password)) score += 1; // Numbers
    if (/[^a-zA-Z0-9\s]/.test(password)) score += 1; // Special characters (excluding whitespace)

    return Math.min(score, 5); // Max score of 5
  };

  const strength = getStrength();
  const width = (strength / 5) * 100; // Calculate percentage width

  // Determine the color class based on strength
  const getProgressClass = () => {
    if (strength === 0) return 'bg-gray-400';
    if (strength <= 1) return 'bg-red-400'; // Very weak
    if (strength <= 2) return 'bg-yellow-400'; // Weak
    if (strength <= 3) return 'bg-accent'; // Fair - using soft light green
    if (strength <= 4) return 'bg-green-500'; // Good
    if (strength >= 5) return 'bg-primary'; // Strong - using College Green
    return 'bg-gray-400'; // Default
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full transition-all duration-300 ${getProgressClass()}`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default PasswordStrength;
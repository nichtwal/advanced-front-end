import React from "react";
import { Button } from "../../../../shared/ui/Button";
interface BugButtonProps {
  className?: string;
}
const BugButton: React.FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = React.useState(false);
  const onThrow = () => {
    setError((prev) => !prev);
  };
  React.useEffect(() => {
  if (error) {
    throw new Error();
  }
  }, [error]);
  return <Button onClick={onThrow}>throw error</Button>;
};
export default BugButton;

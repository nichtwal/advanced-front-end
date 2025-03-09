import React, { Suspense } from "react";
import { PageError } from "../../../../widgets/page-error";
import { PageLoader } from "../../../../shared/ui/page-loader";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }
  render() {
    const { hasError } = this.state,
      { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback={<PageLoader />}>
          <PageError />
        </Suspense>
      );
    }
    return children;
  }
}

export default ErrorBoundary;

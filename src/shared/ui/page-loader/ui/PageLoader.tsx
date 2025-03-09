import { classNames } from "../../../lib/classNames/classNames";
import cls from "./style.module.scss";
interface PageLoaderProps {
className?: string;
}
const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
  return (
 <div className={classNames(cls.PageLoader, {}, [className ?? ""])}>
    </div>
  );
};
export default PageLoader;
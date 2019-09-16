import styles from './index.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>
          <Link to="/templates">模板管理</Link>
        </li>
        <li>
          <Link to="/products">产品管理</Link>
        </li>
        <li>
          组件管理
        </li>
      </ul>
    </div>
  );
}

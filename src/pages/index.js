import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <li>
          组件管理
        </li>
        <li>
          模板管理
        </li>
      </ul>
    </div>
  );
}

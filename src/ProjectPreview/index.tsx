import styles from './styles.module.css';

export default function ProjectPreview(props: {
    title: string;
    description: string;
    image: string;
}) {
    return <div className={styles.projectPreview}>
        <img src="/lissajousextract.png" alt="" className={styles.projectImage} />
        <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>{props.title}</div>
            <p className={styles.projectDescription}>{props.description}</p>
        </div>

    </div>
}
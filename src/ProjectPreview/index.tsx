import styles from './styles.module.css';

export default function ProjectPreview(props: {
    title: string;
    description: string;
    image: string;
    impact?: string;
    href: string;
}) {
    return <a className={styles.projectPreview}
        href={props.href}
        target="_blank"
    >
        <img src={props.image} alt="" className={styles.projectImage} />
        <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>{props.title}</div>
            <p className={styles.projectDescription}>{props.description}</p>
            {props.impact && <div className={styles.projectImpact}>{props.impact}</div>}
        </div>

    </a>
}
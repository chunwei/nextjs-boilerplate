import styles from './halo-border.module.css'
export function HaloBorder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={styles.PromptEffectContainer} {...props}>
      <defs>
        <linearGradient
          id="line-gradient"
          x1="20%"
          y1="0%"
          x2="-14%"
          y2="10%"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-45)"
        >
          <stop offset="0%" stopColor="#1488fc" stopOpacity="0%"></stop>
          <stop offset="40%" stopColor="#1488fc" stopOpacity="80%"></stop>
          <stop offset="50%" stopColor="#1488fc" stopOpacity="80%"></stop>
          <stop offset="100%" stopColor="#1488fc" stopOpacity="0%"></stop>
        </linearGradient>
        <linearGradient id="shine-gradient">
          <stop offset="0%" stopColor="white" stopOpacity="0%"></stop>
          <stop offset="40%" stopColor="#8adaff" stopOpacity="80%"></stop>
          <stop offset="50%" stopColor="#8adaff" stopOpacity="80%"></stop>
          <stop offset="100%" stopColor="white" stopOpacity="0%"></stop>
        </linearGradient>
      </defs>
      <rect
        className={styles.PromptEffectLine}
        pathLength="100"
        strokeLinecap="round"
      ></rect>
      <rect
        className={styles.PromptShine}
        x="48"
        // y="24"
        width="70"
        height="1"
      ></rect>
    </svg>
  )
}

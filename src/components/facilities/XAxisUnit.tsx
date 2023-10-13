import { FC } from "react"
import classNames from "classnames/bind"
import styles from "@src/components/facilities/xAxisUnit.module.css"
const cx = classNames.bind(styles)

export const XAxisUnit: FC<Props> = ({ label, positionX }) => {
  return (
    <div className={cx("root")} style={{ left: `${positionX}px` }}>
      <div className={cx("stick")}></div>
      <div className={cx("label")}>{label}</div>
    </div>
  )
}

type Props = {
  label: string
  positionX: number
}

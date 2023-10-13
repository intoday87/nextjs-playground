import { FC } from "react"
import Image from "next/image"
import classNames from "classnames/bind"
import styles from "@src/components/facilities/facility.module.css"

const cx = classNames.bind(styles)

export const Facility: FC<Props> = ({
  iconSource,
  alt,
  label,
  left = 0,
  color = "white",
  textColor = "black",
  zIndex = 0,
  height = 18,
}) => {
  return (
    <div className={cx("root")} style={{ left, zIndex }}>
      <div className={cx("icon-label-box")} style={{ backgroundColor: color }}>
        <Image src={iconSource} alt={alt} width="11" height="12" />
        <span className={cx("label")}>{label}</span>
      </div>
      <div
        className={cx("orthogonal-line")}
        style={{ borderColor: color, height: `${height}px` }}
      />
      <div className={cx("dot")} style={{ backgroundColor: color }} />
    </div>
  )
}

type Props = {
  iconSource: string
  alt: string
  label: string
  color: string
  textColor?: string
  left: number
  zIndex?: number
  height: number
}

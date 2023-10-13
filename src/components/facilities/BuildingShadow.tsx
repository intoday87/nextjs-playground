import { FC, PropsWithChildren } from "react"
import classNames from "classnames/bind"
import styles from "@src/components/facilities/buildingShadow.module.css"
import Image from "next/image"

const cx = classNames.bind(styles)

export const BuildingShadow: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={cx("root")}>
      <Image
        src="/walking-person.svg"
        alt="Working Person"
        className={cx("walking-person")}
        width="10"
        height="16"
      />
      {children}
    </div>
  )
}

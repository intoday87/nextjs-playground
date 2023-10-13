import { FC } from "react"
import Image from "next/image"
import classNames from "classnames/bind"
import styles from "@src/components/facilities/index.module.css"
import { BuildingShadow } from "@src/components/facilities/BuildingShadow"
import { XAxisUnit } from "@src/components/facilities/XAxisUnit"
import { Facility } from "@src/components/facilities/Facility"

const cx = classNames.bind(styles)

export const Facilities: FC = () => {
  return (
    <div className={cx("root")}>
      <BuildingShadow>
        <Facility
          left={55}
          color="#ACC2E8"
          iconSource="/bus-icon.svg"
          label="버스정류장"
          alt="버스정류장"
          height={18}
        />
        <Facility
          left={66}
          color="#F1E6AD"
          iconSource="/supermarket-icon.svg"
          label="대형마트"
          alt="대형마트"
          height={78}
        />
        <Facility
          left={120}
          color="#AFD3EE"
          iconSource="/subway-icon.svg"
          label="지하철"
          alt="지하철"
          height={48}
        />
        <Facility
          left={147.5}
          color="#D8CDED"
          iconSource="/drug-store-icon.svg"
          label="약국"
          alt="약국"
          height={108}
        />
        <Facility
          left={203}
          color="#E7C2D8"
          iconSource="/convenience-store-icon.svg"
          label="편의점"
          alt="편의점"
          height={78}
        />
      </BuildingShadow>
      <Image
        className={cx("house")}
        src="/house.svg"
        alt="house"
        width={16.6}
        height={18.6}
      />
      <div className={cx("unit-box")}>
        <XAxisUnit label="1분" positionX={55} />
      </div>
    </div>
  )
}

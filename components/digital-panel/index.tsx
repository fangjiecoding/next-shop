import { memo } from "react";
import classNames from "classnames";
import Image from "next/image";

//type
import type { FC } from "react";
import styles from "./index.module.scss";
interface IProps {
	itemData?: any;
}

const DigitalPanel: FC<IProps> = (props) => {
	const { itemData } = props;
	return (
		<div className={styles["digital-panel"]}>
			<div className={styles["panel-left"]}>
				<div className={styles["info"]}>
					<Image
						className={styles.icon}
						src={itemData.digitalIcon}
						width={32}
						height={32}
						alt="hy next"
					></Image>
					<div className={styles.name}>{itemData.name}</div>
				</div>
				<div className={styles.desc}>{itemData.desc}</div>
				<a
					href="https://music.163.com/v/w/album/rank"
					className={styles["buy-now"]}
				>
					{itemData.buyNow}
				</a>
			</div>
			<div className={styles["panel-right"]}>
				<Image
					className={styles.image1}
					src={itemData.picStr1}
					width={100}
					height={100}
					alt="hy next"
				></Image>
				<Image
					className={styles.image2}
					src={itemData.picStr2}
					width={120}
					height={120}
					alt="hy next"
				></Image>
				<i className={styles.image}></i>
			</div>
		</div>
	);
};

export default memo(DigitalPanel);
DigitalPanel.displayName = "DigitalPanel";

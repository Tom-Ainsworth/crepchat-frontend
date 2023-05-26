// Internal
import Image from "next/image";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45, text }) => {
	return (
		<span>
			<Image
				className={styles.Avatar}
				src={src}
				height={height}
				width={height}
				alt="avatar"
				unoptimized
			/>
			{text}
		</span>
	);
};

export default Avatar;

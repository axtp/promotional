import Link from "next/link";
import Image from 'next/image';
import styles from './stickyImage.module.css'
import AxtLogo from '../../assets/image/axt_logo.svg'
export const StickyLogo = () => {
  return (
    <Link href="https://axtp.com.br" target="_blank">
      <Image src={AxtLogo} width={128} className={styles.stickyImage}/>
    </Link>
  )
}

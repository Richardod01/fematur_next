"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./_header.module.scss";

function HeaderComponent() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <Link href="/" aria-label="Ir al inicio de FEMATUR">
            <Image
              src="/fematur.svg"
              alt="Fematur Logo"
              className={styles.logo_fematur}
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <nav className={styles.navbar}>
          <Link
            href="/council"
            className={`${styles.link} ${pathname === "/council" ? styles.active : ""}`}
          >
            Consejo
          </Link>

          <Link
            href="/filiales"
            className={`${styles.link} ${pathname === "/filiales" ? styles.active : ""}`}
          >
            Filiales
          </Link>

          <Link
            href="/socios"
            className={`${styles.link} ${pathname === "/socios" ? styles.active : ""}`}
          >
            Socios
          </Link>

          <Link
            href="/noticias"
            className={`${styles.link} ${pathname === "/noticias" ? styles.active : ""}`}
          >
            Noticias
          </Link>

          <Link
            href="/eventos"
            className={`${styles.link} ${pathname === "/eventos" ? styles.active : ""}`}
          >
            Eventos
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;

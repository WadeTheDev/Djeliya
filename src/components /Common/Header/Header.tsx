"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import RoundButton from "../HeaderButton/RoundButton";
import { Link, useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/animations";
import { useCartStore } from "@/store/cart.store";
import { flipAnimate } from "@/utils/flip";
import CartPanel from "@/components /CartPanel/CartPanel";
import { usePathname, useSearchParams } from "next/navigation";

type CartPhase = "closed" | "opening" | "open" | "closing";

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

const Header = () => {
  const router = useTransitionRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const countItems = useCartStore((s) => s.countItems());

  const cartOpen = useCartStore((s) => s.isOpen);
  const openCart = useCartStore((s) => s.open);
  const closeCart = useCartStore((s) => s.close);

  const [cartPhase, setCartPhase] = useState<CartPhase>("closed");

  // synchro si refresh/persist te met isOpen à true
  useEffect(() => {
    if (cartOpen && cartPhase === "closed") setCartPhase("open");
    if (!cartOpen && cartPhase === "open") setCartPhase("closed");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartOpen]);

  const headerCardRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // focus auto search
  useEffect(() => {
    if (isSearchOpen) setTimeout(() => inputRef.current?.focus(), 0);
  }, [isSearchOpen]);

  // lock scroll quand panier open
  useEffect(() => {
    if (!cartOpen) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };

  }, [cartOpen]);

  // ESC ferme panier (prioritaire)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (cartOpen) onCloseCart();
        else if (isSearchOpen) setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartOpen, isSearchOpen]);

  const toggleSearch = () => {
    if (!isSearchOpen) setIsMenuOpen(false);
    setIsSearchOpen((v) => !v);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setIsSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const onOpenCart = async () => {
    // ferme les dropdowns
    setIsMenuOpen(false);
    setIsSearchOpen(false);

    const el = headerCardRef.current;
    if (!el) return openCart();

    // 1) fade out du contenu header
    setCartPhase("opening");
    await wait(220);

    // 2) morph FLIP (openCart pendant mutate)
    await flipAnimate(el, () => openCart());

    // 3) fade in du contenu panier
    setCartPhase("open");
  };

  const onCloseCart = async () => {
    const el = headerCardRef.current;
    if (!el) return closeCart();

    // 1) fade out du contenu panier
    setCartPhase("closing");
    await wait(220);

    // 2) morph FLIP (closeCart pendant mutate)
    await flipAnimate(el, () => closeCart());

    // 3) fade in du contenu header
    setCartPhase("closed");
  };

  const headerHidden =
    cartPhase === "opening" || cartPhase === "open" || cartPhase === "closing";

  const cartVisible = cartPhase === "open";

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // URL courante (path + query)
  const currentUrl = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;

  const safePush = useCallback(
    (to: string, opts?: { compareQuery?: boolean }) => {
      // compareQuery: false => compare uniquement le pathname (souvent ce que tu veux pour /shop, /about, /)
      const compareQuery = opts?.compareQuery ?? false;

      const cur = compareQuery ? currentUrl : pathname;
      const target = compareQuery ? to : to.split("?")[0];

      if (cur === target) return; // ✅ déjà dessus → pas de navigation

      router.push(to, { onTransitionReady: slideInOut });
    },
    [router, pathname, currentUrl]
  );


  return (
    <header className={`${styles.mainContainer} ${cartOpen ? styles.mainContainerCart : ""}`}>
      {/* overlay */}
      <div
        className={`${styles.overlay} ${cartOpen ? styles.overlayOpen : ""}`}
        onMouseDown={onCloseCart}
        aria-hidden
      />

      <div
        className={`${styles.header} ${cartOpen ? styles.cartOpen : ""}`}
        ref={(node) => {
          headerCardRef.current = node;
        }}
      >
        {/* ===== HEADER CONTENT (fade out first) ===== */}
        <div
          className={`${styles.headerInner} ${headerHidden ? styles.headerInnerHidden : ""}`}
          aria-hidden={cartOpen}
        >
          {/* Desktop links */}
          <div className={styles.links}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                safePush("/shop"); // compare pathname only
              }}
              scroll={false}
              href="/shop"
            >
              <p>Au menu</p>
            </Link>

            <Link
              onClick={(e) => {
                e.preventDefault();
                safePush("/about"); // compare pathname only
              }}
              scroll={false}
              href="/about"
            >
              <p>À propos</p>
            </Link>
          </div>

          <Link
            onClick={(e) => {
              e.preventDefault();
              safePush("/"); // compare pathname only
            }}
            scroll={false}
            href="/"
            className={styles.brand}
          >
            <h3>Djeliya</h3>
          </Link>

          <div className={styles.items}>
            <RoundButton
              href="/auth"
              text="Connexion"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                router.push("/auth", { onTransitionReady: slideInOut });
              }}
            />

            <button
              type="button"
              className={styles.iconBtn}
              aria-label={isSearchOpen ? "Fermer la recherche" : "Ouvrir la recherche"}
              aria-expanded={isSearchOpen}
              onClick={toggleSearch}
            >
              <img src="/img/search.png" alt="" />
            </button>

            <button
              type="button"
              className={styles.cartBtn}
              aria-label="Ouvrir le panier"
              onClick={onOpenCart}
            >
              <img src="/img/cart.png" alt="" />
              {countItems > 0 && <span className={styles.badge}>{countItems}</span>}
            </button>
          </div>

          {/* Mobile */}
          <div className={styles.mobileRight}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label={isSearchOpen ? "Fermer la recherche" : "Ouvrir la recherche"}
              aria-expanded={isSearchOpen}
              onClick={toggleSearch}
            >
              <img src="/img/search.png" alt="" />
            </button>

            <button
              type="button"
              className={styles.cartBtn}
              aria-label="Ouvrir le panier"
              onClick={onOpenCart}
            >
              <img src="/img/cart.png" alt="" />
              {countItems > 0 && <span className={styles.badge}>{countItems}</span>}
            </button>

            <button
              type="button"
              className={styles.burger}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              onClick={() => {
                setIsSearchOpen(false);
                setIsMenuOpen((v) => !v);
              }}
            >
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </button>
          </div>

          <div className={`${styles.searchRow} ${isSearchOpen ? styles.searchOpen : ""}`}>
            <form className={styles.searchForm} onSubmit={onSubmit}>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un produit..."
                aria-label="Rechercher"
              />
              <button type="submit">OK</button>
            </form>
          </div>
        </div>

        {/* ===== CART CONTENT (fade in after FLIP) ===== */}
        <div
          className={`${styles.cartInner} ${cartVisible ? styles.cartInnerVisible : ""}`}
          aria-hidden={!cartOpen}
        >
          {cartOpen && (
            <>
              <button
                type="button"
                className={styles.cartClose}
                onClick={onCloseCart}
                aria-label="Fermer le panier"
              >
                ✕
              </button>
              <CartPanel />
            </>
          )}
        </div>
      </div>

      {/* menu mobile (tu peux le garder, caché quand cartOpen via css) */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.openMenu : ""}`}>
        <Link scroll={false} href="/shop">
          <p>Au menu</p>
        </Link>
        <Link scroll={false} href="/about">
          <p>À propos</p>
        </Link>
        <RoundButton
          href="/auth"
          text="Connexion"
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            safePush("/auth"); // compare pathname only
          }}
        />
      </div>
    </header>
  );
};

export default Header;
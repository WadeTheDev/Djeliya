"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Header.module.scss";
import RoundButton from "../HeaderButton/RoundButton";
import { Link, useTransitionRouter } from "next-view-transitions";
import { zoomTransition } from "@/animations";
import { useCartStore } from "@/store/cart.store";
import { flipAnimate } from "@/utils/flip";
import { usePathname, useSearchParams } from "next/navigation";
import type { Product } from "@/domain/product";
import { productsMock } from "@/mock/products";
import SearchPanel from "@/components /SearchPanel/SearchPanel";
import CartPanel from "@/components /CartPanel/CartPanel";

type CartPhase = "closed" | "opening" | "open" | "closing";
type SearchPhase = "closed" | "opening" | "open" | "closing";

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const searchProducts = (products: Product[], query: string) => {





  const q = normalize(query);
  if (!q) return [];

  return products.filter((product) => {
    const haystack = normalize(
      [
        product.name,
        product.slug,
        product.quote,
        product.description,
        product.shortDescription,
        product.details.ingredients.join(" "),
      ].join(" ")
    );

    return haystack.includes(q);
  });
};

const Header = () => {
  const router = useTransitionRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchPhase, setSearchPhase] = useState<SearchPhase>("closed");

  const countItems = useCartStore((s) => s.countItems());

  const cartOpen = useCartStore((s) => s.isOpen);
  const openCart = useCartStore((s) => s.open);
  const closeCart = useCartStore((s) => s.close);

  const [cartPhase, setCartPhase] = useState<CartPhase>("closed");

  useEffect(() => {
    if (cartOpen && cartPhase === "closed") setCartPhase("open");
    if (!cartOpen && cartPhase === "open") setCartPhase("closed");
  }, [cartOpen, cartPhase]);

  useEffect(() => {
    if (searchModalOpen && searchPhase === "closed") setSearchPhase("open");
    if (!searchModalOpen && searchPhase === "open") setSearchPhase("closed");
  }, [searchModalOpen, searchPhase]);

  const headerCardRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchResults = useMemo(
    () => searchProducts(productsMock, submittedQuery),
    [submittedQuery]
  );

  useEffect(() => {
    if (isSearchOpen) setTimeout(() => inputRef.current?.focus(), 0);
  }, [isSearchOpen]);

  const panelOpen = cartOpen || searchModalOpen;

  useEffect(() => {
    if (!panelOpen) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [panelOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;

      if (cartOpen) {
        onCloseCart();
        return;
      }

      if (searchModalOpen) {
        onCloseSearch();
        return;
      }

      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [cartOpen, searchModalOpen, isSearchOpen]);

  const toggleSearch = () => {
    if (panelOpen) return;
    if (!isSearchOpen) setIsMenuOpen(false);
    setIsSearchOpen((v) => !v);
  };

  const onOpenSearch = async (nextQuery: string) => {
    if (cartOpen || searchModalOpen) return;

    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setSubmittedQuery(nextQuery);

    const el = headerCardRef.current;
    if (!el) {
      setSearchModalOpen(true);
      return;
    }

    setSearchPhase("opening");
    await wait(220);
    await flipAnimate(el, () => setSearchModalOpen(true));
    setSearchPhase("open");
  };

  const onCloseSearch = async () => {
    const el = headerCardRef.current;
    if (!el) {
      setSearchModalOpen(false);
      return;
    }

    setSearchPhase("closing");
    await wait(220);
    await flipAnimate(el, () => setSearchModalOpen(false));
    setSearchPhase("closed");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    await onOpenSearch(q);
  };

  const onOpenCart = async () => {
    if (searchModalOpen || cartOpen) return;

    setIsMenuOpen(false);
    setIsSearchOpen(false);

    const el = headerCardRef.current;
    if (!el) return openCart();

    setCartPhase("opening");
    await wait(220);
    await flipAnimate(el, () => openCart());
    setCartPhase("open");
  };

  const onCloseCart = async () => {
    const el = headerCardRef.current;
    if (!el) return closeCart();

    setCartPhase("closing");
    await wait(220);
    await flipAnimate(el, () => closeCart());
    setCartPhase("closed");
  };

  const headerHidden =
    cartPhase === "opening" ||
    cartPhase === "open" ||
    cartPhase === "closing" ||
    searchPhase === "opening" ||
    searchPhase === "open" ||
    searchPhase === "closing";

  const cartVisible = cartPhase === "open";
  const searchVisible = searchPhase === "open";

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentUrl = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;

  const safePush = useCallback(
    (to: string, opts?: { compareQuery?: boolean }) => {
      setIsMenuOpen(false);
      setIsSearchOpen(false);

      const compareQuery = opts?.compareQuery ?? false;
      const cur = compareQuery ? currentUrl : pathname;
      const target = compareQuery ? to : to.split("?")[0];

      if (cur === target) return;

      router.push(to, { onTransitionReady: zoomTransition });
    },
    [router, pathname, currentUrl]
  );

  const onSelectSearchResult = useCallback(
    async (slug: string) => {
      await onCloseSearch();
      router.push(`/product/${slug}`, { onTransitionReady: zoomTransition });
    },
    [router]
  );

  return (
    <header
      className={`${styles.mainContainer} ${panelOpen ? styles.mainContainerCart : ""}`}
    >
      <div
        className={`${styles.overlay} ${panelOpen ? styles.overlayOpen : ""}`}
        onMouseDown={() => {
          if (cartOpen) onCloseCart();
          else if (searchModalOpen) onCloseSearch();
        }}
        aria-hidden
      />

      <div
        className={`${styles.header} ${cartOpen ? styles.cartOpen : ""} ${searchModalOpen ? styles.searchOpenPanel : ""}`}
        ref={(node) => {
          headerCardRef.current = node;
        }}
      >
        <div
          className={`${styles.headerInner} ${headerHidden ? styles.headerInnerHidden : ""}`}
          aria-hidden={panelOpen}
        >
          <div className={styles.links}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                safePush("/shop");
              }}
              scroll={false}
              href="/shop"
            >
              <p>Au menu</p>
            </Link>

            <Link
              onClick={(e) => {
                e.preventDefault();
                safePush("/about");
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
              safePush("/");
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

        <div
          className={`${styles.searchInner} ${searchVisible ? styles.searchInnerVisible : ""}`}
          aria-hidden={!searchModalOpen}
        >
          {searchModalOpen && (
            <>
              <button
                type="button"
                className={styles.searchClose}
                onClick={onCloseSearch}
                aria-label="Fermer la recherche"
              >
                ✕
              </button>

              <SearchPanel
                query={submittedQuery}
                results={searchResults}
                onSelect={onSelectSearchResult}
              />
            </>
          )}
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.openMenu : ""}`}>
        <Link
          scroll={false}
          href="/shop"
          onClick={(e) => {
            e.preventDefault();
            safePush("/shop");
          }}
        >
          <p>Au menu</p>
        </Link>

        <Link
          scroll={false}
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            safePush("/about");
          }}
        >
          <p>À propos</p>
        </Link>

        <RoundButton
          href="/auth"
          text="Connexion"
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            safePush("/auth");
          }}
        />
      </div>
    </header>
  );
};

export default Header;
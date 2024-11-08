// Imports nécessaires
import { useContext, useEffect, useState } from "react"; // Suppression de React car non utilisé
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  // Récupération des produits depuis le contexte
  const { products, search } = useContext(ShopContext);

  // États pour gérer l'interface et les filtres
  const [isLoading, setIsLoading] = useState(true); // État de chargement
  const [showFilter, setShowFilter] = useState(true); // Visibilité du panneau de filtres
  const [filterProduct, setFilterProduct] = useState([]); // Liste des produits filtrés
  const [categorie, setCategorie] = useState([]); // Filtres de catégories sélectionnés
  const [subCategorie, setSubCategorie] = useState([]); // Filtres de sous-catégories sélectionnés

  const [shortByPrice, setShortByPrice] = useState("relevant"); // Option de tri par prix

  // Gestion des filtres de catégories
  function toggleCategorie(e) {
    if (categorie.includes(e.target.value)) {
      // Retire la catégorie si déjà sélectionnée
      setCategorie((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      // Ajoute la catégorie si non sélectionnée
      setCategorie((prev) => [...prev, e.target.value]);
    }
  }

  // Gestion des filtres de sous-catégories
  function toggleSubCategorie(e) {
    if (subCategorie.includes(e.target.value)) {
      // Retire la sous-catégorie si déjà sélectionnée
      setSubCategorie((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      // Ajoute la sous-catégorie si non sélectionnée
      setSubCategorie((prev) => [...prev, e.target.value]);
    }
  }

  // Application des filtres sur les produits
  function applyFilter() {
    setIsLoading(true);
    let copyProduct = products;

    // Filtre par catégorie
    if (categorie.length > 0) {
      copyProduct = copyProduct.filter((item) =>
        categorie.includes(item.category)
      );
    }

    // Filtre par sous-catégorie
    if (subCategorie.length > 0) {
      copyProduct = copyProduct.filter((item) =>
        subCategorie.includes(item.subCategory)
      );
    }

    // Filtre par recherche
    if (search.trim() !== "") {
      copyProduct = copyProduct.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProduct(copyProduct);
    setIsLoading(false);
  }

  // Toggle pour afficher/masquer le panneau de filtres (mobile)
  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Initialisation des produits au chargement
  useEffect(() => {
    const initializeProducts = async () => {
      setIsLoading(true);
      try {
        setFilterProduct(products);
      } finally {
        setIsLoading(false);
      }
    };

    initializeProducts();
  }, []);

  // Applique les filtres quand les critères changent
  useEffect(() => {
    applyFilter();
  }, [categorie, subCategorie, search]);

  // Gestion du tri par prix
  function handleSort() {
    if (shortByPrice === "relevant") {
      applyFilter();
      return;
    }

    // Tri des produits par prix (croissant ou décroissant)
    const shortProduct = [...filterProduct];
    const sorted = shortProduct.sort((a, b) =>
      shortByPrice === "low-high" ? a.price - b.price : b.price - a.price
    );
    setFilterProduct(sorted);
  }

  // Applique le tri quand l'option change
  useEffect(() => {
    handleSort();
  }, [shortByPrice]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Option */}
        <div className="min-w-60">
          <p
            onClick={handleFilter}
            className="my-2 text-xl items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={`h-3 sm:hidden transition-all ease-in-out ${
                showFilter ? "rotate-90 " : ""
              } `}
              alt=""
            />
          </p>
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } `}
          >
            <p className="mb-3 text-sm font-meduim">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-400">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategorie}
                />{" "}
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategorie}
                />{" "}
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategorie}
                />{" "}
                Kids
              </p>
            </div>
          </div>

          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 mb-4 sm:mb-0 ${
              showFilter ? "" : "hidden"
            } `}
          >
            <p className="mb-3 text-sm font-meduim">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-400">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggleSubCategorie}
                />{" "}
                Topwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSubCategorie}
                />{" "}
                Bottomwear
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSubCategorie}
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTION"} />
            <select
              onChange={(e) => {
                setShortByPrice(e.target.value);
              }}
              className="border-2 border-gray-200 text-sm px-2"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              {filterProduct.map((item, index) => (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Collection;

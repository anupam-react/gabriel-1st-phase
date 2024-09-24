import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiData, fetchApiData, updateApiData } from "../utiils";
import { successToast, warnToast } from "../components/Toast";

const useProduct = () => {
  const [openSuccess, setSuccess] = useState(false);
  const [openSuccess1, setSuccess1] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openHighlights, setOpenHighlights] = useState(false);
  const [range, setRange] = useState([0, 100]);
  const [range1, setRange1] = useState([0, 10000]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [allergens, setAllergens] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dimension, setDimension] = useState("");
  const [shippingInfo, setShippingInfo] = useState("");
  const [returnPolicy, setReturnPolicy] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productSize, setProductSize] = useState("");
  const [online, setOnline] = useState("yes");
  const [inStore, setInStore] = useState("yes");
  const [keywords, setKeywords] = useState("");

  const [outletId, setOutletId] = useState([]);
  const [selectedOutlate, setSelectOutlate] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [selectedCat, setCat] = useState(null);
  const [selectedSubCat, setSubCat] = useState(null);

  const [productInfo, setProdInfo] = useState([]);

  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  async function getProduct(search="", fromDate="", toDate="", page=1, limit=1000, maxStock="", minStock="", maxPrice="", minPrice="", categoryId ="", subCategoryId="") {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getProductByToken?search=${search}&fromDate=${fromDate}&toDate=${toDate}&page=${page}&limit=${limit}&maxStock=${maxStock}&minStock=${minStock}&maxPrice=${maxPrice}&minPrice=${minPrice}&categoryId=${categoryId}&subCategoryId=${subCategoryId}`
    );
    setProduct(data?.data);
  }

  async function fetchCategory() {
    const data = await fetchApiData(
      "https://money-chat.com/api/api/v1/admin/Category/allCategory"
    );
    setCategory(data?.data);
  }
  async function fetchSubCategory(id) {
    if (id !== "") {
      const data = await fetchApiData(
        `https://money-chat.com/api/api/v1/SubCategory/allSubcategoryById/${id}`
      );
      setSubcategory(data?.data);
    }
  }

  const getProductById = async (id) => {
    const data = await fetchApiData(
      `https://money-chat.com/api/api/v1/brandLoyalty/getProductById/${id}`
    );
    setProdInfo(data?.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleOutlate = (event) => {
    console.log(event)
    setSelectOutlate(event);
    setOutletId(event?.map((data)=> data?.value));
  };

  const handleCategory = (event) => {
    setCat(event);
    setCategoryId(event.value);
    fetchSubCategory(event.value);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleCreateProduct = async (event) => {
    console.log(image , name , description , nutrition , sku , price , brand , quantity , dimension , returnPolicy , shippingInfo, productColor, productSize , online , inStore , keywords , outletId , categoryId , subCategoryId)
    event.preventDefault();
    if (!image || !name || !description || !nutrition || !sku || !price || !brand || !quantity || !dimension || !returnPolicy || 
      !shippingInfo || !productColor || !productSize || !online || !inStore || !keywords || !outletId?.length || !categoryId || !subCategoryId) {
      return warnToast("Fill all the fields");
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("allergens", allergens);
    formData.append("nutrition", nutrition);
    formData.append("sku", sku);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("quantity", quantity);
    formData.append("dimension", dimension);
    formData.append("returnPolicy", returnPolicy);
    formData.append("shippingInfo", shippingInfo);
    formData.append("productColor", productColor);
    formData.append("productSize", productSize);
    formData.append("online", online);
    formData.append("inStore", inStore);
    formData.append("keywords", keywords);
    formData.append("outletId", outletId);
    formData.append("categoryId", categoryId);
    formData.append("subCategoryId", subCategoryId);

    try {
      const response = await createApiData(
        "https://money-chat.com/api/api/v1/brandLoyalty/createProduct",
        formData
      );
      successToast("Create Successfully");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
      setTimeout(() => {
        setSuccess1(true);
      }, 2000);
      setTimeout(() => {
        setSuccess1(false);
        navigate("/inventory");
      }, 3000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleUpdateProduct = async (event) => {
    event.preventDefault();
   
    const formData = new FormData();
    formData.append("image", image || productInfo?.image);
    formData.append("name", name || productInfo?.name);
    formData.append("description", description || productInfo?.description);
    formData.append("allergens", allergens || productInfo?.allergens);
    formData.append("nutrition", nutrition || productInfo?.nutrition);
    formData.append("sku", sku || productInfo?.sku);
    formData.append("price", price || productInfo?.price);
    formData.append("brand", brand || productInfo?.brand);
    formData.append("quantity", quantity || productInfo?.quantity);
    formData.append("dimension", dimension || productInfo?.dimension);
    formData.append("returnPolicy", returnPolicy || productInfo?.returnPolicy);
    formData.append("shippingInfo", shippingInfo || productInfo?.shippingInfo);
    formData.append("productColor", productColor || productInfo?.productColor);
    formData.append("productSize", productSize || productInfo?.productSize);
    formData.append("online", online || productInfo?.online);
    formData.append("inStore", inStore || productInfo?.inStore);
    formData.append("keywords", keywords || productInfo?.keywords);
    formData.append("outletId", outletId || productInfo?.outletId);
    formData.append("categoryId", categoryId || productInfo?.categoryId);
    formData.append(
      "subCategoryId",
      subCategoryId || productInfo?.subCategoryId
    );

    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/updateProduct/${productInfo?._id}`,
        formData
      );
      successToast("Update Successfully");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/inventory");
      }, 1000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleMarkAsProductOutOfStock = async (id) => {
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/markAsProductOutOfStock/${id}`
      );
      successToast("Mark Out Of Stock Successfully");
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleMarkAsProductAsHighlight = async (id) => {
    try {
      const response = await updateApiData(
        `https://money-chat.com/api/api/v1/brandLoyalty/markAsProductAsHighlight/${id}`
      );
      setOpenHighlights(true);
      setTimeout(() => {
        setOpenHighlights(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    product,
    name,
    setName,
    image,
    setImage,
    description,
    setDescription,
    allergens,
    setAllergens,
    nutrition,
    setNutrition,
    sku,
    setSku,
    price,
    setPrice,
    brand,
    setBrand,
    quantity,
    setQuantity,
    shippingInfo,
    setShippingInfo,
    returnPolicy,
    setReturnPolicy,
    productColor,
    setProductColor,
    productSize,
    setProductSize,
    online,
    setOnline,
    inStore,
    setInStore,
    keywords,
    setKeywords,
    dimension,
    setDimension,
    outletId,
    setOutletId,
    categoryId,
    setCategoryId,
    subCategoryId,
    setSubCategoryId,
    selectedSubCat,
    setSubCat,
    openSuccess,
    setSuccess,
    openSuccess1,
    setSuccess1,
    handleOutlate,
    handleCategory,
    category,
    subcategory,
    selectedOutlate,
    selectedCat,
    productInfo,
    openMenu,
    setOpenMenu,
    openHighlights,
    setOpenHighlights,
    range, setRange,
    range1, setRange1,
    startDate, setStartDate,
    endDate, setEndDate,
    fetchSubCategory,
    getProduct,
    getProductById,
    handleCreateProduct,
    handleUpdateProduct,
    handleMarkAsProductOutOfStock,
    handleMarkAsProductAsHighlight,
  };
};

export default useProduct;
